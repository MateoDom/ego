import { useState } from "react";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Link } from "react-router";

const menuSections = [
  {
    links: [
      { to: "/", label: "Modelos" },
      { to: "", label: "Servicios y accesorios" },
      { to: "", label: "Financiacion" },
      { to: "", label: "Reviews y Comunidad" },
    ],
    extraClasses: 'mt-8',
    showBorder: true
  },
  {
    links: [
      { to: "", label: "Toyota Mobility Service" },
      { to: "", label: "Toyota Gazoo Racing" },
      { to: "", label: "Toyota Híbridos" },
    ],
    showBorder: true
  },
  {
    links: [
      { to: "", label: "Concesionarios" },
      { to: "", label: "Test Drive" },
      { to: "", label: "Contacto" },
    ],

  },
  {
    links: [
      { to: "", label: "Actividades" },
      { to: "", label: "Servicios al Cliente" },
      { to: "", label: "Ventas Especiales" },
      { to: "", label: "Innovación" },
      { to: "", label: "Prensa" },
      { to: "", label: "Acerca de..." },
    ],
    extraClasses: "flex-[1] bg-[#EFEEEF] py-4",
  },
];

const MenuSheet = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-center gap-2">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <div className="flex items-center gap-2">
            <span className="hidden md:block text-sm">Menu</span>
            <Button variant="ghost" className="cursor-pointer" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </SheetTrigger>
        <SheetContent side="right" className="max-h-screen overflow-y-scroll">
          {menuSections.map(({ links, extraClasses, showBorder }, index) => (
            <div key={index} >
              <div className={`flex flex-col items-end gap-1 py-2 px-6 ${extraClasses || ""}`}>
                {links.map(({ to, label }, i) => (
                  <Link key={i} to={to} className="text-xl font-normal" onClick={() => setOpen(false)}>
                    {label}
                  </Link>
                ))}
              </div>
              {showBorder &&  <div className="px-4"><div className="border-b py-2 w-full"></div></div>}
            </div>
          ))}
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MenuSheet;
