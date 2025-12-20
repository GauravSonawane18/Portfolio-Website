"use client";

import { useState, useEffect } from "react";
import { FaHtml5, FaCss3, FaJava, FaPython } from "react-icons/fa";
import {
  SiTailwindcss,
  SiMysql,
  SiPostgresql,
  SiPostman,
  SiScikitlearn,
  SiPandas,
  SiJavascript,
  SiReact,
} from "react-icons/si";

import { Tabs, TabsContent } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";

const skills = {
  title: "My Skills",
  description:
    "Tools I’ve grown with - shaping ideas into experiences, and code into collaboration.",
  skillList: [
    { icon: <FaJava />, name: "Java" },
    { icon: <FaPython />, name: "Python" },
    { icon: <SiJavascript />, name: "JavaScript" },
    { icon: <SiMysql />, name: "MySQL" },
    { icon: <SiReact />, name: "React" },
    { icon: <SiTailwindcss />, name: "TailwindCSS" },
    { icon: <SiPostgresql />, name: "Postgresql" },
    { icon: <SiPostman />, name: "Postman" },
    { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <FaCss3 />, name: "CSS3" },
    { icon: <SiScikitlearn />, name: "Scikit-Learn" },
    { icon: <SiPandas />, name: "Pandas" },
  ],
};

export default function SkillsSection() {

  const [visibleSkill, setVisibleSkill] = useState(null);
  const [timeoutId, setTimeoutId] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile vs desktop (Tailwind sm breakpoint = 640px)
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleIconClick = (index) => {
    if (!isMobile) return; // Only act in mobile mode
    if (timeoutId) clearTimeout(timeoutId);

    setVisibleSkill(index);
    const id = setTimeout(() => setVisibleSkill(null), 3000);
    setTimeoutId(id);
  };

  return (
    <section id="skills" className="py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.3, duration: 0.4 } }}
          className="w-full pt4 pb-16"
        >
          <div className="container mx-auto">
            <Tabs
              defaultValue="skills"
              className="flex flex-col xl:flex-row gap-[60px]"
            >
              <div className="w-full">
                <TabsContent value="skills" className="w-full h-full">
                  <div className="flex flex-col gap-[30px]">
                    {/* Heading */}
                    <div className="flex flex-col gap-[30px] text-center xl:text-left">
                      <h3 className="text-4xl font-bold">{skills.title}</h3>
                      <p className="max-w-[1000px] text-white/60 mx-auto xl:mx-0">
                        {skills.description}
                      </p>
                    </div>

                    {/* Skills grid */}
                    <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 md:grid-cols-4 md:gap-4 xl:gap-7">
                      {skills.skillList.map((skill, index) => (
                        <li key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              {/* group → enables group-hover on desktop */}
                              <TooltipTrigger
                                onClick={() => handleIconClick(index)}
                                className="group w-full h-[100px] bg-[#232329] rounded-xl flex flex-col items-center justify-center text-center cursor-pointer"
                              >
                                {/* Icon */}
                                <div
                                  className={`text-5xl transition-colors duration-300 ${
                                    isMobile
                                      ? visibleSkill === index
                                        ? "text-accent"
                                        : "text-white"
                                      : "group-hover:text-accent text-white"
                                  }`}
                                >
                                  {skill.icon}
                                </div>

                                {/* Mobile label (visible after tap) */}
                                {isMobile && (
                                  <p
                                    className={`mt-2 text-sm transition-opacity duration-300 ${
                                      visibleSkill === index
                                        ? "opacity-100"
                                        : "opacity-0"
                                    }`}
                                  >
                                    {skill.name}
                                  </p>
                                )}
                              </TooltipTrigger>

                              {/* Desktop tooltip on hover */}
                              {!isMobile && (
                                <TooltipContent>
                                  <p className="capitalize">{skill.name}</p>
                                </TooltipContent>
                              )}
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      ))}
                    </ul>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </motion.div>
    </section>
  );
}
