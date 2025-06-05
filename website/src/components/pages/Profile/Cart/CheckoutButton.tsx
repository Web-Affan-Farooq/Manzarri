"use client";
import React from 'react'
import axios from 'axios';
import { useCart } from '@/stores/cart';
import { CartProduct } from '@/@types/cart';
import GenerateString from '@/utils/Token/Generatetoken';

interface Packages {
    productId: string;
    productName: string;
    productSKU: string;
    size: string;
    _key: string;
}

interface Order {
    userId: string;
    weightageInGrams: number;
    amountPayable: number;
    packages: Packages[]
}

const CheckoutButton = () => {
    const { cart} = useCart();

    const handleClick = async () => {
        const order: Order = {
            userId: window.localStorage.getItem("userID")!,
            weightageInGrams: 0,
            amountPayable: 0,
            packages: [],
        }
        
        cart.map((cartItem:CartProduct) => {
            order.amountPayable += (cartItem.item.price*cartItem.quantity);
            order.weightageInGrams += (cartItem.item.weightInGrams*cartItem.quantity);
            order.packages.push({
                productId:cartItem.item._id,
                productName:cartItem.item.productName,
                productSKU:cartItem.item.stockKeepingUnit,
                size:cartItem.size,
                _key:GenerateString(60)
            })
        });
        console.log("Order : ", order);

        const response = await axios.post("/api/checkout", {
            products: cart,
            order:order,
        });
        const { data } = response;
        window.document.location.href = data.url;
        // clearCart();
    }
    return (
        <button className="cursor-pointer mt-6 bg-faun-light hover:bg-faun-dark text-white font-bold py-2 px-4 rounded transition-colors duration-300 text-[16px] " onClick={handleClick}>
            <span>Proceed to checkout</span> &nbsp; &nbsp;<i className="fa-solid fa-arrow-right"></i>
        </button>
    )
}

export default CheckoutButton