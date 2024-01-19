import { Navigate, createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import Reports from "./pages/Reports";
import Integrations from "./pages/Integrations";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Navigate to="/dashboard" />
    },
    {
        path: "/dashboard",
        element: <Dashboard />
    },
    {
        path: "/orders",
        element: <Orders />
    },
    {
        path: "/customers",
        element: <Customers />
    },
    {
        path: "/reports",
        element: <Reports />
    },
    {
        path: "/integrations",
        element: <Integrations />
    },
])

export default router