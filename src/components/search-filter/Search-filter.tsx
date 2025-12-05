'use client'
import React, { useState } from "react";
import SearchInput from "./Search-Input";
import Categories from "./Categories";
import { Button } from "../ui/button";
import { ListFilterIcon } from "lucide-react";
import CategorySidebar from "./Categories-Sidebar";

const SearchFilter = ({data}: {data:any}) => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative flex md:flex-col gap-3 w-full">
      <SearchInput />
      <CategorySidebar data={data} isAnySidebar={isOpen} setIsAnySidebar={setIsOpen} />
      <div className="hidden md:block">
        <Categories data={data} />
      </div>
      <Button className="flex md:hidden bg-transparent text-black" onClick={() => setIsOpen(true)}>
        All
        <ListFilterIcon />
      </Button>
    </div>
  );
};

export default SearchFilter;
