"use client";
import React, { useEffect, useRef, useState } from "react";
import CategoryDropDown from "./Category-DropDown";
import { Button } from "../ui/button";
import { ListFilterIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import CategorySidebar from "./Categories-Sidebar";

interface CatetgoriesProps {
  data: any;
}

const Categories = ({ data }: CatetgoriesProps) => {
  const ContainerRef = useRef<HTMLDivElement>(null);
  const MeasureRef = useRef<HTMLDivElement>(null);
  const ViewAllRef = useRef<HTMLDivElement>(null);

  const [visibleCount, setVisibleCount] = useState(data.docs.length);
  const [isAnyHover, setIsAnyHover] = useState(false);
  const [isAnySidebar, setIsAnySidebar] = useState(false);

  const activeCat = "All";

  const activeCatIndex = data.docs.findIndex(
    (cat: any) => cat.name === activeCat
  );

  const isActiveCatHidden =
    activeCatIndex >= visibleCount && activeCatIndex !== -1;

  useEffect(() => {
    const CalculateVisible = () => {
      if (!ContainerRef.current || !MeasureRef.current || !ViewAllRef.current)
        return;

      const containerWidth = ContainerRef.current.offsetWidth;
      const viewAllWidth = ViewAllRef.current.offsetWidth;
      const availableWidth = containerWidth - viewAllWidth;

      const items = Array.from(MeasureRef.current.children) as HTMLDivElement[];

      let totalWidth = 0;
      let count = 0;

      for (const item of items) {
        const width = item.getBoundingClientRect().width;

        if (totalWidth + width > availableWidth) {
          break;
        }

        totalWidth += width;
        count++;
      }
      setVisibleCount(count);
    };

    const reserveObserver = new ResizeObserver(CalculateVisible);

    reserveObserver.observe(ContainerRef.current!);

    return () => reserveObserver.disconnect();
  }, [data.docs.length]);

  return (
    <div className="relative w-full flex">

    <CategorySidebar isAnySidebar={isAnySidebar} setIsAnySidebar={setIsAnySidebar} data={data} />

      {/* Hidden div to measure items */}
      <div
        className="absolute flex w-full gap-x-4 opacity-0 pointer-events-none overflow-hidden"
        ref={MeasureRef}
        style={{ position: "absolute", left: "-999", top: "-999" }}
      >
        {data.docs.map((cat: any) => (
          <div key={cat.id}>
            <CategoryDropDown
              categories={cat}
              isActive={cat.name === activeCat}
              isNavigateHover={false}
            />
          </div>
        ))}
      </div>

      {/* Actual visible items */}
      <div
        className="flex flex-nowrap w-full gap-x-4"
        ref={ContainerRef}
        onMouseEnter={() => setIsAnyHover(true)}
        onMouseLeave={() => setIsAnyHover(false)}
      >
        {data.docs.slice(0, visibleCount).map((cat: any) => (
          <div key={cat.id}>
            <CategoryDropDown
              categories={cat}
              isActive={cat.name === activeCat}
              isNavigateHover={isAnyHover}
            />
          </div>
        ))}
      </div>

      <div ref={ViewAllRef} className="flex items-center">
        <Button
          variant={"elevated"}
          className={cn(
            "rounded-full bg-transparent border-transparent hover:border-primary",
            isActiveCatHidden && !isAnyHover && "border-primary"
          )}
          onClick={() => setIsAnySidebar(!isAnySidebar)}
        >
          View All
          <ListFilterIcon />
        </Button>
      </div>
    </div>
  );
};

export default Categories;
