"use client";

import { useState } from "react";
import Image from "next/image";

const ImageSelection = ({
  images,
  productName,
}: {
  images: string[];
  productName: string;
}) => {
  /* _____  State for controlling current image shown in canvas (main product image) ... */
  const [canvasImage, setcanvasImage] = useState<string>(images[0]);

  return (
    <div className="flex flex-col gap-[15px]">
      <div className="rounded-md w-[300px] h-[300px]">
        <Image
          src={canvasImage}
          alt={productName}
          width={300}
          height={300}
          className="object-cover w-full h-full rounded-md"
        />
      </div>
      <div className="flex flex-row flex-wrap gap-[10px]">
        {images.map((image, idx: number) => {
          return (
            <div
              className="w-[50px] h-[50px] rounded-full cursor-pointer active:border active:border-gray-700 rounded-full overflow-hidden"
              key={idx}
              onClick={() => {
                setcanvasImage(image);
              }}
            >
              <Image
                src={image}
                alt={productName}
                width={100}
                height={100}
                className="object-cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageSelection;
