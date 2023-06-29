import { useRouter } from "next/navigation";
import React from "react";

const Navbar = ({ active }) => {
  const nav = usenavigation
  return (
    <div className="bg-gray-100 flex gap-x-4 lg:gap-x-12 justify-center py-3 lg:py-6">
      <button
      onClick={()=> router.push("/barchart")}
        className={`${
          active === "bar" ? "border-b-red-700 text-red-700" : "border-b-black"
        } border-b-2 lg:text-xl hover:border-b-red-700 hover:text-red-700`}
      >
        Bar Chart
      </button>
      <button
        className={`${
          active === "line"
            ? "border-b-blue-700 text-blue-700"
            : "border-b-black"
        } border-b-2 lg:text-xl hover:border-b-blue-700 hover:text-blue-700`}
      >
        Line Chart
      </button>
    </div>
  );
};

export default Navbar;
