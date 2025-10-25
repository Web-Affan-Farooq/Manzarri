"use client";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Link from "next/link";
import useMarketplaceFilters from "./hooks/useMarketplaceFilters";

const SearchBar = () => {
  const { updateSearchQuery, filteredList, searchQuery } =
    useMarketplaceFilters();
  return (
    <>
      <div className="relative my-3 sm:w-md">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-manzarri-black/60 w-4 h-4" />
        <Input
          placeholder="Search for jewelry..."
          className="pl-10 bg-manzarri-skin border-manzarri-black/20"
          onChange={(e) => updateSearchQuery(e.target.value)}
        />
      </div>
      <div
        className={`${searchQuery === "" ? "hidden" : "sm:w-md p-3 rounded-md bg-white absolute z-10 flex flex-col flex-nowrap gap-[20px]"}`}
      >
        {filteredList.map((p, idx) => (
          <Link href={`/marketplace/${p._id}`} className="" key={idx}>
            {p.productName} &nbsp; ({p.material})
          </Link>
        ))}
      </div>
    </>
  );
};
export default SearchBar;
