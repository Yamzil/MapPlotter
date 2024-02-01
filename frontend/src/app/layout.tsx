import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "../components/Map/Navbar/Navbar";


const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  title: "Map Plotter",
  description: "Plots your firms on a map",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
