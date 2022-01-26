import React from "react";

const Blog = React.lazy(() => import('./views/pages/LandingPages/blog-page'));
const Home = React.lazy(() => import('./layout/web-app'));

const routes = [
  { path: '/', exact: true, name: 'Home', component: Home  },
  { path: '/blog', name: 'blog', component: Blog },
]

export default routes;