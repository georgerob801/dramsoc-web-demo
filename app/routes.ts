import { type RouteConfig, index, layout } from "@react-router/dev/routes";

export default [
    layout("layouts/BaseLayout.tsx", [
        layout("layouts/FooterPositioner.tsx", [
            layout("layouts/DefaultPageLayout.tsx", [
                index("routes/landing.tsx")
            ])
        ])
    ])
] satisfies RouteConfig;
