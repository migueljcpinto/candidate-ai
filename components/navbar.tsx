"use client";
import { Menu, Sparkles } from "lucide-react";
import { Poppins } from "next/font/google";
import Link from "next/link";
import React from "react";
import { UserButton } from "@clerk/nextjs";

import { cn } from "@/lib/utils";
import { ModeToggle } from "./mode-toggle";
import MobileSidebar from "./mobile-sidebar";
import Image from "next/image";

const font = Poppins({
  weight: "600",
  subsets: ["latin"],
});

const Navbar = () => {
  return (
    <div className="fixed w-full z-50 flex justify-between items-center py-2 px-4 border-b border-primary/10 bg-secondary h-16">
      <div className="flex items-center">
        <MobileSidebar />
        <Link href="/">
          <div className="flex items-center">
            <Image
              src="/portuguesinha.png"
              alt="logo"
              width={45}
              height={45}
              className="hidden md:block"
            />
            <h1
              className={cn(
                " text-xl md:text-3xl font-bold text-primary",
                font.className
              )}
            >
              AI Candidato
            </h1>
          </div>
        </Link>
      </div>
      <div className="flex items-center gap-x-3">
        <ModeToggle />
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default Navbar;
