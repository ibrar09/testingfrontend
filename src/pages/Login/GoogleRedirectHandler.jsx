// src/pages/Auth/GoogleRedirect.jsx
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const GoogleRedirect = () => {
  const { handleGoogleCallback } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const accessToken = params.get("accessToken");
    const refreshToken = params.get("refreshToken");
    const redirect = params.get("state") || "/shop";

    if (accessToken && refreshToken) {
      handleGoogleCallback({ accessToken, refreshToken, redirect });
      navigate(redirect);
    } else {
      navigate("/login");
    }
  }, [location]);

  return <p>Logging you in...</p>;
};

export default GoogleRedirect;
