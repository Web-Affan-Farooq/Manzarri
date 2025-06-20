"use client"

import React, { useEffect, useState } from "react"
import { Minus, Plus } from "lucide-react"
import { Bar, BarChart, ResponsiveContainer } from "recharts"

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Card from "./card";
import { Product } from "@/@types/product";
import axios from "axios";
import toast from "react-hot-toast";
import { useInventory } from "@/stores/inventory";

const data = [
  {
    goal: 400,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 239,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 349,
  },
]

export default function DrawerDemo({ product }: { product: Product }) {
  // _____  Count for handling quantity update ...
  const [count, setcount] = useState(product.stockQuantity);
  const [updateCount, setupdateCount] = useState(false);
  const { all, feedInventory } = useInventory();
  // _____  Count for Submiting updated count ...
  const handleSubmit = async () => {
    try {
      const response = await axios.post("/api/Admin/update-quantity", {
        id: product._id,
        quantity: count,
      });
      toast.success(response.data.message);
    } catch (err) {
      console.log(err);
      toast.error("An error occured while updating quantity")
    }
  }

  useEffect(() => {
    if (updateCount) {
      const updatedStock = all.map((inventoryProduct: Product) => {
        if (inventoryProduct._id === product._id) return { ...inventoryProduct, stockQuantity: count }
        else return inventoryProduct;
      });
      feedInventory(updatedStock, "All");
      setupdateCount(false);
    }
  }, [updateCount,all,count, feedInventory,product._id])

  return (
    <Drawer>
      <DrawerTrigger>
        <Card product={product} />
      </DrawerTrigger>
      <DrawerContent className="bg-gray-900 border-none">
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle className="text-white">{product.productName}</DrawerTitle>
            <DrawerDescription className="text-white">Product status</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <div className="flex items-center justify-center space-x-2">

              <Minus className="text-white" onClick={() => {
                if (count > 0) {
                  setcount(count - 1);
                }
              }} />
              <span className="sr-only">Decrease</span>
              <div className="flex-1 text-center">
                <div className="text-7xl font-bold tracking-tighter text-blue-700">
                  {count}
                </div>
                <div className="text-gray-600 text-[0.70rem] uppercase">
                  pieces
                </div>
              </div>

              <Plus className="text-white" onClick={() => {
                setcount(count + 1);
              }} />
            </div>
            <div className="mt-3 h-[120px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <Bar
                    dataKey="goal"
                    style={
                      {
                        fill: "#536b8a",
                        opacity: 0.9,
                      } as React.CSSProperties
                    }
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <DrawerFooter>
            <button type="button" className="bg-white w-full rounded-md px-[15px] py-[5px] font-semibold" onClick={handleSubmit}>Submit</button>
            <DrawerClose className="bg-white w-full rounded-md px-[15px] py-[5px] font-semibold">
              Cancel
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
