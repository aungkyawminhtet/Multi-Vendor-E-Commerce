"use client";
import React from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "../ui/sheet";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { NavbarItems, NabarRihtItems } from "@/data/Navbar-items";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarProps {
  isopen: boolean;
  onOpenChange: (open: boolean) => void;
}

const Sidebar = ({ isopen, onOpenChange }: SidebarProps) => {
  const path = usePathname();
  return (
    <Sheet open={isopen} onOpenChange={onOpenChange}>
      <SheetContent side="left" className="p-0 trasnsistion-none">
        <SheetHeader className="p-4 border-b">
          <div className="flex items-center">
            <SheetTitle>Menu</SheetTitle>
          </div>
        </SheetHeader>
        <ScrollArea className="relative flex flex-col overflow-y-auto h-full">
          <div className="flex flex-col">
            {NavbarItems.map((item, index) => (
              <Link
                onClick={() => onOpenChange(false)}
                key={index}
                href={item.href}
                className={`p-4 border-b hover:bg-slate-200 ${
                  path === item.href ? "bg-black text-white" : ""
                }`}
              >
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
          <div className="absolute w-full flex flex-col bottom-0">
            {NabarRihtItems.map((item, index) => (
              <Link
                onClick={() => onOpenChange(false)}
                key={index}
                href={item.href}
                className={`p-4 border hover:bg-slate-200 ${
                  path === item.href ? "bg-black text-white" : ""
                }`}
              >
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
