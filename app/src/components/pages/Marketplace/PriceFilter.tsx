import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Slider } from "@/components/ui/slider";
import { CircleDollarSign } from "lucide-react";
import useMarketplaceFilters from "./hooks/useMarketplaceFilters";

const PriceFilter = () => {
  const { priceRange, setPriceRange } = useMarketplaceFilters();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={`cursor-pointer p-2 rounded-md text-manzarri-black shadow-sm shadow-gray-400`}
      >
        <CircleDollarSign className="w-4 h-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="flex flex-col">
        <DropdownMenuLabel>Select Price range</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <div className="flex flex-col gap-[7px]">
          <div className="mb-8">
            <div className="px-2">
              <Slider
                value={priceRange}
                onValueChange={setPriceRange}
                max={5000}
                step={100}
                className="mb-4"
              />
              <div className="flex justify-between text-sm text-manzarri-black/70">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
            </div>
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default PriceFilter;
