import React, { useState } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "../ui/sheet";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";

interface Props {
  isAnySidebar: boolean;
  setIsAnySidebar: (value: boolean) => void;
  data: any;
}

const CategorySidebar = ({ isAnySidebar, setIsAnySidebar, data }: Props) => {
  const [slugName, setSlugName] = React.useState<string | null>("");
  const [isOpen, setIsOpen] = useState(false);
  const [id, setId] = React.useState<string | null>(null);
  const [bg, setBg] = useState<string>("");
  const handleClick = (id: string) => {
    const subcat = data.docs.find((cat: any) => cat.id === id);
    setBg(subcat.color || "#F5F5F5");
    setId(id);
    setIsOpen(isOpen ? false : true);
  };
  return (
    <Sheet open={isAnySidebar} onOpenChange={setIsAnySidebar}>
      <SheetContent side="left" className="p-0 transistion-none">
        <SheetHeader className="p-4 border-b">
          <div className="flex items-center">
            <SheetTitle>All Menu</SheetTitle>
          </div>
        </SheetHeader>
        <ScrollArea>
          {data.docs.map((item: any, index: number) => (
            <div
              key={index}
              className="flex flex-col overflow-y-auto hover:bg-black hover:text-white transition-all duration-300"
              onClick={() => handleClick(item.id)}
            >
              <button className="flex w-full items-center justify-between text-left p-4">
                {item.name}

                {item.subCategories?.docs.length > 0 ? (
                  isOpen && id === item.id ? (
                    <ChevronUp />
                  ) : (
                    <ChevronDown />
                  )
                ) : (
                  ""
                )}
              </button>

              {isOpen && id === item.id && (
                <div className="text-black hover:text-black hover:bg-gray-50">
                  {item.subCategories?.docs.map(
                    (subCat: any, subIndex: number) => (
                      <Link
                        href={`/${item.name}/${subCat.slug}`}
                        key={subIndex}
                        className="flex flex-col"
                      >
                        <button
                          style={{ background: bg }}
                          className="p-4 w-full text-left hover:bg-black hover:text-white transition-all duration-300"
                        >
                          {subCat.name}
                        </button>
                      </Link>
                    )
                  )}
                </div>
              )}
            </div>
          ))}
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};

export default CategorySidebar;
