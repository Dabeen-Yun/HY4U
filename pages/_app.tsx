import "../styles/globals.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [front] = useState(() => new QueryClient());
  return (
    <div className="bg-[#F5F5F5] overflow-x-hidden h-[850px]">
      <QueryClientProvider client={front}>
        <RecoilRoot>
          <Component {...pageProps} />
        </RecoilRoot>
      </QueryClientProvider>
    </div>
  );
}

export default MyApp;
