"use server"
import { Product } from "@/@types/product"
import { Review } from "@/@types/review"
import sanityClient from "@/lib/sanity"
import { productQuery } from "@/queries/product"
import { reviewQuery } from "@/queries/reviews"

// _____ Interface for typing the raw data from api ...
interface RawProduct extends Omit<Product, "ratings"> {
  ratings:number[]
}

export const FetchMarketplaceProducts = async () :Promise<Product[]>=> {
    const products : RawProduct[]= await sanityClient.fetch(productQuery,{},{
        next:{
            revalidate:10
        }
    })
    const reviewsList:Review[] = await sanityClient.fetch(reviewQuery);

    /// _____ Reaturn each product with ratings count and its own reviews list ... 
    const updatedProducts =  products.map((product) => {
      // _____ Calculate average of rated ...
      const total = Math.round(product.ratings.reduce(( a,b) => a+b, 0) / product.ratings.length)
      
      // ______ find reviews about product ...
      const reviews = reviewsList.filter((review) => review.productId === product._id)
      return {
        ...product, 
        ratings:total,
        reviews:reviews
      }
    })

    return updatedProducts
} 