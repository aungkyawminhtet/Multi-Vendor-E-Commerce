import React from "react";

interface SubCategoriesProps {
  subCategories: any;
  isOpen: boolean;
  position: { left: number; top: number } | undefined;
}

const SubCategories = ({
  subCategories,
  isOpen,
  position,
}: SubCategoriesProps) => {

  if (!subCategories.subCategories?.docs.length) {
    return null;
  }

  const background = subCategories.color || "#F5F5F5";
  return (
    <div
      className="fixed z-50"
      style={{ top: position?.top, left: position?.left }}
    >
      <div className="h-3 w-60" />
      <div
        style={{background}}
        className="w-60 text-black rounded-md p-4 overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -translate-x-[2px] -translate-y-[2px]"
      >
        {subCategories.subCategories?.docs.map((subCat: any) => (
          <div className="p-1 cursor-pointer select-none hover:bg-gray-50/50 rounded transition-all duration-300" key={subCat.id}>{subCat.name}</div>
        ))}
      </div>
    </div>
  );
};

export default SubCategories;
