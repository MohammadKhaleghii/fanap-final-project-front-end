import thousandSeparator from "@/utilities/thousand-separator";
import {CartItemProps} from "./cart-card.interface";
import {useContext} from "react";
import {CartContext} from "@/context/cart-provider";
import {ProductItem} from "@/context/cart-provider/cart.interface";
import Link from "next/link";

const CartItem: React.FC<CartItemProps> = ({
  imagePath,
  cost,
  title,
  QTY,
  id,
}: CartItemProps) => {
  const product: ProductItem = {
    imagePath,
    cost,
    id,
    title,
  };
  const cart = useContext(CartContext);

  const handleRemoveProduct = () => {
    cart.removeProduct(id);
  };

  const handleAddProduct = () => {
    cart.addToCart(product);
  };
  const handleDecreaseProductQTY = () => {
    cart.decreaseProduct(id);
  };
  return (
    <div className="flex flex-col md:flex-row items-center hover:bg-gray-100 -mx-4 md:-mx-8 px-4 md:px-6 py-5">
      <div className="flex w-full md:w-2/5">
        <div className="w-24 mx-2 md:mx-0">
          <img loading="lazy" className="h-24 w-24" src={imagePath} alt="" />
        </div>
        <div className="flex flex-col justify-between ml-4 md:ml-0 flex-grow">
          <Link href={`/product/${id}`}>
            <span className="font-bold text-sm hover:text-primary">
              {title}
            </span>
          </Link>
          <button
            onClick={handleRemoveProduct}
            className="font-semibold hover:text-red-500 text-gray-500 text-xs text-right mt-2 md:mt-0"
          >
            حذف از سبد
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center w-full md:w-1/5 mt-4 md:mt-0">
        <i onClick={handleAddProduct} className="fa-solid fa-plus text-sm"></i>
        <input
          className="mx-2 border text-center w-8"
          type="text"
          value={QTY.toString()}
        />
        <i
          onClick={handleDecreaseProductQTY}
          className="fa-solid fa-minus text-sm"
        ></i>
      </div>
      <span className="text-center w-full md:w-1/5 font-semibold text-sm mt-4 md:mt-0">
        {thousandSeparator(cost)} تومان
      </span>
      <span className="text-center w-full md:w-1/5 font-semibold text-sm mt-4 md:mt-0">
        {thousandSeparator(cost * QTY)} تومان
      </span>
    </div>
  );
};

export default CartItem;

CartItem.defaultProps = {
  imagePath: "https://drive.google.com/uc?id=18KkAVkGFvaGNqPy2DIvTqmUH_nk39o3z",
};
