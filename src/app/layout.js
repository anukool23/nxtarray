import "./globals.css";
import Navbar from "./Navbar";
import { Toaster } from "react-hot-toast";


export const metadata = {
  title: "NxtArray",
  description: "NxtArray",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Navbar />
       <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 8000,
          success: {
            duration: 8000,
          },
          error: {
            duration: 8000,
          },
        }}
      />
        {children}
      </body>
    </html>
  );
}
