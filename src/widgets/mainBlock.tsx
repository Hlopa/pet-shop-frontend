import Container from "@/ui/container";
import React from "react";
import { Filters } from "./filters";
import ProductsGroupList from "./productGroupList";

const MainBlock = () => {
  return (
    <Container className="pb-14 mt-10">
      <div className="flex gap-[60px]">
        <div className="w-[250px]">
          <Filters />
        </div>
        <div className="flex-1">
          <div className="flex flex-col">
            <ProductsGroupList
              title="Dogs"
              items={[
                { id: 1, name: "sdvsd", items: [{ price: 60 }], imageUrl: "/img/coffee-1.jpg" },
                { id: 2, name: "zfbsb df", items: [{ price: 100 }], imageUrl: "/img/coffee-1.jpg" },
                { id: 3, name: "iiiiii", items: [{ price: 500 }], imageUrl: "/img/coffee-1.jpg" },
              ]}
              categoryId={1}
            />
            <ProductsGroupList
              title="Cats"
              items={[
                { id: 1, name: "sdvsd", items: [{ price: 60 }], imageUrl: "/img/coffee-1.jpg" },
                { id: 2, name: "zfbsb df", items: [{ price: 100 }], imageUrl: "/img/coffee-1.jpg" },
                { id: 3, name: "iiiiii", items: [{ price: 500 }], imageUrl: "/img/coffee-1.jpg" },
              ]}
              categoryId={2}
            />

            <ProductsGroupList
              title="Birds"
              items={[
                { id: 1, name: "sdvsd", items: [{ price: 60 }], imageUrl: "/img/coffee-1.jpg" },
                { id: 2, name: "zfbsb df", items: [{ price: 100 }], imageUrl: "/img/coffee-1.jpg" },
                { id: 3, name: "iiiiii", items: [{ price: 500 }], imageUrl: "/img/coffee-1.jpg" },
              ]}
              categoryId={3}
            />

            <ProductsGroupList
              title="Fun Toys"
              items={[
                { id: 1, name: "sdvsd", items: [{ price: 60 }], imageUrl: "/img/coffee-1.jpg" },
                { id: 2, name: "zfbsb df", items: [{ price: 100 }], imageUrl: "/img/coffee-1.jpg" },
                { id: 3, name: "iiiiii", items: [{ price: 500 }], imageUrl: "/img/coffee-1.jpg" },
              ]}
              categoryId={4}
            />

            <ProductsGroupList
              title="Accessories"
              items={[
                { id: 1, name: "sdvsd", items: [{ price: 60 }], imageUrl: "/img/coffee-1.jpg" },
                { id: 2, name: "zfbsb df", items: [{ price: 100 }], imageUrl: "/img/coffee-1.jpg" },
                { id: 3, name: "iiiiii", items: [{ price: 500 }], imageUrl: "/img/coffee-1.jpg" },
              ]}
              categoryId={5}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default MainBlock;
