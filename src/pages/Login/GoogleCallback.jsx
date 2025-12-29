// import React, { useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

// const GoogleCallback = () => {
//   const { handleGoogleCallback } = useAuth();
//   const location = useLocation();

//   useEffect(() => {
//     const params = new URLSearchParams(location.search);
//     const accessToken = params.get("accessToken");
//     const refreshToken = params.get("refreshToken");
//     const email = params.get("email");
//     const name = params.get("name");
//     const redirect = params.get("redirect");

//     if (accessToken && refreshToken) {
//       handleGoogleCallback({
//         accessToken,
//         refreshToken,
//         user: { email, name },
//         redirect,
//       });
//     } else {
//       console.error("[GoogleCallback] Missing tokens in query params");
//     }
//   }, [location.search]);

//   return <div>Logging in with Google...</div>;
// };

// export default GoogleCallback;
