"use client";

import { Toaster } from "react-hot-toast";

export default function ToasterClient() {
  return (
    <Toaster
      position="bottom-right"
      toastOptions={{
        duration: 8000,
        success: { duration: 8000 },
        error: { duration: 8000 },
      }}
    />
  );
}


