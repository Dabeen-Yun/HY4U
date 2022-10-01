import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-[#F5F5F5] overflow-x-hidden">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
