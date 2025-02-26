import { Link, useLocation } from "react-router";
import Logo from "@/assets/logo.svg";
import { cn } from "@/lib/utils";
import { useState } from "react";
import MenuSheet from "./MenuSheet";

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
        <MenuSheet />
      </div>
    </nav>
  );
}
