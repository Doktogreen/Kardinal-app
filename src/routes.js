import React from "react";

/*-------------------------
APPLICATION PAGES
--------------------------*/

const Accounting = React.lazy(() => import('./views/pages/AppPages/accounting-page'));
const Wallet = React.lazy(() => import('./views/pages/AppPages/wallet-page'));
const Setting = React.lazy(() => import('./views/pages/AppPages/setting-page'));
const TripHistory = React.lazy(() => import('./views/pages/AppPages/trip-history-page'));
const Reporting = React.lazy(() => import('./views/pages/AppPages/reporting-page'));
const Trip = React.lazy(() => import('./views/pages/AppPages/trip-page'));
const Invoice = React.lazy(() => import('./views/pages/AppPages/invoice-page'));
const Profile = React.lazy(() => import('./views/pages/AppPages/profile-page'));

/*-------------------------
LANDING PAGES
--------------------------*/

const Blog = React.lazy(() => import('./views/pages/LandingPages/blog-page'));
const Webinar = React.lazy(() => import('./views/pages/LandingPages/webinar-page'));
const Vendor = React.lazy(() => import('./views/pages/LandingPages/vendor-page'));
const Travel = React.lazy(() => import('./views/pages/LandingPages/travel-page'));
const Team = React.lazy(() => import('./views/pages/LandingPages/team-page'));
const Pricing = React.lazy(() => import('./views/pages/LandingPages/pricing-page'));
const KCare = React.lazy(() => import('./views/pages/LandingPages/k-care-page'));
const Hotel = React.lazy(() => import('./views/pages/LandingPages/hotel-page'));
const Guide = React.lazy(() => import('./views/pages/LandingPages/guide-page'));
const Ebook = React.lazy(() => import('./views/pages/LandingPages/ebook-page'));
const Demo = React.lazy(() => import('./views/pages/LandingPages/demo-page'));
const Customer = React.lazy(() => import('./views/pages/LandingPages/customer-page'));
const Corporate = React.lazy(() => import('./views/pages/LandingPages/corporate-page'));
const Contact = React.lazy(() => import('./views/pages/LandingPages/contact-page'));
const Company = React.lazy(() => import('./views/pages/LandingPages/company-page'));
const Career = React.lazy(() => import('./views/pages/LandingPages/career-page'));
const CarRental = React.lazy(() => import('./views/pages/LandingPages/car-rental-page'));


export const landingRoutes = [
  { path: '/blog', name: 'blog', component: Blog },
  { path: '/career', name: 'career', component: Career },
  { path: '/car-rental', name: 'car-rental', component: CarRental },
  { path: '/company', name: 'company', component: Company },
  { path: '/contact', name: 'contact', component: Contact },
  { path: '/corporate', name: 'corporate', component: Corporate },
  { path: '/customer', name: 'customer', component: Customer },
  { path: '/demo', name: 'demo', component: Demo },
  { path: '/ebook', name: 'ebook', component: Ebook},
  { path: '/guide', name: 'guide', component: Guide },
  { path: '/hotel', name: 'hotel', component: Hotel },
  { path: '/k-care', name: 'k-care', component: KCare },
  { path: '/pricing', name: 'pricing', component: Pricing },
  { path: '/team', name: 'team', component: Team },
  { path: '/travel', name: 'travel', component: Travel },
  { path: '/vendor', name: 'vendor', component: Vendor },
  { path: '/webinar', name: 'webinar', component: Webinar },
];
export const appRoutes = [
  { path: '/accounting', name: 'accounting', component: Accounting },
  { path: '/invoice', name: 'invoice', component: Invoice },
  { path: '/profile', name: 'profile', component: Profile },
  { path: '/reporting', name: 'reporting', component: Reporting },
  { path: '/setting', name: 'setting', component: Setting },
  { path: '/trip-history', name: 'trip-history', component: TripHistory },
  { path: '/trip', name: 'trip', component: Trip },
  { path: '/wallet', name: 'wallet', component: Wallet },
];