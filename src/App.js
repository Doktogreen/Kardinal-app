import React from 'react';
import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./views/components/authentication/Login";
import Onboarding from "./views/components/authentication/Registration";
import CarRentalPage from './views/pages/LandingPages/car-rental-page';
// import Website from './layout/website';
// import LandingPage from './views/pages/LandingPages';
// import PrivateRoute from './privateRoute';
// import WebApp from './layout/web-app';

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
        {/* <PrivateRoute 
          path={"/dashboard"} 
          name="Dashboard" 
          component={<WebApp />} 
        /> */}
        <Route
          exact
          path="/"
          name="Home"
          element={<CarRentalPage />}
        />
      </Routes>
      </div>
      </BrowserRouter>
  );
}

export default App;
