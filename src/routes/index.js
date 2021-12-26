import { DashboardPage, CategorysPage, ArticlesPage } from "../pages"

const routes = [
    {
        path: "/",
        name: "Dashboard",
        icon: "apps-outline",
        component: DashboardPage
    },
    {
        path: "/categorys",
        name: "Categorys",
        icon: "bookmarks-outline",
        component: CategorysPage
    },
    {
        path: "/articles",
        name: "Articles",
        icon: "cart-outline",
        component: ArticlesPage
    },
    {
        path: "/income",
        name: "Income",
        icon: "cash-outline",
        component: CategorysPage
    },
    {
        path: "/providers",
        name: "Providers",
        icon: "storefront-outline",
        component: CategorysPage
    },
    {
        path: "/sales",
        name: "Sales",
        icon: "card-outline",
        component: CategorysPage
    },
    {
        path: "/clients",
        name: "Clients",
        icon: "person-outline",
        component: CategorysPage
    },
    {
        path: "/customers",
        name: "Customers",
        icon: "people-outline",
        component: CategorysPage
    },
    {
        path: "/reports",
        name: "Reports",
        icon: "stats-chart-outline",
        component: CategorysPage
    },
    {
        path: "/signout",
        name: "Sign Out",
        icon: "log-out-outline",
        component: CategorysPage
    },
]

export default routes;