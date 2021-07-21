import Dashboard from "./DashboardComponentsAndPages/views/Dashboard.js";


const routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: Dashboard,
    layout: "/admin",
  }
];

export default routes;
