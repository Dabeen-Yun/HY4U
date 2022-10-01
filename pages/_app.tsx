import "../styles/globals.css";
import type { AppProps } from "next/app";
import Nav from "../components/nav";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-[#F5F5F5] overflow-x-hidden">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
