import React from "react";
import { IoIosSearch } from "react-icons/io";
import { Input } from '../ui/input';

const SearchInput = () => {
  return (
    <div className="relative flex w-full">
      <IoIosSearch className=" absolute w-6 h-6 top-3.5 left-3" />
      <Input className="pl-10 bg-white" placeholder="Searching for something" disabled />
    </div>
  );
};

export default SearchInput;
