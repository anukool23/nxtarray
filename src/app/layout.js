import Footer from "./Footer";
import "./globals.css";
import Navbar from "./Navbar";
import ToasterClient from "./ToasterClient";


export const metadata = {
  title: "NxtArray",
  description: "NxtArray",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
      <Navbar />
      <ToasterClient />
        <main className="flex-1">
        {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
