import {ReactNode, createContext, useState} from "react";
import {CartContextInterface, CartItem, ProductItem} from "./cart.interface";
import toast from "react-hot-toast";

// description

// This code establishes a React context and provider component (CartProvider) for managing a shopping cart's state in a React application.
//  It offers methods for adding, decreasing, and removing items from the cart, along with tracking the current cart items and loading state.
// It employs React's useState hook for state management and react-hot-toast for displaying notifications.

export const CartContext = createContext<CartContextInterface>({
  addToCart: () => {},
  decreaseProduct: () => {},
  removeProduct: () => {},
  cart: [],
  loading: false,
});

const CartProvider = ({children}: {children: ReactNode}) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(false);

  // add to cart
  const handleAddToCart = (product: ProductItem) => {
    setLoading(true);
    const findProduct = cart.find((item) => item.id === product.id);
    if (findProduct) {
      const newCart = cart.map((item) =>
        item.id === product.id
          ? {
              ...item,
              QTY: item.QTY + 1,
            }
          : item
      );
      setCart(newCart);
      setLoading(false);
    } else {
      setCart((prevItems) => {
        return [
          ...prevItems,
          {
            ...product,
            QTY: 1,
          },
        ];
      });
      setLoading(false);
    }
    toast.success(`محصول با موفقیت به سبد خرید شما اضافه شد`);
  };

  // decrease product QTY
  const handleDecreaseProduct = (productID: number) => {
    setLoading(true);
    const findProduct = cart.find((item) => item.id === productID);
    if (findProduct && findProduct.QTY > 1) {
      toast.error(`تعداد محصول ${findProduct.title} با موفقیت کاهش یافت`);
      const tempCart = cart.map((product) =>
        product.id === productID
          ? {
              ...product,
              QTY: product.QTY - 1,
            }
          : product
      );
      setCart(tempCart);
      setLoading(false);
    } else {
      toast.error(`محصول  با موفقیت به سبد خرید شما حذف شد`);
      const tempCart = cart.filter((product) => product.id !== findProduct?.id);
      setCart(tempCart);
      setLoading(false);
    }
  };

  // remove from cart
  const handleRemoveProductFromCart = (productID: number) => {
    setLoading(true);

    const tempCart = cart.filter((item) => item.id !== productID);
    setCart(tempCart);
    setLoading(false);
  };
  return (
    <CartContext.Provider
      value={{
        addToCart: handleAddToCart,
        decreaseProduct: handleDecreaseProduct,
        removeProduct: handleRemoveProductFromCart,
        cart,
        loading,
      }}
    >
      {" "}
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
