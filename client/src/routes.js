import React from "react";

import DefaultLayout from "./Views/DefaultLayout/DefaultLayout";
const Profile = React.lazy(() => import("./Views/DefaultLayout/Profile/Profile"))

const routes = [
   { path: "/profile", name: "Profile", component: Profile},
]
export default routes;