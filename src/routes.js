import Dashboard from "./DashboardComponentsAndPages/views/Dashboard.js";
import Users from "./pages/dashboard/Users";
import AddUser from "./pages/dashboard/AddUser";
import UserProfile from "./pages/dashboard/UserProfile";
import EditUser from "./pages/dashboard/EditUserPage";
import Settings from "./pages/dashboard/Settings";
import Customers from "./pages/dashboard/Customers";
import Architects from "./pages/dashboard/Architects";
import Promoters from "./pages/dashboard/Promoters";
import Engineers from "./pages/dashboard/Engineers";
import CustomerDetails from "./pages/dashboard/CustomerDetails";
import EditCustomerPage from "./pages/dashboard/EditCustomerPage";
import EditCustomerForm from "./components/dashboard/CustomersManagement/EditCustomerForm";
import ArchitectDetails from "./pages/dashboard/ArchitectDetails";
import EditArchitectForm from "./components/dashboard/ArchitectsManagement/EditArchitectrForm";
import EditArchitectPage from "./pages/dashboard/EditArchitectPage";


const routes = [
    {
        path: "/dashboard",
        name: "Dashboard",
        icon: "fas fa-chart-pie",
        component: Dashboard,
        layout: "/admin",
    },
    {
        collapse: true,
        name: "Users Management",
        icon: "nc-icon nc-badge",
        state: "pagesCollapse",
        views: [
            {
                path: "/users",
                name: "Users",
                mini: "U",
                component: Users,
                layout: "/admin",
            },
            {
                path: "/AddUser",
                name: "Add User",
                mini: "A",
                component: AddUser,
                layout: "/admin",
            }
        ],
    },
    {
        path: "/customers",
        name: "Customers",
        icon: "fas fa-users",
        component: Customers,
        layout: "/admin",
    },
    {
        path: "/promoters",
        name: "Promoters",
        icon: "fas fa-building",
        component: Promoters,
        layout: "/admin",
    },
    {
        collapse: true,
        name: "Archi / Engin",
        icon: "fas fa-house-user",
        state: "componentsCollapse",
        views: [
            {
                path: "/architects",
                name: "Architects Management",
                mini: "A",
                component: Architects,
                layout: "/admin",
            },
            {
                path: "/engineers",
                name: "Engineers Management",
                mini: "E",
                component: Engineers,
                layout: "/admin",
            },
            {
                path: "/User/:id",
                component: Users,
                layout: "/admin",
            },
            {
                path: "/userProfile",
                component: UserProfile,
                layout: "/admin",
            },
            {
                path: "/updateUser/:id",
                component: EditUser,
                layout: "/admin",
            },
            {
                path: "/updateCustomer/:id",
                component: EditCustomerPage,
                layout: "/admin",
            },
            {
                path: "/settings",
                component: Settings,
                layout: "/admin",
            },
            {
                path: "/customer/:id",
                component: CustomerDetails,
                layout: "/admin",
            },
            {
                path: "/architect/:id",
                component: ArchitectDetails,
                layout: "/admin",
            },
            {
                path: "/updateArchitect/:id",
                component: EditArchitectPage,
                layout: "/admin",
            },
        ],
    },

];

export default routes;
