import CartProvider from "@/context/cart-provider";
import "@/styles/globals.css";
import type {AppProps} from "next/app";
import {Toaster} from "react-hot-toast";
import "react-loading-skeleton/dist/skeleton.css";
import "../../public/fonts/awesome/css/all.css";
import "../../public/fonts/iran-sans/fonts.css";

export default function App({Component, pageProps}: AppProps) {
  return (
    <>
      <CartProvider>
        <Component {...pageProps} />;
      </CartProvider>
      <Toaster />
    </>
  );
}
