import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Auth from '../../views/components/authentication';
import Register from '../../views/components/authentication/Registration';
import AppPages from '../../views/pages/AppPages';
import WalletPage from '../../views/pages/AppPages/wallet-page';

function WebApp(){
    return(
        <>
        <BrowserRouter>
      <div>
      <Routes>
      <Route 
            exact 
            path={"/register"} 
            name="Register" 
            element={<Register />}/>
      <Route 
            exact 
            path={"/login"} 
            name="Login" 
            element={<Auth />}/>
      </Routes>
      </div>
      </BrowserRouter>
      <div className=''>
            <NavBar />
            <Routes>
                  <Route
                  exact
                  path="/accounting"
                  name="Accounting"
                  element={<AccountPage />}
                  />
                   <Route
                  exact
                  path="/wallet"
                  name="Wallet"
                  element={<WalletPage />}
                  />
                  <Route
                  exact
                  path="/setting"
                  name="Setting"
                  element={<SettingPage />}
                  />
                  <Route
                  exact
                  path="/trip-history"
                  name="TripHistory"
                  element={<TripHistoryPage />}
                  />
                  <Route
                  exact
                  path="/reporting"
                  name="Reporting"
                  element={<ReportingPage />}
                  />
                   <Route
                  exact
                  path="/trip"
                  name="Trip"
                  element={<TripPage />}
                  />
                  <Route
                  exact
                  path="/invoicing"
                  name="Invoicing"
                  element={<InvoicePage />}
                  />
                  <Route 
                  exact 
                  path={"/app-page"} 
                  name="AppPage" 
                  element={<AppPages />}
                  />
            </Routes>
            <Footer />
      </div>
        </>
    )
}

export default WebApp;