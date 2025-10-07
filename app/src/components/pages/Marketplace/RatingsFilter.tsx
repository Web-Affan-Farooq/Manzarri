"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { useMarketplaceFilters } from "../../../app/marketplace/useMarketplaceFilters";

const RatingsFilter = () => {
  const { ratingsRange, setRatingsRange } = useMarketplaceFilters();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={`cursor-pointer p-2 rounded-md text-manzarri-black shadow-sm shadow-gray-400`}
      >
        <Star className="w-4 h-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Ratings</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <Card className="p-6 border-manzarri-black/10">
          {/* Rating */}
          <div className="mb-8">
            <div className="space-y-3">
              {[5, 4, 3, 2, 1].map((rating) => (
                <div key={rating} className="flex items-center space-x-2">
                  <Checkbox
                    id={`rating-${rating}`}
                    checked={ratingsRange.includes(rating)}
                    onCheckedChange={(check) => {
                      if (!check) {
                        const updatedRatingsRange = ratingsRange.filter(
                          (range) => range !== rating
                        );
                        setRatingsRange(updatedRatingsRange);
                      } else {
                        setRatingsRange([...ratingsRange, rating]);
                      }
                    }}
                  />
                  <label
                    htmlFor={`rating-${rating}`}
                    className="flex items-center text-sm text-manzarri-black/80"
                  >
                    <div className="flex items-center mr-2">
                      {[...Array(rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-3 h-3 text-manzarri-faun fill-current"
                        />
                      ))}
                    </div>
                    & Up
                  </label>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default RatingsFilter;
