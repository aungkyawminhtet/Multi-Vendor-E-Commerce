import React from "react";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import SearchFilter from "@/components/search-filter/Search-filter";
import { getPayload, type CollectionSlug } from "payload";
import configPromise from "@payload-config";

const layout = async({ children }: { children: React.ReactNode }) => {
  const payload = await getPayload({
    config: configPromise,
  });
  const data = await payload.find({
    collection: "category" as CollectionSlug,
    depth: 1,
    pagination: false,
    where: {
      parent: {
        exists: false,
      },
    },
    sort: "name",
  });
  return (
    <main className="flex flex-col w-full min-h-screen">
      <Navbar />
      <div className="p-4 flex-1 bg-gray-100">
        <SearchFilter data={data} />
        <div className="flex-1">{children}</div>
      </div>
      <Footer />
    </main>
  );
};

export default layout;
