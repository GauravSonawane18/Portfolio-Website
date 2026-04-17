"use client";

import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useMotionValue } from "framer-motion";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    num: "01",
    category: "AI / Full Stack Healthcare",
    title: "AI-Powered Medical Assistant",
    description:
      "Developed a full-stack AI-powered medical assistant mobile application that enables real-time patient interaction through an intelligent chatbot. Built with FastAPI backend, React Native frontend, PostgreSQL database, JWT authentication, WebSocket live updates, doctor review system, and OpenAI API integration for context-aware medical guidance.",
    stack: [
      { name: "FastAPI" },
      { name: "React Native" },
      { name: "PostgreSQL" },
      { name: "OpenAI API" },
      { name: "WebSocket" },
    ],
    image: "/assets/work/thumb1.png",
    live: " ",
    github: "https://github.com/GauravSonawane18/AI-Powered-Medical-Assistant.git",
  },

  {
    num: "02",
    category: "Machine Learning",
    title: "Movie Recommendation Engine",
    description:
      "Built a content-based Movie Recommendation Engine using Python and Streamlit. Used TMDB dataset with cosine similarity from Scikit-Learn to recommend similar movies based on genre, cast, keywords, language, and overview. Integrated TMDB API for dynamic poster fetching and improved user experience.",
    stack: [
      { name: "Python" },
      { name: "Streamlit" },
      { name: "Scikit-Learn" },
      { name: "Pandas" },
      { name: "TMDB API" },
    ],
    image: "/assets/work/thumb2.png",
    live: " ",
    github:
      "https://github.com/GauravSonawane18/Movie-Recommendation-Engine.git",
  },

  {
    num: "03",
    category: "Blockchain / Java Development",
    title: "Blockchain Based Online Voting System",
    description:
      "Developed a secure online voting platform using blockchain principles to ensure transparency, immutability, and fraud prevention. Implemented voter authentication, vote encryption, result integrity, and decentralized vote storage using Java-based backend architecture.",
    stack: [
      { name: "Java" },
      { name: "Blockchain" },
      { name: "Spring Boot" },
      { name: "MySQL" },
    ],
    image: "/assets/work/thumb3.png",
    live: " ",
    github: "https://github.com/GauravSonawane18/Blockchain-based-Online-Voting-System.git",
  },
];

export default function ProjectsSection() {
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    tiltX.set((y / rect.height - 0.5) * -15);
    tiltY.set((x / rect.width - 0.5) * 15);
  };

  const resetTilt = () => {
    tiltX.set(0);
    tiltY.set(0);
  };

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowRight") {
        setActiveIndex((prev) => (prev + 1) % projects.length);
      }
      if (e.key === "ArrowLeft") {
        setActiveIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <section id="projects" className="relative pt-4 pb-24">
      <div className="flex justify-center gap-6 mt-4 mb-4 flex-wrap">
        {projects.map((project, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`px-5 py-2 rounded-full text-lg font-medium transition-all ${
              activeIndex === index
                ? "bg-accent text-primary shadow-[0_0_25px_rgba(0,255,153,0.6)]"
                : "bg-white/5 text-white/60 hover:text-accent"
            }`}
          >
            {project.num}
          </button>
        ))}
      </div>

      <div className="xl:sticky xl:top-28 container mx-auto flex flex-col xl:flex-row gap-10 xl:gap-16 items-center">
        <div className="w-full xl:w-1/2">
          <AnimatePresence mode="wait">
            <motion.div
              key={projects[activeIndex]?.title}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.5 }}
              className="space-y-5"
            >
              <span className="text-accent text-sm tracking-widest uppercase">
                {projects[activeIndex]?.category}
              </span>

              <h2 className="text-4xl xl:text-5xl font-bold">
                {projects[activeIndex]?.title}
              </h2>

              <p className="text-white/60 max-w-[520px]">
                {projects[activeIndex]?.description}
              </p>

              <ul className="flex flex-wrap gap-3 text-accent">
                {projects[activeIndex]?.stack.map((tech, i) => (
                  <li key={i} className="text-sm">
                    #{tech.name}
                  </li>
                ))}
              </ul>

              <div className="flex gap-6">
                <Link
                  href={projects[activeIndex]?.github}
                  target="_blank"
                  className="flex items-center gap-2 group"
                >
                  <BsGithub className="text-xl group-hover:text-accent transition" />
                  <span className="group-hover:text-accent">Source Code</span>
                </Link>

                {projects[activeIndex]?.live && (
                  <Link
                    href={projects[activeIndex]?.live}
                    target="_blank"
                    className="flex items-center gap-2 group"
                  >
                    <BsArrowUpRight className="text-xl group-hover:text-accent transition" />
                    <span className="group-hover:text-accent">Live Demo</span>
                  </Link>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="w-full xl:w-1/2">
          <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={resetTilt}
            style={{
              rotateX: tiltX,
              rotateY: tiltY,
              transformStyle: "preserve-3d",
            }}
            className="relative w-full h-[240px] sm:h-[300px] xl:h-[420px] rounded-xl xl:rounded-2xl overflow-hidden xl:shadow-[0_0_80px_rgba(0,255,153,0.15)]"
          >
            <Image
              src={projects[activeIndex]?.image}
              fill
              className="object-cover"
              alt=""
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}