"use client";

import { Toaster, toast } from "react-hot-toast";
import { color } from "@/styles/theme";
import { Hex2Rgba } from "@/utils/helpers";

export function ToasterComp() {
  return (
      <Toaster
      position="top-center"
      reverseOrder={false}
      toastOptions={{
        style: {
          border: "1px solid " + color.black,
          color: color.white,
          background: Hex2Rgba(color.black, 0.95),
        },
      }}
    />
  )
}

export const toasty = toast;