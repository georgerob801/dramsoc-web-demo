import type { ReactNode } from "react";
import { Outlet } from "react-router";
import { Footer } from "~/components/dramsoc/footer/Footer";
import { Navbar } from "~/components/dramsoc/navbar/Navbar";

export default function DefaultPageLayout(): ReactNode {
    return (
        <>
            <div
                className="grow flex flex-col"
            >
                <Navbar />
                <Outlet />
            </div>
            <Footer />
        </>
    );
}
