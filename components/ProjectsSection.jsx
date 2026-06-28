"use client";

import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useMotionValue, useTransform } from "framer-motion";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Machine Learning, Web Application Developement",
    title: "CineScout - Movie Recommender Engine",
    description: "Built high-performance AI-powered movie recommendation engine using Python, Streamlit, Scikit-learn, and TF-IDF Vectorization. The system delivers accurate content-based recommendations through dynamic cosine similarity on movie metadata while leveraging an optimized sparse-vector architecture for improved scalability and memory efficiency. Integrated TMDB APIs for live trending movies and metadata, and designed a modern OTT-inspired responsive user interface.",
    stack: [
      { name: "Python" },
      { name: "Machine Learning" },
      { name: "Streamlit" },
      { name: "TF-IDF" },
      { name: "Sci-Kit Learn" },
      { name: "Pandas" },
      { name: "NLP" },
      { name: "TMDB API" }
    ],
    image: "/assets/work/thumb01.png",
    live: "https://cinescout.streamlit.app",
    github: "https://github.com/GauravSonawane18/CineScout-Movie-Recommendation-Engine.git",
  },

  {
    num: "02",
    category: "Artificial Intelligence, Mobile Application Developement",
    title: "AI-Powered Medical Assistant",
    description: "Built an intelligent healthcare platform that leverages Generative AI to analyze patient symptoms, provide preliminary medical guidance, prioritize high-risk cases, and assist healthcare professionals with real-time decision support. Designed a responsive full-stack application featuring AI-powered conversations, patient management, medical history tracking, and automated symptom triage to improve clinical workflow and patient engagement.",
    stack: [
      { name: "Python" },
      { name: "GenerativeAI" },
      { name: "LLM" },
      { name: "OpenAI" },
      { name: "FastAPI" },
      { name: "RESTful API" },
      { name: "ReactNative" },
      { name: "PostgreSQL" },
    ],
    image: "/assets/work/thumb02.png",
    live: " ",
    github: "https://github.com/GauravSonawane18/AI-Powered-Medical-Assistant.git",
  },

  {
    num: "03",
    category: "Blockchain, Full-Stack Development, Cybersecurity",
    title: "Blockchain-Based Online Voting System",
    description: "Developed a secure, decentralized online voting platform using Ethereum, Solidity, Spring Boot, React, and PostgreSQL. The system ensures transparent and tamper-proof elections through smart contracts, MetaMask authentication, JWT-based security, OTP verification, and one-vote-per-user enforcement. Integrated AI-powered fraud detection and real-time election analytics to enhance voting integrity, security, and scalability.",
    stack: [
      { name: "Java" },
      { name: "SpringBoot" },
      { name: "Blockchain" },
      { name: "React" },
      { name: "PostgreSQL" },
      { name: "JWT Authentication" },
      { name: "Web3j" },
      { name: "Ethereum" },
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
            className={`
              px-5 py-2 rounded-full text-lg font-medium transition-all
              ${
                activeIndex === index
                  ? "bg-accent text-primary shadow-[0_0_25px_rgba(0,255,153,0.6)]"
                  : "bg-white/5 text-white/60 hover:text-accent"
              }
            `}
          >
            {project.num}
          </button>
        ))}
      </div>

      <div className="xl:sticky xl:top-28 container mx-auto flex flex-col xl:flex-row gap-10 xl:gap-16 items-center">
        {/* LEFT — PRODUCT INFO */}
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

              {/* Tech stack */}
              <ul className="flex flex-wrap gap-3 text-accent">
                {projects[activeIndex]?.stack.map((tech, i) => (
                  <li key={i} className="text-sm">
                    #{tech.name}
                  </li>
                ))}
              </ul>

              {/* CTAs */}
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

        {/* RIGHT — PRODUCT VISUAL */}
        <div className="w-full xl:w-1/2">
          <AnimatePresence mode="wait">
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
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
