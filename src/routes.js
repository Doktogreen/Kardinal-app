import React from "react";

const Users = React.lazy(() => import('./views/users/Users'));
const User = React.lazy(() => import('./views/users/User'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/business', name: 'form', component: Users },
  { path: '/business', name: 'form', component: User }
]

export default routes;