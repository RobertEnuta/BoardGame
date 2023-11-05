import { type AppType } from "next/app";

import { api } from "~/utils/api";

import { Analytics } from "@vercel/analytics/react";

import "~/styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main className={`font-sans ${inter.variable}`}>
      <Analytics />
      <Component {...pageProps} />
    </main>
  );
};

export default api.withTRPC(MyApp);
