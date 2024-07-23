import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Wrapper from "@/components/wrapper";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Expense Tracker",
  description: "Track your expenses",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Wrapper>
          <Navbar />
          {children}
        </Wrapper>
      </body>
    </html>
  );
}
