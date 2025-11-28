"use client";

import React, { useRef, useState } from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import DropDownPosition from "./DropDown-position";
import SubCategories from "./SubCategories";

interface CategoryDropDownProps {
  categories: any;
  isActive: boolean;
  isNavigateHover: boolean;
}

const CategoryDropDown = ({
  categories,
  isActive,
  isNavigateHover,
}: CategoryDropDownProps) => {
  //   console.log("dropDown cat ", categories);

  const [isOpen, setIsOpen] = useState(false);
  const dropDownRef = useRef<HTMLDivElement>(null);
  const { GetDropDownPosition } = DropDownPosition(dropDownRef);

  const getPosition = GetDropDownPosition();

  const onMouseOver = () => {
    if (categories.subCategories?.docs.length > 0) {
      setIsOpen(true);
    }
  };

  const onMoseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div
      ref={dropDownRef}
      onMouseOver={onMouseOver}
      onMouseLeave={onMoseLeave}
      className="relative"
    >
      <div className="relative">
        <Button
          variant={"elevated"}
          className={cn(
            "rounded-full bg-transparent border-transparent hover:border-primary",
            isActive && !isNavigateHover && "bg-black text-white"
          )}
        >
          {categories.name}
        </Button>
        {categories.subCategories?.docs.length > 0 && (
          <div
            className={cn(
              `absolute opacity-0 -bottom-3 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[10px] border-b-black left-1/2 -translate-x-1/2`,
              isOpen && "opacity-100"
            )}
          ></div>
        )}
      </div>
      {isOpen && categories.subCategories?.docs.length > 0 && (
        <SubCategories
          subCategories={categories}
          isOpen={isOpen}
          position={getPosition}
        />
      )}
    </div>
  );
};

export default CategoryDropDown;
