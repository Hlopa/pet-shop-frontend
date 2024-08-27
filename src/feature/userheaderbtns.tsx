import { Button } from "@/ui/button";
import { ArrowRight, ShoppingCart, User } from "lucide-react";
import React from "react";

const UserHeaderBtns = () => {
  return (
    <div className="flex gap-2 items-center gap-3">
      <Button variant="primary" className="flex items-center gap-1">
        <User size={20} />
      </Button>

      <Button className="group relative" variant="primary">
        <b>5$</b>
        <span className="h-full w-[1px] bg-white mx-3" />
        <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
          <ShoppingCart size={16} className="relative" strokeWidth={2} />
          <b>3</b>
        </div>
        <ArrowRight
          size={20}
          className="absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
        />
      </Button>
    </div>
  );
};

export default UserHeaderBtns;
