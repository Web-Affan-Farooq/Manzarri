/* ____ Hooks ... */
import { useCart } from "@/stores/useCart";
import { useMarketplaceData } from "@/stores/useCatalog";
import { useMemo, useState } from "react";

/* _____ Types and schemas ... */
import { CartProduct } from "@/@types/Cart";

/* ____ Functions ... */
import GenerateString from "@/utils/GenerateString";
import { CheckoutAction } from "../_actions/checkout";
import { toast } from "sonner";

interface Packages {
  productId: string;
  productName: string;
  productSKU: string;
  quantity: number;
  size: string;
  _key: string;
}

interface Order {
  userId: null;
  weightageInGrams: number;
  amountPayable: number;
  packages: Packages[];
}

// ---- Utility function to calculate discounted price correctly ----
const calculateDiscountPrice = (price: number, discountPercentage: number) => {
  return price - price * (discountPercentage / 100);
};

export const useCartSummary = () => {
  /* _____ get cart and offers from global state ... */
  const { cart } = useCart();
  const { offers } = useMarketplaceData();

  /* _____ guard against empty offers array ... */
  const [selectedOffer, setSelectedOffer] = useState(
    offers && offers.length > 0 ? offers[0] : null
  );

  /*_____ Calculate total price without discount ... */
  const totalPriceWithoutDiscount = useMemo(() => {
    return cart.reduce((sum, p) => sum + p.item.price * p.quantity, 0);
  }, [cart]);

  // _____ Calculate total discount saved ...
  const totalSaved = useMemo(() => {
    if (!selectedOffer) return 0;
    let count = 0;
    cart.forEach((p) => {
      if (selectedOffer.products?.includes(p.item._id)) {
        const discountAmount =
          p.item.price * (selectedOffer.discountPercentage / 100);
        count += discountAmount * p.quantity;
      }
    });
    return Math.floor(count);
  }, [selectedOffer, cart]);

  // _____ Checkout logic ...
  const checkout = async () => {
    if (!cart.length) {
      toast.error("Your cart is empty.");
      return;
    }

    const order: Order = {
      userId: null,
      weightageInGrams: 0,
      amountPayable: 0,
      packages: [],
    };

    // Calculate total and build packages
    cart.forEach((cartItem: CartProduct) => {
      order.amountPayable += cartItem.item.price * cartItem.quantity;
      order.weightageInGrams +=
        (cartItem.item.weightInGrams || 0) * cartItem.quantity;
      order.packages.push({
        productId: cartItem.item._id,
        productName: cartItem.item.productName,
        productSKU: cartItem.item.stockKeepingUnit,
        quantity: cartItem.quantity,
        size: cartItem.size || "N/A",
        _key: GenerateString(60),
      });
    });

    // Apply discount
    order.amountPayable -= totalSaved;

    console.log("Created payload:", {
      products: cart.map((cartProduct) => ({
        productName: cartProduct.item.productName,
        price: selectedOffer
          ? calculateDiscountPrice(
              cartProduct.item.price,
              selectedOffer.discountPercentage
            )
          : cartProduct.item.price,
        quantity: cartProduct.quantity,
      })),
      order,
    });

    const response = await CheckoutAction(
      cart.map((cartProduct) => ({
        productName: cartProduct.item.productName,
        price: calculateDiscountPrice(
          cartProduct.item.price,
          selectedOffer ? selectedOffer.discountPercentage : 0
        ),
        quantity: cartProduct.quantity,
      })),
      order
    );
    const { success, message, url } = response;
    if (!success) {
      toast.error(message);
    }
    toast.success(message);
    window.document.location.href = url!;
  };

  return {
    totalPriceWithoutDiscount,
    totalSaved,
    selectedOffer,
    setSelectedOffer,
    checkout,
  };
};