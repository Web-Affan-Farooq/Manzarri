"use server"
import { Product } from "@/@types/product"
import sanityClient from "@/lib/sanity"

export const FetchMarketplaceProducts = async () :Promise<Product[]>=> {
    const q = `*[_type == "Product"]{
_id,
availableSizes,
dimensions,
  discountPercentage,
images,
jewelleryType,
material,
ocassions,
price,
productDescription,
productName,
stockKeepingUnit,
stockQuantity,
tags,
weightInGrams,
    "images": images[].asset->url
  }`

    const products :Product[]= await sanityClient.fetch(q,{},{
        next:{
            revalidate:10
        }
    })
    return products
} 