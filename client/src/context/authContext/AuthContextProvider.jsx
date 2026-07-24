import React,{useState,useEffect} from "react";
import AuthContext from "./authContext.js";

import { loginAdmin, getCurrentAdmin, logoutAdmin } from "../../services/auth.api";


const AuthContextProvider = ({ children }) => {

    const [admin, setAdmin] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const checkAuth = async () => {
        try {
            const response = await getCurrentAdmin();

            setAdmin(response?.data?.admin || null);
        } catch (error) {
            setAdmin(null);
        } finally {
            setLoading(false);
        }
        };

    checkAuth();
    }, []);

  const login = async (
    email,
    password
  ) => {
    try {
      setLoading(true);

      setError("");

      const response =
        await loginAdmin({
          email,
          password,
        });

      const loggedInAdmin =
        response?.data?.admin;   

      setAdmin(loggedInAdmin);

      return loggedInAdmin;
    } catch (error) {
      const message =
        error?.response?.data?.message ||
        "Login failed";
       

      setError(message);
      setAdmin(null);

      throw error;
    } finally {
     
      setLoading(false);
    }
  };

  const logout = async () => {
  try {
    await logoutAdmin();
  } catch (error) {
    console.error(
      "Logout API failed:",
      error
    );
  } finally {

    setAdmin(null);
  }
};

    const value = {
    admin,
    loading,
    error,
    isAuthenticated: Boolean(admin),
    login,
    logout,
  };


return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
)
}

export default AuthContextProvider