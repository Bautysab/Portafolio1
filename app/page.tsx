"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framdesarrollo web y servicios para servidores FiveMcomponents/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Code, Server, Zap, ChevronDown } from "lucide-react"
import { efault function Home() {
  const { scrollY } = useScroll()
  const heroRef = useRef<HTMLDivElement>(null)
  const [isScrolled, setIsScrolled] = useState(false)

  // Parallax effects
  const y1 = useTransform(scrollY, [0, 500], [0, -100])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])
  const scale = useTransform(scrollY, [0, 300], [1, 0.9])

  // Check scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="relative min-h-screen text-white overflow-hidden">
      {/* Galaxy Background */}
      <GalaxyBackground />

      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-black/70 backdrop-blur-md py-3" : "py-6"}`}
      >
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400">
              VortexDev
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:flex space-x-8"
          >
            <a href="#sobre-mi" className="text-gray-300 hover:text-white transition-colors">
              Sobre Mí
            </a>
            <a href="#servicios" className="text-gray-300 hover:text-white transition-colors">
              Servicios
            </a>
            <a href="#contacto" className="text-gray-300 hover:text-white transition-colors">
              Contacto
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:hidden"
          >
            <Button variant="ghost" size="icon" className="text-white">
              <span className="sr-only">Menú</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </Button>
          </motion.div>
        </div>
      </nav>

      {/* Hero section */}
      <section
        ref={heroRef}
        className="relative h-screen flex flex-col items-center justify-center px-4 overflow-hidden"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ y: y1, opacity, scale }}
          className="text-center z-10"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-white text-sm font-medium mb-4">
              Desarrollo Web & Servidores FiveM
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400">
            VortexDev
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-8">
            Soluciones de desarrollo web y servicios para servidores FiveM
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/20 rounded-full px-8"
            >
              <a href="#servicios">
                Explorar Servicios <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
        >
          <ChevronDown className="h-8 w-8 text-white/70" />
        </motion.div>
      </section>

      {/* About section */}
      <section id="sobre-mi" className="relative py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative z-10 rounded-2xl overflow-hidden shadow-2xl shadow-purple-500/20 border border-white/10"
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-462jFMkKcvWrTguUoWfpS22aXKLAsR.png"
                  alt="Mirando al horizonte de la ciudad"
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
                Sobre Mí
              </h2>

              <p className="text-gray-300 text-lg mb-6">
                Soy Bautii.Sab, desarrollador web y especialista en servidores FiveM. Mi pasión es crear experiencias
                digitales únicas y soluciones técnicas avanzadas para proyectos web y servidores de juegos.
              </p>

              <p className="text-gray-300 text-lg mb-8">
                Con VortexDev, ofrezco servicios de desarrollo personalizados que combinan diseño atractivo con
                funcionalidad robusta, asegurando que cada proyecto destaque en el mundo digital.
              </p>

              <div className="flex flex-wrap gap-4">
                <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-white text-sm font-medium border border-white/10">
                  Desarrollo Web
                </span>
                <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-white text-sm font-medium border border-white/10">
                  Servidores FiveM
                </span>
                <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-white text-sm font-medium border border-white/10">
                  Diseño UI/UX
                </span>
                <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-white text-sm font-medium border border-white/10">
                  Desarrollo Backend
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services section */}
      <section id="servicios" className="relative py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400">
              Mis Servicios
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ofrezco soluciones completas para tus necesidades digitales y de gaming
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Code className="h-10 w-10 text-purple-400" />,
                title: "Desarrollo Web",
                description: "Sitios web modernos, responsivos y optimizados con las últimas tecnologías y frameworks.",
                features: ["Sitios Responsivos", "Aplicaciones Web", "E-commerce", "Optimización SEO"],
              },
              {
                icon: <Server className="h-10 w-10 text-cyan-400" />,
                title: "Servidores FiveM",
                description: "Configuración, desarrollo y mantenimiento de servidores FiveM personalizados.",
                features: ["Scripts Personalizados", "Optimización", "Sistemas de Economía", "Mapas Personalizados"],
              },
              {
                icon: <Zap className="h-10 w-10 text-purple-400" />,
                title: "Servicios de Desarrollo",
                description: "Soluciones de desarrollo a medida para proyectos digitales y servidores de juegos.",
                features: ["APIs Personalizadas", "Bases de Datos", "Integración de Sistemas", "Soporte Técnico"],
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <Card className="bg-black/40 backdrop-blur-md border-white/10 overflow-hidden h-full hover:border-white/30 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="mb-6 p-4 rounded-2xl bg-white/5 inline-block border border-white/10">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-white">{service.title}</h3>
                    <p className="text-gray-300 mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-gray-300">
                          <span className="h-1.5 w-1.5 rounded-full bg-purple-400 mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section id="contacto" className="relative py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400">
              Contacto
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              ¿Interesado en mis servicios? Contáctame directamente a través de Discord
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden"
          >
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">Hablemos sobre tu proyecto</h3>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Estoy disponible para discutir tus ideas y cómo puedo ayudarte a llevarlas a cabo. Contáctame a través
                de Discord para una respuesta rápida.
              </p>

              <Button
                size="lg"
                className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/20 rounded-full px-8 py-6 text-lg"
                onClick={() => {
                  window.open("https://discord.com/channels/@me/1364746613599244331", "_blank")
                }}
              >
                Contactar por Discord
              </Button>

              <p className="text-gray-400 mt-6 text-sm">* Haz clic en el botón para abrir la conversación de Discord</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/10 backdrop-blur-md bg-black/30">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
              VortexDev
            </h2>
            <p className="text-gray-400 mt-2">Desarrollo Web & Servidores FiveM</p>
          </div>

          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <a href="#sobre-mi" className="text-gray-300 hover:text-white transition-colors">
              Sobre Mí
            </a>
            <a href="#servicios" className="text-gray-300 hover:text-white transition-colors">
              Servicios
            </a>
            <a href="#contacto" className="text-gray-300 hover:text-white transition-colors">
              Contacto
            </a>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-white/10 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} VortexDev. Todos los derechos reservados.</p>
        </div>
      </footer>
    </main>
  )
}
