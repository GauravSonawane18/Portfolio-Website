"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { motion } from "framer-motion";
import { useMagnetic } from "@/hooks/useMagnetic";

const Header = () => {
  const magnetic = useMagnetic();
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed z-50 top-4 -translate-x-1/2 w-full px-4"
    >
      {/* DYNAMIC ISLAND */}
      <div
        className="
          bg-#1c1c22 backdrop-blur-xl border border-white/10
          rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.5)]
          flex items-center justify-between
          w-full max-w-[900px] 
          mx-auto
          py-2 px-4 sm:px-6 md:px-10
          gap-3 sm:gap-4
        "
      >
        {/* Logo */}
        <Link href="/#home" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-xs text-black font-semibold">
            GS
          </div>
          <span className="sm:inline text-lg font-semibold">
            Gaurav<span className="text-accent">.</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-8">
          <Nav />
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden xl:block">
          <div
            ref={magnetic.ref}
            onMouseMove={magnetic.onMouseMove}
            onMouseLeave={magnetic.onMouseLeave}
          >
            <Link href="/#contact">
              <Button size="sm" className="rounded-full">
                Hire Me
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile Navigation Trigger */}
        <div className="flex xl:hidden ml-auto">
          <MobileNav />
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
