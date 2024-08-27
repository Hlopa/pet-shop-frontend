import CheckboxFiltersGroup from "@/feature/filter/CheckboxFiltersGroup";
import Input from "@/ui/input";
import { RangeSlider } from "@/ui/rangeSlider";
import { Title } from "@/ui/title";
import React from "react";

export const Filters: React.FC = () => {
  return (
    <section>
      <Title text="Filters" size="sm" className="mb-5 font-bold" />
      <div className="flex flex-col gap-4">
        <CheckboxFiltersGroup
          title="Availability"
          items={[
            { text: "In stock", value: "1" },
            { text: "On Sale", value: "2" },
            { text: "AutoShip", value: "3" },
          ]}
        />
      </div>

      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Price ($)</p>
        <div className="flex gap-3 mb-5">
          <Input type="number" placeholder="0" min={0} max={1000} defaultValue={0} />
          <Input type="number" placeholder="1000" min={10} max={1000} />
        </div>
        <RangeSlider min={0} max={1000} step={10} value={[0, 1000]} />
      </div>

      <CheckboxFiltersGroup
        title="Product tags"
        className="mt-5"
        limit={6}
        items={[
          { text: "Eco-friendly", value: "1" },
          { text: "Organic", value: "2" },
          { text: "Durable", value: "3" },
          { text: "Natural ingredients", value: "4" },
          { text: "Dry food", value: "5" },
          { text: "Wet food", value: "6" },
          { text: "Skin & Coat Care", value: "7" },
          { text: "Ear & Eye Care", value: "8" },
          { text: "Stress & Anxiety Care", value: "9" },
          { text: "Interactive Toys", value: "10" },
          { text: "Chew Toys", value: "11" },
        ]}
      />
    </section>
  );
};
