import Link from "next/link";
import {ReactNode, useContext, useState} from "react";
import {footerMenuItems, menuItems} from "./constants.json";
import {CartContext} from "@/context/cart-provider";

const PublicLayout = ({children}: {children: ReactNode}) => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const {cart} = useContext(CartContext);
  return (
    <>
      <header className="bg-white border-b border-gray lg:px-0 px-2  ">
        <div className="container flex items-center justify-between mx-auto my-0 py-5">
          {" "}
          <Link href={"/"}>
            <img
              className="order-2 lg:order-1"
              src="/logo/logo.png"
              alt="logo"
            />
          </Link>
          <nav className="order-1 lg:order-2">
            <menu
              className={`flex-row items-center justify-center w-full gap-x-6 lg:flex hidden`}
            >
              {menuItems.map((item) => (
                <Link
                  key={item.title}
                  className="font-bold hover:text-primary"
                  href={item.href}
                >
                  {item.title}
                </Link>
              ))}
            </menu>
          </nav>
          <div className="flex flex-row gap-x-4 order-3">
            {/* Shopping Cart */}
            <Link href="/cart">
              <div className="relative cursor-pointer pt-2 pb-[3px] px-1 rounded-full lg:hover:bg-primary-40 lg:hover:bg-opacity-[0.08] w-[35px] h-[35px]">
                <div className="h-6 w-[27px] overflow-hidden">
                  <i className="fa-regular fa-cart-shopping  text-primary-40 text-[20px] lg:text-[24px]"></i>
                </div>
                {cart.length > 0 && (
                  <div className="absolute font-bold text-xs rounded-full bg-primary text-white text-center w-[11px] h-[11px] lg:w-4 lg:h-4 lg:top-1 top-0.5 right-1.5 lg:right-2 ">
                    {cart.length}
                  </div>
                )}
              </div>
            </Link>
            {/*End of Shopping Cart */}

            <div
              onClick={() => setOpenMobileMenu(!openMobileMenu)}
              className="order-1 lg:hidden"
            >
              <i className="fa-regular fa-bars font-bold"></i>
            </div>
          </div>
        </div>
      </header>
      {openMobileMenu && (
        <nav className="absolute z-30 bg-white w-full py-2 px-4 shadow-2xl rounded-b-lg ">
          <menu className={`flex flex-col gap-y-4`}>
            {menuItems.map((item) => (
              <Link
                key={item.title}
                className="font-bold hover:text-primary"
                href={item.href}
              >
                {item.title}
              </Link>
            ))}
          </menu>
        </nav>
      )}
      <main>{children}</main>

      <footer className=" bg-black text-white py-16 lg:px-4 px-2">
        <div className="mx-auto my-0 container h-1 bg-white rounded-lg"> </div>
        <div className="py-4 mx-auto my-0 container flex items-center justify-between pt-10 ">
          <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1  gap-x-10 gap-y-10 ">
            <div>
              <img
                className="bg-white p-2 rounded-md"
                src="/logo/logo.png"
                alt=""
              />
              <p className="text-justify pt-2">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز
              </p>
            </div>
            {footerMenuItems.map((item) => (
              <div key={item.title} className="flex flex-col gap-y-4">
                <h4 className="text-primary font-bold">{item.title}</h4>
                {item.items.map((secondItem) => (
                  <Link
                    key={secondItem.title}
                    className="hover:text-primary "
                    href={secondItem.href}
                  >
                    {secondItem.title}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
};

export default PublicLayout;
