/* _____ Hooks ... */
import { useCart } from "@/stores/cart";
import { useEffect, useState } from "react";

/* _____ Types ... */
import { CartProduct } from "@/@types/cart";

const useCartCard = (
    cartProduct: CartProduct,
) => {
    // Extract cart functions from context
    const { updateQuantity, removeFromCart } = useCart();

    // State to track if quantity update was triggered
    const [isCountUpdated, setIsCountUpdated] = useState(false);

    // Local state for item count
    const [count, setCount] = useState(cartProduct.quantity);

    /* _____ Function for handling quantity increase and decrease counter ... */
    const handlecounter = (forward: boolean) => {
        if (forward) {
            setCount(count + 1);
            setIsCountUpdated(true);
        }
        else {
            if (count > 1) {
                setCount(count - 1);
                setIsCountUpdated(true);
            }
        }
    }

    // Effect: Runs only when 'isCountUpdated' becomes true
    useEffect(() => {
        if (isCountUpdated) {
            updateQuantity({
                id: cartProduct.id,
                item: cartProduct.item,
                quantity: count,
                size: cartProduct.size,
            });

            // Reset the flag after updating
            setIsCountUpdated(false);
        }
    }, [
        isCountUpdated,
        cartProduct.id,
        cartProduct.item,
        cartProduct.size,
        count,
        updateQuantity,
    ]);


    return {
        removeFromCart,
        updateQuantity,
        handlecounter,

    }

}
export default useCartCard;