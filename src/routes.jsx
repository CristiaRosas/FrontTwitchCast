import { Auth } from "./pages/auth"
import { DashboardPage } from "./pages/dashboard/DashboardPage"

const routes = [

  { path: '/auth', element: <Auth/>},
  { path: '/*', element: <DashboardPage/>},

]

export  default routes 