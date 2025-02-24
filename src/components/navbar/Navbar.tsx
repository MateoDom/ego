
import { Link, useLocation } from "react-router";
import Logo from "@/assets/logo.svg";
import { cn } from "@/lib/utils";
import { useState } from "react";

export function Navbar() {
  const [isOpen] = useState(false);
  const location = useLocation();
  const navigation = [
    { name: "Modelos", href: "/" },
    { name: "Detalle de modelo", href: "/detail" },
  ];

  return (
    <nav className="border-b border-gray-100">
      <div className="flex justify-between items-center px-6">
        <div className="flex items-center  h-[70px]">
            <Link to={'/'}>
              <img src={Logo} alt="EGO" className="h-10 w-10 rounded-full" />
            </Link>

          {/* Desktop Navigation */}
          <div className="hidden h-full ml-16 md:flex md:space-x-8  ">
            {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "inline-flex justify-center items-center px-1 pt-1  text-sm font-medium text-[#191919] min-w-[120px]",
                    location.pathname === item.href && "after:scale-x-100 border-b-4 border-[#D0021B] text-[#EB0A1E]", 
                  )}
                >
                  {item.name}
                </Link>
            ))}
          </div> 
        </div>
        <div className="flex items-center gap-2">
            <span className="hidden md:block text-sm">Menu</span>
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
