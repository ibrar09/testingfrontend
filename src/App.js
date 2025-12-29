import React from "react";
import { Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";

// Layouts
import MainLayout from "./components/layouts/MainLayout";
import StoreLayout from "./components/layouts/StoreLayout";
import DashboardLayout from "./UserDashboard/components/DashboardLayout.jsx";

// Pages
import Home from "./pages/HomePage/Home";
import AboutUs from "./pages/AboutPage/AboutUs";
import Contact from "./pages/ContactPage/Contact";
import Career from "./pages/Careers/Careers.jsx";
import Projects from "./pages/ProjectsPage";
import ProjectDetailsPage from "./pages/ProjectsPage/ProjectDetailsPage";
import Services from "./pages/ServicePage/Services";
import RequestQuoteForm from "./pages/RequestPage/RequestQuoteForm";
import MaajShop from "./pages/MaajShop/MaajShop";
import StoreHome from "./pages/MaajShop/StoreHome";
import ProductDetails from "./pages/MaajShop/components/ProductDetails/ProductDetailsPage";
import CartPage from "./pages/MaajShop/CartPage";
import CheckOut from "./pages/MaajShop/CheckOut";
import SearchResultsPage from "./pages/MaajShop/SearchResultsPage";


// Auth Pages
// import LoginPage from "./pages/Login/LoginPage.jsx";
// import RegisterPage from "./pages/Login/RegisterPage.jsx";
// import Otp from "./pages/Login/OtpPage.jsx";
// import GoogleCallback from "./pages/Login/GoogleCallback.jsx";
// import ResetPasswordPage from "./pages/Login/ResetPasswordPage.jsx";
// import GoogleRedirectHandler from "./pages/Login/GoogleRedirectHandler.jsx";
// import VerifyResetOtp from "./pages/Login/VerifyResetOtp.jsx";
// import ForgotPasswordPage from "./pages/Login/ForgotPassword.jsx";

// Components
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute.jsx";
import ScrollToTop from "./ScrollToTop";

// User Dashboard Pages
import Overview from "./UserDashboard/pages/Dashboard/Overview";
import Orders from "./UserDashboard/components/orders/Orders";
import OrderDetails from "./UserDashboard/components/orders/OrdersDetails";
import Payments from "./UserDashboard/components/payments/Payments.jsx";
import Addresses from "./UserDashboard/pages/Dashboard/Addresses";
import Profile from "./UserDashboard/pages/Dashboard/Profile";
import UserShipments from "./UserDashboard/components/shipments/Shipment";

// Admin
import AdminRoutes from "./admin/AdminRoutes";
import AdminLayout from "./admin/layouts/AdminLayout.jsx";
import PaymentSuccess from "./pages/MaajShop/PaymentSuccess.jsx";
import PopupManager from "./components/PopupManager.jsx";
import PrivacyPolicy from "./components/common/PrivacyPolicy.jsx";
import TermsOfServicePage from "./components/common/TermsofServicePage.jsx";
import Electrical from "./pages/ServicePage/ChildPages/electrical/Electrical.jsx";
import Plumbing from "./pages/ServicePage/ChildPages/Plumbing/Plumbing.jsx";
import Hvac from "./pages/ServicePage/ChildPages/hvac/Hvac.jsx";
import Kitchen from "./pages/ServicePage/ChildPages/Kitchen/Kitchen.jsx";
import Construction from "./pages/ServicePage/ChildPages/construction/Construction.jsx";
import Painting from "./pages/ServicePage/ChildPages/Painting/Painting.jsx";
import Carpentry from "./pages/ServicePage/ChildPages/carpentry/Carpentry.jsx";
import ITService from "./pages/ServicePage/ChildPages/it-service/ITService.jsx";
import IT from "./pages/ServicePage/ChildPages/it-service/IT.jsx";
import Epoxy from "./pages/ServicePage/ChildPages/Epoxy/Epoxy.jsx";
import FitOut from "./pages/ServicePage/ChildPages/FitOut/Fitout.jsx";
import Careers from "./pages/Careers/Careers.jsx";
import NewArrivalsPage from "./pages/MaajShop/pages/NewArrivalsPage.js";


function App() {
  return (
    <CartProvider>
      <ScrollToTop />
      

      <Routes>
        {/* ---------------- Portfolio Section ---------------- */}
       
<Route element={<MainLayout />}>
  <Route path="/" element={<Home />} />
  <Route path="/aboutus" element={<AboutUs />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/career" element={<Careers />} />
  <Route path="/projects" element={<Projects />} />
<Route path="/projects/:slug" element={<ProjectDetailsPage />} />
  <Route path="/services" element={<Services />} />

  {/* Individual service pages */}
  <Route path="/services/plumbing" element={<Plumbing />} />
  <Route path="/services/electrical" element={<Electrical />} />
  <Route path="/services/hvac" element={<Hvac />} />
  <Route path="/services/painting" element={<Painting />} />
  <Route path="/services/epoxy" element={<Epoxy />} />
  <Route path="/services/kitchen" element={<Kitchen />} />
  <Route path="/services/carpentry" element={<Carpentry />} />
  <Route path="/services/it-services" element={<IT />} />
  <Route path="/services/construction" element={<Construction/>} />
  <Route path="/services/fitout" element={<FitOut/>} />

  <Route path="/request" element={<RequestQuoteForm />} />
  <Route path="/privacy" element={<PrivacyPolicy />} />
  <Route path="/terms" element={<TermsOfServicePage />} />
</Route>

       



        {/* ---------------- Store Section ---------------- */}
        <Route element={<StoreLayout />}>
          <Route path="/shop" element={<MaajShop />} />
          <Route path="/store" element={<StoreHome />} />
          <Route path="/product/:slug" element={<ProductDetails />} /> 
          <Route path="/product/:id" element={<ProductDetails />} />

          <Route path="/store/cart" element={<CartPage />} />
          <Route path="/store/checkout" element={<CheckOut />} />
          <Route path="/search" element={<SearchResultsPage />} />
         <Route path="/shop/new-arrivals" element={<NewArrivalsPage />} />
          <Route path="/payment/success" element={<PaymentSuccess />} />


          {/* Google OAuth */}
          {/* <Route path="/auth/google/callback" element={<GoogleCallback />} /> */}
        </Route>

        {/* ---------------- User Dashboard (Protected) ---------------- */}
        <Route element={<ProtectedRoute allowedRoles={["user", "google"]} />}>
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Overview />} />
            <Route path="overview" element={<Overview />} />
            <Route path="orders" element={<Orders />} />
            <Route path="orders/:id" element={<OrderDetails />} />
            <Route path="payments" element={<Payments />} />
            <Route path="addresses" element={<Addresses />} />
            <Route path="profile" element={<Profile />} />
            <Route path="shipment" element={<UserShipments />} />
          </Route>
        </Route>

        {/* ---------------- Admin Section (Protected) ---------------- */}
        <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
          <Route path="/admin/*" element={<AdminLayout />}>
            <Route path="*" element={<AdminRoutes />} />
          </Route>
        </Route>

        {/* ---------------- Auth Pages ---------------- */}
        {/* <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/verify-otp" element={<Otp />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/verify-reset-otp" element={<VerifyResetOtp />} />
        <Route path="/reset-password/verify" element={<ResetPasswordPage />} /> */}

        {/* ---------------- Google redirect ---------------- */}
        {/* <Route path="/auth/google/redirect" element={<GoogleRedirectHandler />} /> */}

        {/* ---------------- 404 Fallback ---------------- */}
        <Route
          path="*"
          element={<div className="p-10 text-center">404 - Page Not Found</div>}
        />
      </Routes>
    </CartProvider>
  );
}

export default App;
