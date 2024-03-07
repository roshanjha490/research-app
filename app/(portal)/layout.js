import { Inter } from "next/font/google";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Notes | Research App",
    description: "",
};

export default function NotesLayout({ children }) {
    return (
        <>
            {children}
        </>
    );
}