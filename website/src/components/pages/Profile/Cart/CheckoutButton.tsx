"use client";
/* ____ Libraries ... */
import axios from 'axios';

/* ____ Hooks ... */
import { useCart } from '@/stores/cart';

/* ____ Types ... */
import { CartProduct } from '@/@types/cart';

/* ____ Functions ... */
import GenerateString from '@/utils/randomstring/GenerateString';

interface Packages {
    productId: string;
    productName: string;
    productSKU: string;
    quantity:number;
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
    /* ___ Get cart ... */
    const { cart } = useCart();

    /* _____ onClick Event : prepare order and proceed to checkout ...  */
    const handleClick = async () => {

        const order: Order = {
            userId: window.localStorage.getItem("userID")!,
            weightageInGrams: 0,
            amountPayable: 0,
            packages: [],
        }

        // Calculate amountPayable , order weight and create packages
        cart.map((cartItem: CartProduct) => {
            order.amountPayable += (cartItem.item.price * cartItem.quantity);
            order.weightageInGrams += (cartItem.item.weightInGrams * cartItem.quantity);
            order.packages.push({
                productId: cartItem.item._id,
                productName: cartItem.item.productName,
                productSKU: cartItem.item.stockKeepingUnit,
                quantity:cartItem.quantity,
                size: cartItem.size,
                _key: GenerateString(60)
            })
        });
        // ____ Debugging check for checking order object
        // console.log("Order : ", order);

        const response = await axios.post("/api/checkout", {
            products: cart,
            order: order,
        });
        const { data } = response;
        /* redirect to the stripe checkout page ... */
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