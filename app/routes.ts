import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    layout("layouts/BaseLayout.tsx", [
        layout("layouts/FooterPositioner.tsx", [
            layout("layouts/DefaultPageLayout.tsx", [
                index("routes/landing.tsx")
            ])
        ])
    ]),

    route("tickets", "routes/redirects/shop.tsx", { id: "tickets" }),
    route("shop", "routes/redirects/shop.tsx", { id: "shop" }),

    route("join", "routes/redirects/azPage.tsx")
] satisfies RouteConfig;
