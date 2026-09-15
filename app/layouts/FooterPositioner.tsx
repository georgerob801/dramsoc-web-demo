import type { ReactNode } from "react";
import { Outlet } from "react-router";

export default function FooterPositioner(): ReactNode {
    return (
        <div
            className="flex flex-col justify-between min-h-screen"
        >
            <Outlet />
        </div>
    );
}
