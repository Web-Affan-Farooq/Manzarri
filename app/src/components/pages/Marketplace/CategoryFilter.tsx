"use client";

import { useMarketplaceFilters } from "../../../app/marketplace/useMarketplaceFilters";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronsUpDown } from "lucide-react";
const CategoryFilter = () => {
  const { categories, selectedCategories, setSelectedCategories } =
    useMarketplaceFilters();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={`cursor-pointer p-2 rounded-md text-manzarri-black shadow-sm shadow-gray-400`}
      >
        <ChevronsUpDown className="w-4 h-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="flex flex-col">
        <DropdownMenuLabel>Select categories</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <div className="flex flex-col gap-[7px]">
          {categories.map((category) => (
            <div key={category} className="flex items-center space-x-2">
              <Checkbox
                onCheckedChange={(check) => {
                  if (!check) {
                    const filteredCategories = selectedCategories.filter(
                      (ca) =>
                        ca.toLowerCase().trim() !==
                        category.toLowerCase().trim()
                    );
                    setSelectedCategories(filteredCategories);
                  } else {
                    setSelectedCategories([...selectedCategories, category]);
                  }
                }}
                id={category}
                checked={selectedCategories.includes(category)}
              />
              <label
                htmlFor={category}
                className="text-sm text-manzarri-black/80"
              >
                {category}
              </label>
            </div>
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default CategoryFilter;
