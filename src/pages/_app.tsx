import { useState } from "react";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "@/styles/globals.css";
import { LogProvider } from "@/context/LogProvider";

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <LogProvider>
        <Component {...pageProps} />
      </LogProvider>
    </QueryClientProvider>
  );
}
