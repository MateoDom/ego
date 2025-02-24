"use client";

import * as React from "react";

import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const navigation = [
    { name: "Modelos", href: "/modelos" },
  ];

  return (
    <nav className="border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center">
          <div className="flex items-center">
            {/* <Link href="/" className="text-xl font-bold"> */}
            EGO
            {/* </Link> */}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:space-x-8">
            {navigation.map((item) => (
              //   <Link
              //     key={item.name}
              //     href={item.href}
              //     className={cn(
              //       "inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 transition-colors",
              //       "relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:scale-x-0 after:bg-red-500 after:transition-transform after:duration-300",
              //       pathname === item.href && "after:scale-x-100",
              //     )}
              //   >
              <> {item.name}</>
              //   </Link>
            ))}
          </div>

          {/* Menu Button */}
          <div className="flex items-center gap-2">
            <span className="hidden md:block text-sm">Menu</span>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-4 pb-3 pt-2">
            {navigation.map((item) => (
              //   <Link
              <>{item.name}</>
              //     key={item.name}
              //     href={item.href}
              //     className={cn(
              //       "block px-3 py-2 text-base font-medium text-gray-900",
              //       pathname === item.href && "text-red-500",
              //     )}
              //     onClick={() => setIsOpen(false)}
              //   >
              //     {item.name}
              //   </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
