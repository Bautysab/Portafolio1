"use client"

import { useEffect, useRef } from "react"

interface Star {
  x: number
  y: number
  z: number
  size: number
  color: string
}

export function GalaxyBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const starsRef = useRef<Star[]>([])
  const mouseRef = useRef({ x: 0, y: 0 })
  const animationFrameRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas to full screen
    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasSize()
    window.addEventListener("resize", setCanvasSize)

    // Create stars
    const createStars = () => {
      const stars: Star[] = []
      const starColors = ["#ffffff", "#ffe9e9", "#e9e9ff", "#e9ffff", "#ffe9ff", "#ffffcc"]

      for (let i = 0; i < 800; i++) {
        stars.push({
          x: Math.random() * canvas.width - canvas.width / 2,
          y: Math.random() * canvas.height - canvas.height / 2,
          z: Math.random() * 1000,
          size: Math.random() * 2,
          color: starColors[Math.floor(Math.random() * starColors.length)],
        })
      }

      starsRef.current = stars
    }

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX - canvas.width / 2,
        y: e.clientY - canvas.height / 2,
      }
    }

    window.addEventListener("mousemove", handleMouseMove)

    // Animation
    const animate = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const centerX = canvas.width / 2
      const centerY = canvas.height / 2

      // Update and draw stars
      starsRef.current.forEach((star) => {
        // Move stars based on mouse position (parallax effect)
        const mouseXEffect = mouseRef.current.x * 0.0001
        const mouseYEffect = mouseRef.current.y * 0.0001

        // Update star position
        star.z -= 0.5

        if (star.z <= 0) {
          star.z = 1000
          star.x = Math.random() * canvas.width - centerX
          star.y = Math.random() * canvas.height - centerY
        }

        // Calculate screen position
        const factor = 200 / star.z
        const x = star.x * factor + centerX + mouseXEffect * star.z
        const y = star.y * factor + centerY + mouseYEffect * star.z
        const size = star.size * factor

        // Draw star
        if (x > 0 && x < canvas.width && y > 0 && y < canvas.height) {
          ctx.beginPath()
          ctx.fillStyle = star.color
          ctx.arc(x, y, size, 0, Math.PI * 2)
          ctx.fill()

          // Add glow effect for larger stars
          if (size > 1) {
            ctx.beginPath()
            const gradient = ctx.createRadialGradient(x, y, 0, x, y, size * 4)
            gradient.addColorStop(0, star.color.replace(")", ", 0.3)").replace("rgb", "rgba"))
            gradient.addColorStop(1, "rgba(0, 0, 0, 0)")
            ctx.fillStyle = gradient
            ctx.arc(x, y, size * 4, 0, Math.PI * 2)
            ctx.fill()
          }
        }
      })

      // Draw occasional shooting star
      if (Math.random() < 0.01) {
        const startX = Math.random() * canvas.width
        const startY = (Math.random() * canvas.height) / 3
        const length = 50 + Math.random() * 100
        const angle = Math.PI / 4 + (Math.random() * Math.PI) / 4

        ctx.beginPath()
        ctx.moveTo(startX, startY)
        ctx.lineTo(startX + Math.cos(angle) * length, startY + Math.sin(angle) * length)

        const gradient = ctx.createLinearGradient(
          startX,
          startY,
          startX + Math.cos(angle) * length,
          startY + Math.sin(angle) * length,
        )
        gradient.addColorStop(0, "rgba(255, 255, 255, 0.8)")
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)")

        ctx.strokeStyle = gradient
        ctx.lineWidth = 2
        ctx.stroke()
      }

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    createStars()
    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", setCanvasSize)
      window.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(animationFrameRef.current)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
      style={{ background: "linear-gradient(to bottom, #000000, #050520, #000000)" }}
    />
  )
}
