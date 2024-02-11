import type { Metadata } from "next";
import React from "react";
import { WalletConnectProvider } from "./hooks/walletConnect";
import '@/styles/base.scss'
import '@/styles/fontStyles.css'

export const metadata: Metadata = {
  title: "Daisy | Premium Tools for the SEI Network",
  description: "Optimized projects from start to finish. The SEI Network's all-in-one solution.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
        <body>
          {children}
        </body>
      </html>
  );
}
