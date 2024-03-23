import Link from "next/link";
import {ReactNode} from "react";
import {menuItems, footerMenuItems} from "./constants.json";

const PublicLayout = ({children}: {children: ReactNode}) => {
  return (
    <>
      <header className="bg-white border-b border-gray lg:px-0 px-2  ">
        <div className="container flex items-center justify-between mx-auto my-0 py-5">
          {" "}
          <img className="order-2 lg:order-1" src="logo/logo.png" alt="" />
          <nav className="order-1 lg:order-2">
            <menu className="flex-row items-center justify-center w-full gap-x-6 lg:flex hidden ">
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
            <div className=" order-1 lg:hidden">
              <i className="fa-regular fa-bars"></i>
            </div>
          </nav>
          <div className="flex flex-row gap-x-4 order-3">
            <i className="fa-regular fa-cart-shopping text-xl cursor-pointer hover:text-primary font-bold"></i>
            <i className="fa-regular fa-user text-xl cursor-pointer hover:text-primary font-bold"></i>
          </div>
        </div>
      </header>
      <main>{children}</main>

      <footer className=" bg-black text-white py-16 lg:px-4 px-2">
        <div className="mx-auto my-0 container h-1 bg-white rounded-lg"> </div>
        <div className="py-4 mx-auto my-0 container flex items-center justify-between pt-10 ">
          <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1  gap-x-10 gap-y-10 ">
            <div>
              <img
                className="bg-white p-2 rounded-md"
                src="logo/logo.png"
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
