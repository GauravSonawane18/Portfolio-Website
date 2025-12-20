"use client";

import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import NpxCard from "@/components/NpxCard";

import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";
import { useMotionValue, useTransform } from "framer-motion";

import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

const Home = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  return (
    <main className="h-full">
      {/* Main Home Section */}
      <section
        id="home"
        onMouseMove={(e) => {
          mouseX.set(e.clientX - window.innerWidth / 2);
          mouseY.set(e.clientY - window.innerHeight / 2);
        }}
        className="min-h-screen items-center pt-28 relative"
      >
        <div className="container mx-auto h-full">
          <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-0 xl:pb-8">
            {/* text */}
            <div className="text-center xl:text-left order-2 xl:order-none px-4">
              <span className="text-sm sm:text-base text-white/60 block mb-2">
                Software Developer
              </span>
              <motion.h1
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: {
                    transition: { staggerChildren: 0.12 },
                  },
                }}
                className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 leading-tight"
              >
                <motion.span
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className="block"
                >
                  Hello I&apos;m
                </motion.span>

                <motion.span
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className="block text-accent"
                >
                  Gaurav Sonawane
                </motion.span>
              </motion.h1>
              <span className="text-base sm:text-lg text-white/60 block mb-1">
                Tech Tamer
              </span>
              <span className="text-base sm:text-lg text-white/60 block mb-1">
                Converts air into code
              </span>{" "}
              <br />
              {/* Button and Socials */}
              <div className="flex flex-col xl:flex-row items-center gap-8">
                <a
                  href="./assets/Gaurav Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="uppercase flex items-center gap-2"
                  >
                    <span>Download CV</span>
                    <FiDownload className="text-xl" />
                  </Button>
                </a>
                <div className="mb-8 xl:mb-0">
                  <Social
                    containerStyles="flex gap-6"
                    iconStyles="w-12 h-12 border border-accent rounded-full flex justify-center items-center text-acccent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                  />
                </div>
              </div>
              <div className="lg:pt-6 md:pt-4 sm:pt-2">
                <NpxCard />
              </div>  
            </div>
            {/* photo */}
            <motion.div
              style={{
                x: useTransform(mouseX, [-500, 500], [-20, 20]),
                y: useTransform(mouseY, [-500, 500], [-20, 20]),
              }}
            >
              <Photo />
            </motion.div>
          </div>
        </div>
        <Stats />
      </section>

      {/* OTHER SECTIONS */}
      <SkillsSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
};

export default Home;
