import React from 'react';
import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./views/components/authentication/Login";
// import EbookPage from './views/pages/LandingPages/ebook-page';
// import HomeHeader from './views/components/home/HomeHeader';
// import HomeFooter from './views/components/home/HomeFooter';
// import BlogPage from './views/pages/LandingPages/blog-page';
// import CarRentalPage from './views/pages/LandingPages/car-rental-page';
// import CareerPage from './views/pages/LandingPages/career-page';
// import CompanyPage from './views/pages/LandingPages/company-page';
// import ContactPage from './views/pages/LandingPages/contact-page';
// import CorporatePage from './views/pages/LandingPages/corporate-page';
// import CustomerPage from './views/pages/LandingPages/customer-page';
// import DemoPage from './views/pages/LandingPages/demo-page';
// import GuidePage from './views/pages/LandingPages/guide-page';
// import HomePage from './views/pages/LandingPages/home-page';
// import HotelPage from './views/pages/LandingPages/hotel-page';
// import KCarePage from './views/pages/LandingPages/k-care-page';
// import LoginPage from './views/pages/LandingPages/login-page';
// import PricingPage from './views/pages/LandingPages/pricing-page';
// import RegistrationPage from './views/pages/LandingPages/registeration-page';
import DashboardPage from './views/pages/AppPages/dashboard-one-page';
// import TeamPage from './views/pages/LandingPages/team-page';
// import TravelPage from './views/pages/LandingPages/travel-page';
// import VendorPage from './views/pages/LandingPages/vendor-page';
// import WebinarPage from './views/pages/LandingPages/webinar-page';
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
    <>
    {/* <BrowserRouter>
      <div className="App">
        <HomeHeader />
      <Routes>
        <Route
          exact
          path="/blog"
          name="Blog"
          element={<BlogPage />}
        />
        <Route
          exact
          path="/car-rental"
          name="CarRental"
          element={<CarRentalPage />}
        />
        <Route
          exact
          path="/career"
          name="Career"
          element={<CareerPage />}
        />
        <Route
          exact
          path="/company"
          name="Company"
          element={<CompanyPage />}
        />
        <Route
          exact
          path="/contact"
          name="Contact"
          element={<ContactPage />}
        />
        <Route
          exact
          path="/corporate"
          name="Corporate"
          element={<CorporatePage />}
        />
        <Route
          exact
          path="/customer"
          name="Customer"
          element={<CustomerPage />}
        />
        <Route
          exact
          path="/demo"
          name="Demo"
          element={<DemoPage />}
        />
        <Route
          exact
          path="/e-book"
          name="EBook"
          element={<EbookPage />}
        />
        <Route
          exact
          path="/guide"
          name="Guide"
          element={<GuidePage />}
        />
        <Route
          exact
          path="/"
          name="Home"
          element={<HomePage />}
        />
        <Route
          exact
          path="/hotel"
          name="Hotel"
          element={<HotelPage />}
        />
        <Route
          exact
          path="/k-care"
          name="KCare"
          element={<KCarePage />}
        />
        <Route
          exact
          path="/login"
          name="Login"
          element={<LoginPage />}
        />
        <Route
          exact
          path="/pricing"
          name="Pricing"
          element={<PricingPage />}
        />
        <Route
          exact
          path="/register"
          name="Register"
          element={<RegistrationPage />}
        />
        <Route
          exact
          path="/team"
          name="Team"
          element={<TeamPage />}
        />
        <Route
          exact
          path="/travel"
          name="Travel"
          element={<TravelPage />}
        />
        <Route
          exact
          path="/vendor"
          name="Vendor"
          element={<VendorPage />}
        />
        <Route
          exact
          path="/webinar"
          name="Webinar"
          element={<WebinarPage />}
        />
      </Routes>
      <HomeFooter />
      </div>
      </BrowserRouter> */}

    {/* <BrowserRouter>
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
        </Routes>
        <Footer />
      </div>
    </BrowserRouter> */}
    <BrowserRouter>
      <div className='App'>
        <Routes>
        <Route
          exact
          path="/reset-password"
          name="ResetPassword"
          element={<ResetPasswordPage />}
        />
        <Route
          exact
          path="/login"
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
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
