"use client";

import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaArrowUp,
  FaTwitter,
  FaDiscord,
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="w-full py-4 mt-8 md:py-4 border-t border-white/10"
    >
      <div className="container mx-auto px-2">
        {/* Bottom Row: Legal + Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-2 md:gap-4">
          <Link
            href="/#home"
            className="flex items-center gap-none hover:opacity-80 transition"
          >
            <Image
              src="/assets/gs-logo.png"
              alt="Gaurav Logo"
              width={40}
              height={40}
              className="rounded-lg object-contain md:w-[50px] md:h-[50px]"
            />
            <span className="text-accent">..</span>
          </Link>

          <div className="flex gap-4 md:gap-6">
            <a
              href="https://github.com/GauravSonawane18"
              target="_blank"
              className="text-xl md:text-2xl text-white/70 hover:text-accent transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              className="text-xl md:text-2xl text-white/70 hover:text-accent transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              className="text-xl md:text-2xl text-white/70 hover:text-accent transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              className="text-xl md:text-2xl text-white/70 hover:text-accent transition"
            >
              <FaTwitter />
            </a>
            <a
              href="https://discord.com"
              target="_blank"
              className="text-xl md:text-2xl text-white/70 hover:text-accent transition"
            >
              <FaDiscord />
            </a>
          </div>

          <div className="grid grid-rows-2 gap-none items-center">
            <div className="flex justify-center gap-4 md:gap-6 text-[11px] md:text-xs text-white/50 underline underline-offset-2">
              <Link href="#" className="hover:text-accent">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-accent">
                Terms of Service
              </Link>
            </div>

            <p className="text-xs md:text-sm text-white/50 text-center">
              <span className="text-2xl">©</span> {currentYear} Gaurav Sonawane
              • All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
