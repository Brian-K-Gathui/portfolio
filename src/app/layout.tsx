import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "Brian K. Gathui",
    description: "Brian K.Gathui's Portfolio",
    icons: {
        icon: "/logo-3.png", // This sets the tab icon.
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${inter.variable} font-sans antialiased bg-black text-white`}
            >
                {children}
            </body>
        </html>
    );
}
