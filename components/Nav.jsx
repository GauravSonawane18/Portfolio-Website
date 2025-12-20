"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    {
        name: "Home",
        path: "/#home",
    },
    {
        name: "Skills",
        path: "/#skills",
    },
    {
        name: "Projects",
        path: "/#projects",
    },
    {
        name: "About",
        path: "/#about",
    },
    {
        name: "Contact",
        path: "/#contact",
    },
]

const Nav = () => {
    // const pathname = usePathname();
    return (
        <nav className="flex gap-8">
            {links.map((link, index) => {
                return (
                    <Link 
                        href={link.path} 
                        key={index} 
                        className={`capitalize font-medium hover:text-accent transition-all`
                            }>
                        {link.name}
                    </Link>
                );
            })}
        </nav>
    );
}

export default Nav
