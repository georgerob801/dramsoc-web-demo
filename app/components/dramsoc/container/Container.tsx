import type { PropsWithChildren, ReactNode } from "react";

export const Container = ({ children }: PropsWithChildren): ReactNode => {
    return (
        <div
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
        >
            {children}
        </div>
    );
};
