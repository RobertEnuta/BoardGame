import { type AppType } from "next/app";

import { api } from "~/utils/api";

import { Analytics } from "@vercel/analytics/react";

import "~/styles/globals.css";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "react-hot-toast";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider {...pageProps}>
      <Head>
        <title>GameBoard</title>
        <meta name="Messaging Board" content="GameBoard" />
        <link rel="icon" href="/games.ico" />
      </Head>
      <Toaster />
      <main className={`font-sans ${inter.variable}`}>
        <Analytics />
        <Component {...pageProps} />
      </main>
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
