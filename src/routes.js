import Dashboard from "./DashboardComponentsAndPages/views/Dashboard.js";
import Users from "./pages/dashboard/Users";
import AddUser from "./pages/dashboard/AddUser";
import UserProfile from "./pages/dashboard/UserProfile";
import EditUser from "./pages/dashboard/EditUserPage";
import Settings from "./pages/dashboard/Settings";


const routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
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
      } ,
      {
        path: "/settings",
        component: Settings,
        layout: "/admin",
      }
    ],
  },
];

export default routes;
