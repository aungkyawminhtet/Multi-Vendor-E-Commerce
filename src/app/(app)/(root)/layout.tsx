import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import SearchFilter from "@/components/search-filter/Search-filter";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex flex-col w-full min-h-screen">
      <Navbar />
      <div className="p-4 flex-1 bg-gray-100">
        <SearchFilter />
        <div className="flex-1">{children}</div>
      </div>
      <Footer />
    </main>
  );
};

export default layout;
