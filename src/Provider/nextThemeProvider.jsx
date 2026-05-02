"use client";
import { ThemeProvider } from "next-themes";


const nextThemeProvider = ({children}) => {
    return (
        <ThemeProvider attribute="class" defaultTheme="light">
            {children}
        </ThemeProvider>
    );
};

export default nextThemeProvider;