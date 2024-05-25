import type { Metadata } from "next";
import React from "react";
import '@/styles/base.scss'
import '@/styles/fontStyles.css'
import StyledComponentsRegistry from "./registry";
import NextTopLoader from 'nextjs-toploader';
import { color } from "@/styles/theme";

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
          <StyledComponentsRegistry>
            <NextTopLoader
              color={color.primary}
              initialPosition={0.08}
              crawlSpeed={200}
              height={10}
              crawl={true}
              showSpinner={true}
              easing="ease"
              speed={200}
              shadow="0 0 10px #BD2D87,0 0 5px #BD2D87"
              template='<div class="bar" role="bar"><div class="peg"></div></div> 
              <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
              zIndex={1600}
              showAtBottom={false}
            />
            {children}
          </StyledComponentsRegistry>
        </body>
      </html>
  );
}
