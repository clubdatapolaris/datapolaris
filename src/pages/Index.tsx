import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition";

// Import multiple background images
import bg1 from "../components/images/squidmaze.jpg";
import bg2 from "../components/images/group_phot_24.jpg";
import bg3 from "../components/images/sthings_dp.jpg";

const Index: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Background slider state
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [bg2, bg1, bg3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000); // change every 5s
    return () => clearInterval(interval);
  }, [images.length]);

  // Particle background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    const particles: {
      x: number;
      y: number;
      radius: number;
      color: string;
      speedX: number;
      speedY: number;
    }[] = [];

    const createParticles = () => {
      const particleCount = Math.min(Math.floor(window.innerWidth / 10), 200);
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2 + 0.5,
          color: `rgba(255,255,255,${Math.random() * 0.6 + 0.3})`,
          speedX: Math.random() * 0.5 - 0.25,
          speedY: Math.random() * 0.5 - 0.25,
        });
      }
    };
    createParticles();

    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      });
    };
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <PageTransition>
      <main className="relative min-h-screen">
        {/* Canvas background */}
        <canvas ref={canvasRef} className="absolute inset-0 z-0" />

        {/* Background slideshow */}
        <div className="absolute inset-0 z-0 h-screen overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 1.1, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: -20 }}
              transition={{ duration: 1.4, ease: "easeOut" }}
            >
              <img
                src={images[currentIndex]}
                alt="Background"
                className="w-full h-full object-cover"
              />
              {/* Dark overlay for beauty */}
              <div className="absolute inset-0 bg-black/40" />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Hero Section */}
        <section className="relative z-10 flex items-center justify-center min-h-screen">
          <div className="absolute inset-0 bg-gradient-radial from-transparent to-club-dark" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-4 inline-flex items-center bg-white/5 backdrop-blur-sm rounded-full px-4 py-1 border border-white/10"
            >
              <Star className="h-4 w-4 text-club-accent mr-2" />
              <span className="text-sm font-medium text-white/90">
                Innovate. Connect. Inspire.
              </span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 font-display"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <span className="text-glow">Welcome to</span> <br />
              <span className="text-orange-500">
                Data <span className="text-sky-500">Polaris</span>
              </span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              Where Data Meets Discovery & Innovation Thrives.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              <Link
                to="/about"
                className="inline-flex items-center bg-club-accent hover:bg-club-accent/15 text-white font-medium rounded-full px-8 py-3 transition-all duration-300 hover:shadow-lg hover:shadow-club-accent/20"
              >
                Learn More <ArrowRight className="ml-2 h-5 w-5" />
              </Link>

              <Link
                to="https://chat.whatsapp.com/DYS9BFXhNcEHTHS4T2H8Qp"
                className="inline-flex items-center bg-transparent hover:bg-white/5 border border-white/20 hover:border-white/40 text-white font-medium rounded-full px-8 py-3 transition-all duration-300"
              >
                Join Us
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="relative z-20 py-24 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-display">
                What We <span className="text-orange-500">Offer</span>
              </h2>
              <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
                Join us to explore a world of opportunities, experiences, and connections.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                {
                  title: "Skill Development",
                  description:
                    "Access workshops, resources, and mentorship to enhance your skills in your area of interest.",
                  delay: 1,
                },
                {
                  title: "Networking",
                  description:
                    "Connect with like-minded individuals, alumni, and industry professionals.",
                  delay: 2,
                },
                {
                  title: "Events & Competitions",
                  description:
                    "Participate in exciting events, hackathons, and competitions throughout the year.",
                  delay: 3,
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="relative rounded-2xl p-8 bg-gradient-to-br from-neutral-900 via-black to-neutral-950 
                     border border-neutral-800 shadow-[0_8px_20px_rgba(0,0,0,0.6)] 
                     hover:shadow-[0_12px_30px_rgba(255,115,0,0.1)] 
                     hover:border-orange-700/40 
                     transition-all duration-500 hover:-translate-y-2"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.7,
                    delay: feature.delay * 0.3,
                    ease: "easeOut",
                  }}
                >
                  {/* Optional texture overlay */}
                  <div className="absolute inset-0 opacity-[0.07] bg-[url('https://www.transparenttextures.com/patterns/rocky-wall.png')] bg-repeat rounded-2xl pointer-events-none"></div>

                  <h3 className="text-2xl font-semibold text-white mb-3 relative z-10">
                    {feature.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed relative z-10">
                    {feature.description}
                  </p>

                  <div className="mt-4 h-[1px] w-16 bg-orange-600/80 rounded-full"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      </main>
    </PageTransition>
  );
};

export default Index;
