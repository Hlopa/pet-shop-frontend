"use client";

import { cn } from "@/lib/utils";
import { useCategoryStore } from "@/store/category";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const categories = [
  { id: 1, title: "Dogs", img: "/img/nav/dog.png" },
  { id: 2, title: "Cats", img: "/img/nav/cat.png" },
  { id: 3, title: "Birds", img: "/img/nav/bird.png" },
  { id: 4, title: "Fun Toys", img: "/img/nav/toy.png" },
  { id: 5, title: "Accessories", img: "/img/nav/collar.png" },
];

const NavBar: React.FC = () => {
  const categoryActiveId = useCategoryStore((state) => state.activeId);

  console.log(categoryActiveId);

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const navbar = document.querySelector(".navbar");

    const handleScroll = () => {
      const navbarElement = navbar as HTMLElement;
      const position = navbarElement?.getBoundingClientRect();

      if (position && position.top <= 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`bg-accent text-center sticky top-0 transition-all duration-400 z-50 navbar ${
        isSticky ? "p-3" : "p-8"
      }`}
    >
      <div className="inline-flex">
        {categories.map((category, i) => (
          <a key={i} className="mx-4 cursor-pointer group" href={`/#${category.title}`}>
            <div className="flex flex-col items-center">
              <div
                className={cn(
                  `bg-accent-foreground rounded-[100%] overflow-hidden flex items-center justify-center transition-all duration-300 group-hover:bg-secondary  ${
                    isSticky ? "w-[0px]  h-[0px]" : "w-[167px]  h-[167px]"
                  }`
                )}
              >
                <Image
                  className="transition-all duration-300 shrink-0"
                  src={category.img}
                  alt={category.title}
                  width={isSticky ? 0 : 167}
                  height={isSticky ? 0 : 167}
                />
              </div>
              <p
                className={cn(
                  `font-bold transition-all duration-400 text-lg ${isSticky ? "mt-0" : "mt-6"} ${
                    isSticky && categoryActiveId === category.id ? "text-secondary-foreground" : "text-white"
                  }`
                )}
              >
                {category.title}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
