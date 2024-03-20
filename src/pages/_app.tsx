import "@/styles/globals.css";
import type {AppProps} from "next/app";
import "../../public/fonts/awesome/css/all.css";
import "../../public/fonts/iran-sans/fonts.css";

export default function App({Component, pageProps}: AppProps) {
  return <Component {...pageProps} />;
}
