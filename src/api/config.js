const PROD_BACKEND_URL = "https://testingbackend-production-dc4b.up.railway.app";
const LOCAL_BACKEND_URL = "http://localhost:5000";

export const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || PROD_BACKEND_URL;
export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || `${BACKEND_URL}/api/v1`;

