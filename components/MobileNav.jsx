"use client";

import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import Image from "next/image"

const links = [
  { name: "home", path: "/#home" },
  { name: "skills", path: "/#skills" },
  { name: "projects", path: "/#projects" },
  { name: "about", path: "/#about" },
  { name: "contact", path: "/#contact" },
];

const MobileNav = () => {
  // const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        className="flex justify-center items-center text-3xl"
        aria-label="Toggle menu"
      >
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>

      <SheetContent className="flex flex-col justify-between">
        {/* logo */}
        <div className="mt-32 mb-28 flex justify-center text-center text-2xl">
          <Link href="/" onClick={() => setOpen(false)}>
            <Image
              src="/assets/gs-logo.png"
              alt="Gaurav Logo"
              width={40}
              height={40}
              className="rounded-lg object-contain mx-12 py-4 md:w-[50px] md:h-[50px]"
            />
            <h1 className="text-4xl font-semibold">
              Gaurav<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>

        {/* nav */}
        <nav className="flex flex-col justify-center items-center pb-16 gap-8">
          {links.map((link, index) => (
            <Link
              href={link.path}
              key={index}
              onClick={() => setOpen(false)} // closes menu after click
              className={`text-xl capitalize hover:text-accent transition-all`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
