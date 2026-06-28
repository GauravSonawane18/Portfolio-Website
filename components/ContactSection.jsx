"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import emailjs from "@emailjs/browser";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaExclamationCircle,
} from "react-icons/fa";
import Footer from "@/components/Footer";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+91) 7447728645",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "gaurav.sonawane.08080@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Pune, Maharashtra, India, 411045",
  },
];

export default function ContactSection() {
  // idle | loading | success | error
  const [status, setStatus] = useState("idle");

  const formRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("loading");

    emailjs
      .sendForm(
        "service_portfolio",
        "template_auto-reply",
        formRef.current,
        "Y2ff7EtEqXxGDB_Zf"
      )
      .then(
        () => {
          setStatus("success");
          formRef.current.reset();

          setTimeout(() => setStatus("idle"), 4000);
        },
        (error) => {
          console.error(error);
          setStatus("error");
        }
      );
  };

  return (
    <section id="contact" className="pt-16 pb-0 flex flex-col">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay: 0.2, duration: 0.4, ease: "easeIn" }}
        className="w-full flex-1 px-4 py-10"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col xl:flex-row gap-[60px]">
            {/* INFO BLOCK */}
            <div className="flex-1 w-full flex items-start xl:justify-center order-1 xl:order-none mb-6 xl:mb-0">
              <ul className="flex flex-col gap-6 w-full max-w-[400px] px-2">
                <h3 className="text-xl sm:text-2xl text-accent">Contact Me</h3>
                {info.map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="min-w-[40px] h-[40px] sm:min-w-[44px] sm:h-[44px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[20px]">{item.icon}</div>
                    </div>
                    <div className="flex-1 overflow-hidden">
                      <p className="text-white/60 text-sm">{item.title}</p>
                      <h3 className="text-base break-words">
                        {item.description}
                      </h3>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* FORM BLOCK */}
            <div className="flex-1 xl:h-[54%] order-2 xl:order-none">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="flex flex-col gap-3 p-6 bg-[#27272c] rounded-xl"
              >
                <h3 className="text-3xl text-accent">
                  let&apos;s work together
                </h3>
                <p className="text-white/60 leading-snug font-thin text-sm">
                  Feel free to reach out for collaborations, freelance
                  opportunities, internships, or full-time roles. Whether it’s a
                  project, idea, or just a question—I’d love to connect and hear
                  from you.
                </p>

                {/* inputs */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <Input
                    type="text"
                    placeholder="Firstname"
                    name="client_name"
                    disabled={status === "loading" || status === "success"}
                    required
                  />
                  <Input
                    type="text"
                    placeholder="Lastname"
                    disabled={status === "loading" || status === "success"}
                  />
                  <Input
                    type="email"
                    placeholder="Email Address"
                    name="client_email"
                    disabled={status === "loading" || status === "success"}
                    required
                  />
                  <Input
                    type="tel"
                    placeholder="Phone Number"
                    disabled={status === "loading" || status === "success"}
                  />
                </div>

                {/* select */}
                {/* <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="web-dev">Web Development</SelectItem>
                      <SelectItem value="app-dev">
                        Application Development
                      </SelectItem>
                      <SelectItem value="devops">DevOps / Pipeline</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select> */}

                {/* textarea */}
                <Textarea
                  className="h-[60px]"
                  placeholder="Type your message here."
                  name="message"
                  required
                />

                {/* send button */}
                <motion.button
                  type="submit"
                  whileTap={{ scale: 0.95 }}
                  animate={
                    status === "error" ? { x: [0, -6, 6, -6, 6, 0] } : {}
                  }
                  transition={{ duration: 0.4 }}
                  className={`max-w-40 px-4 py-2 rounded-md font-medium transition-all 
                    ${status === "idle" && "bg-accent text-primary"} 
                    ${
                      status === "loading" &&
                      "bg-accent/70 text-primary cursor-wait"
                    } 
                    ${status === "success" && "bg-green-500 text-white"} 
                    ${status === "error" && "bg-red-500 text-white"}
                  `}
                  disabled={status === "loading" || status === "success"}
                >
                  {status === "idle" && "Send Message"}
                  {status === "loading" && "Sending..."}
                  {status === "success" && "Sent ✓"}
                  {status === "error" && "Try Again"}
                </motion.button>
                <AnimatePresence>
                  {status === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2 text-green-400 text-sm mt-2"
                    >
                      <FaCheckCircle />
                      Message sent successfully. I’ll get back to you soon!
                    </motion.div>
                  )}

                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2 text-red-400 text-sm mt-2"
                    >
                      <FaExclamationCircle />
                      Something went wrong. Please try again.
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </div>
        </div>
      </motion.div>
      <Footer />
    </section>
  );
}
