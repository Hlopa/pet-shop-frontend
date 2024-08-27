"use client";

import React, { useEffect } from "react";
import { cn } from "@/lib/utils";
import { useIntersection } from "react-use";
import { useCategoryStore } from "@/store/category";
import { Title } from "@/ui/title";
import ProductCard from "@/entities/product/productCard";


interface ProductsGroupListProps {
  title: string;
  items: any[];
  listClassName?: string;
  categoryId: number;
}

const ProductsGroupList: React.FC<ProductsGroupListProps> = ({ title, items, listClassName, categoryId }) => {
  const intersectionRef = React.useRef(null);
  const intersection = useIntersection(intersectionRef, {
    threshold: 0.4,
  });

  const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);

  useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveCategoryId(categoryId)
    }
  }, [categoryId, intersection?.isIntersecting, setActiveCategoryId]);

  return (
    <div id={title} ref={intersectionRef} className="pt-[50px]">
      <Title text={title} size="lg" className="font-extrabold mb-5" />

      <div className={cn("grid grid-cols-3 gap-[50px]", listClassName)}>
        {items
          .filter((product) => product.items.length > 0)
          .map((product, i) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              imageUrl={product.imageUrl}
              price={product.items[0].price}
            />
          ))}
      </div>
    </div>
  );
};

export default ProductsGroupList;
