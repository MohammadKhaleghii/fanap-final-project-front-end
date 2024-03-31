import CartItem from "@/components/cards/cart-card";
import {CartContext} from "@/context/cart-provider";
import PublicLayout from "@/layouts/public/public-layout";
import {useContext} from "react";

const CartPage = () => {
  const selectCart = useContext(CartContext);
  return (
    <PublicLayout>
      <section className="px-2 pb-10">
        {selectCart.cart.length ? (
          // if the cart isn't empty show this section
          <div className="container mx-auto mt-10">
            <div className="flex shadow-md my-10">
              <div className="w-full bg-white px-10 py-10">
                <div className="flex justify-between border-b pb-8">
                  <h1 className="font-semibold text-2xl">سبد خرید</h1>
                </div>
                <div className="flex mt-10 mb-5">
                  <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
                    جزئیات محصول
                  </h3>
                  <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">
                    تعداد
                  </h3>
                  <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">
                    قیمت
                  </h3>
                  <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">
                    جمع
                  </h3>
                </div>
                {selectCart.cart.map((item) => (
                  <CartItem
                    key={item.id}
                    imagePath={item.imagePath}
                    id={item.id}
                    cost={item.cost}
                    title={item.title}
                    QTY={item.QTY}
                  />
                ))}
              </div>
            </div>
          </div>
        ) : (
          // if the cart empty show this section
          <div className="flex items-center justify-center flex-col">
            <img loading="lazy" src="images/empty-cart.webp" alt="" />
            <h2 className="lg:pt-5 lg:pb-5 pt-2 text-3xl font-bold">
              سبد خرید شما خالی می باشد
            </h2>
          </div>
        )}
      </section>
    </PublicLayout>
  );
};
export default CartPage;
