'use client';
import CartSummary from "./CartSummary";
import Card from "./Card";
import { useCart } from "@/stores/cart";
import { CartProduct } from "@/@types/cart";

const CartSection = () => {
  const { cart } = useCart();

  // useEffect(() => {
  //   console.log("Cart : ", cart);
  // },[]);
  return (
    <section className="h-[100vh] overflow-y-scroll flex-1 p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Your Cart</h1>

      <div className="flex flex-row flex-wrap justify-start items-center gap-">
        {cart.map((cartitem: CartProduct, idx: number) => {
          return <Card cartProduct={cartitem} key={idx} />
        })}

      </div>
      <br /><br /><br />
      {
        cart.length <= 0 ? <div className="text-center text-gray-500 text-lg">
          Your cart is empty. Start adding your favorite items!
        </div>: <CartSummary cart={cart} /> 
      }
    </section>
  );
};

export default CartSection;