import React from 'react';
import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./views/components/authentication/Login";
import DashboardPage from './views/pages/AppPages/dashboard-one-page';
import NavBar from './views/components/user/NavBar';
import Footer from './views/components/user/Footer';
import AccountPage from './views/pages/AppPages/accounting-page';
import InvoicePage from './views/pages/AppPages/invoice-page';
import ProfilePage from './views/pages/AppPages/profile-page';
import ReportingPage from './views/pages/AppPages/reporting-page';
import SettingPage from './views/pages/AppPages/setting-page';
import TripPage from './views/pages/AppPages/trip-page';
import TripHistoryPage from './views/pages/AppPages/trip-history-page';
import Onboarding from './views/components/authentication/Registration';
import ResetPasswordPage from './views/pages/AppPages/reset-password-page';
// import PrivateRoute from './privateRoute';
// import WebApp from './layout/web-app';

// const Login = React.lazy(() => import("./views/components/authentication/Login"));
// const Onboarding = React.lazy(() => import("./views/components/authentication/Registration"));
// const Dashboard = React.lazy(() => import("./layout/web-app"));
// const Home = React.lazy(() => import("./layout/website"));

function App() {

  return (
    <>
    <BrowserRouter>
      <div className='App'>
        <NavBar />
        <Routes>
        <Route
          exact
          path="/account"
          name="Account"
          element={<AccountPage />}
        />
        <Route
          exact
          path="/dashboard"
          name="Dashboard"
          element={<DashboardPage />}
        />
        <Route
          exact
          path="/invoice"
          name="Invoice"
          element={<InvoicePage />}
        />
        <Route
          exact
          path="/profile"
          name="Profile"
          element={<ProfilePage />}
        />
        <Route
          exact
          path="/reporting"
          name="Reporting"
          element={<ReportingPage />}
        />
        <Route
          exact
          path="/setting"
          name="Setting"
          element={<SettingPage />}
        />
        <Route
          exact
          path="/trip"
          name="Trip"
          element={<TripPage />}
        />
        <Route
          exact
          path="/trip-history"
          name="TripHistory"
          element={<TripHistoryPage />}
        />
      
        <Route
          exact
          path="/reset-password"
          name="ResetPassword"
          element={<ResetPasswordPage />}
        />
        <Route
          exact
          path="/"
          name="Login"
          element={<Login />}
        />
        <Route
          exact
          path="/register"
          name="register"
          element={<Onboarding />}
        />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
