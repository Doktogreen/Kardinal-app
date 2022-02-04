import React from 'react';
import './App.css';
// import PrivateRoute from './privateRoute';
import Blog from './views/components/blog/Blog';
import {  Route, Routes, BrowserRouter } from "react-router-dom";
// import AppLayout from './layout';
import Website from './layout/website';
import Company from './views/components/company';
// import Login from './views/components/authentication';
// import Register from './views/components/authentication/Registration';
import CarRental from './views/components/car-rental';
import Career from './views/components/career';
import Contact from './views/components/contact';
import Corporate from './views/components/corporate';
import Customer from './views/components/customer';
import Demo from './views/components/demo';
import Ebook from './views/components/ebook';
import Guide from './views/components/guide';
import Hotel from './views/components/hotel';
import KCare from './views/components/k-care';
import Pricing from './views/components/pricing';
import Team from './views/components/team';
import Travel from './views/components/travel';
import Vendor from './views/components/vendor';
import Webinar from './views/components/webinar';
// import AppPages from './views/pages/AppPages';
// import AccountPage from './views/pages/AppPages/accounting-page';
// import InvoicePage from './views/pages/AppPages/invoice-page';
// import TripPage from './views/pages/AppPages/trip-page';
// import NavBar from './views/components/user/NavBar';
// import Footer from './views/components/user/Footer';
// import ReportingPage from './views/pages/AppPages/reporting-page';
// import TripHistoryPage from './views/pages/AppPages/trip-history-page';
// import SettingPage from './views/pages/AppPages/setting-page';
// import WalletPage from './views/pages/AppPages/wallet-page';
import HomeHeader from './views/components/home/HomeHeader';
import HomeFooter from './views/components/home/HomeFooter';
// const AppLayout = React.lazy(() => import('./layout'));
function App() {
  return (
    <BrowserRouter>
      <div className="App">
            <HomeHeader />
      <Routes>
      <Route 
            exact 
            path={"/webinar"} 
            name="Webinar" 
            element={<Webinar />}/>
      <Route 
            exact 
            path={"/vendor"} 
            name="Vendor" 
            element={<Vendor />}/>
      <Route 
            exact 
            path={"/travel"} 
            name="Travel" 
            element={<Travel />}/>
      <Route 
            exact 
            path={"/team"} 
            name="Team" 
            element={<Team />}/>
      <Route 
            exact 
            path={"/pricing"} 
            name="Pricibg" 
            element={<Pricing />}/>
      <Route 
            exact 
            path={"/k-care"} 
            name="K-care" 
            element={<KCare />}/>
      <Route 
            exact 
            path={"/hotel"} 
            name="Hotel" 
            element={<Hotel />}/>
      <Route 
            exact 
            path={"/guide"} 
            name="Guide" 
            element={<Guide />}/>
      <Route 
            exact 
            path={"/ebook"} 
            name="Ebook" 
            element={<Ebook />}/>
      <Route 
            exact 
            path={"/demo"} 
            name="Demo" 
            element={<Demo />}/>
      <Route 
            exact 
            path={"/customer"} 
            name="Customer" 
            element={<Customer />}/>
      <Route 
            exact 
            path={"/corporate"} 
            name="Corporate" 
            element={<Corporate />}/>
      <Route 
            exact 
            path={"/contact"} 
            name="Contact" 
            element={<Contact />}/>
      <Route 
            exact 
            path={"/career"} 
            name="Career" 
            element={<Career />}/>
      <Route 
            exact 
            path={"/car-rental"} 
            name="CarRental" 
            element={<CarRental />}/>
        <Route 
            exact 
            path={"/company"} 
            name="Company" 
            element={<Company />}/>
        <Route 
            exact 
            path={"/"} 
            name="Home" 
            element={<Website />}/>
        <Route
          exact
          path="/blog"
          name="Blog"
          element={<Blog />}
        />
      </Routes>
      <HomeFooter />
      </div>
      </BrowserRouter>
  );
}

export default App;
