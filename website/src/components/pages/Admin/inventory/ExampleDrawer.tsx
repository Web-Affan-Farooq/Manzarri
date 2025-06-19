"use client"

import * as React from "react"
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

export default function DrawerDemo({product}:{product:Product}) {
//   const [goal, setGoal] = React.useState(350)

//   function onClick(adjustment: number) {
//     setGoal(Math.max(200, Math.min(400, goal + adjustment)))
//   }

  return (
    <Drawer>
      <DrawerTrigger>
              <Card product={product}/>
      </DrawerTrigger>
      <DrawerContent className="bg-gray-900 border-none">
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle className="text-white">{product.productName}</DrawerTitle>
            <DrawerDescription className="text-white">Product status</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <div className="flex items-center justify-center space-x-2">

                <Minus className="text-white"/>
                <span className="sr-only">Decrease</span>
              <div className="flex-1 text-center">
                <div className="text-7xl font-bold tracking-tighter text-blue-700">
                  {product.stockQuantity}
                </div>
                <div className="text-gray-600 text-[0.70rem] uppercase">
                  pieces
                </div>
              </div>

                <Plus className="text-white"/>
                <span className="sr-only">Increase</span>
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
            Submit
            <DrawerClose >
              Cancel
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
