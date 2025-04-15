// src/components/layout/Navbar.tsx
"use client"; // Needed for NavigationMenu and ThemeToggle interactivity

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { ThemeToggle } from "@/components/sections/ThemeToggle";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="flex h-14 items-center">
        <Link href="/" className="mx-3 md:mr-6 flex items-center md:space-x-2">
          <span className="relative text-sm md:text-base font-bold">
            Justin <span className="hidden md:inline-flex">Koay</span>
          </span>
        </Link>
        <NavigationMenu className="flex flex-1 ">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className="text-xs md:text-sm px-1 md:px-2">
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/projects" legacyBehavior passHref>
                <NavigationMenuLink className="text-xs md:text-sm px-1 md:px-2">
                  Projects
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/resume" legacyBehavior passHref>
                <NavigationMenuLink className="text-xs md:text-sm px-1 md:px-2">
                  Resume
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="https://blog.iwa.my" legacyBehavior passHref>
                <NavigationMenuLink className="text-xs md:text-sm px-1 md:px-2">
                  blog
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex flex-1 items-center justify-end space-x-4">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
