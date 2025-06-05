import { CartProduct } from "@/@types/cart";
import CheckoutButton from "./CheckoutButton";

const CartSummary = ({ cart }: { cart: CartProduct[] }) => {
  let count = 0;
  let totalPrice = 0;
  cart.forEach((item: CartProduct) => {
    count += item.quantity
    for (let i = 1; i <= item.quantity; i++) {
      totalPrice += item.item.price
    }
  });
  
  return (
    <>
      <br /><br /><br />
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Cart Summary</h1>

      <div className="border-2 border-gray-300 bg-white p-6 rounded-lg shadow-md w-full max-w-md mx-auto flex flex-col gap-4">
        <div className="flex justify-between text-lg font-medium text-gray-700">
          <span>Total Items:</span>
          <span>{count}</span>
        </div>

        <div className="flex justify-between text-lg font-medium text-gray-700">
          <span>Total Price:</span>
          <span>
            $ {totalPrice}
          </span>
        </div>

        <div className="flex flex-col gap-1">
          <CheckoutButton/>
          {/* <span className="text-center text-black font-bold">Or</span> */}
          {/* <EasyPaisaButton /> */}
          {/* <PayWithHBL /> */}
        </div>
      </div>
    </>
  )
}
export default CartSummary;