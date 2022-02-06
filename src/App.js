import React from 'react';
import './App.css';
// import PrivateRoute from './privateRoute';
import {  Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "./views/components/authentication/Login";
import Onboarding from "./views/components/authentication/Registration";
import Dashboard from "./layout/web-app";
import Home from "./layout/website";


// const Login = React.lazy(() => import("./views/components/authentication/Login"));
// const Onboarding = React.lazy(() => import("./views/components/authentication/Registration"));
// const Dashboard = React.lazy(() => import("./layout/web-app"));
// const Home = React.lazy(() => import("./layout/website"));

function App() {

  return (
    <BrowserRouter>
      <div className="App">
      <Routes>
        <Route
          exact
          path="/login"
          name="Login"
          element={<Login />}
        />
        <Route
          exact
          path="/register"
          name="Onboarding"
          element={<Onboarding />}
        />
        <Route
          exact
          path="/dashboard"
          name="Dashboard"
          element={<Dashboard />}
        />
        <Route
          exact
          path="/"
          name="Home"
          element={<Home />}
        />
      </Routes>
      </div>
      </BrowserRouter>
  );
}

export default App;
