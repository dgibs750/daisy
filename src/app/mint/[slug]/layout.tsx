import { WalletConnectProvider } from "@/app/hooks/walletConnect";
import React from "react"

export default function MintPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <WalletConnectProvider>
      <html lang="en">
        <body>
          {children}
        </body>
      </html>
    </WalletConnectProvider>
  );
}
