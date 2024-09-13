import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./(components)/Header";
import { SpeedInsights } from "@vercel/speed-insights/next";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Blogs website",
    description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Header />
                {children}
                <SpeedInsights />
            </body>
        </html>
    );
}
