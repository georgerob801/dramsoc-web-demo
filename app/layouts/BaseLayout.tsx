import type { ReactNode } from "react";
import { Outlet } from "react-router";
import { ThemeProvider } from "~/components/ThemeProvider";

export default function BaseLayout(): ReactNode {
    return (
        <ThemeProvider
            defaultTheme="dark"
            storageKey="theme"
        >
            <Outlet />
        </ThemeProvider>
    );
}
