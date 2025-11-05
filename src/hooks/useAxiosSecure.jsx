import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router";
import { useEffect } from "react";

const instance = axios.create({
  baseURL: "http://localhost:3000"
});

const useAxiosSecure = () => {
  const { user, signOutUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Request interceptor
    const requestInterceptor = instance.interceptors.request.use((config) => {
      if (user?.accessToken) {
        config.headers.authorization = `Bearer  ${user.accessToken}`;
      }
      return config;
    });

    // Response interceptor
    const responseInterceptor = instance.interceptors.response.use(
      (res) => res,
      (err) => {
        const status = err?.response?.status;

        if (status === 401 || status === 403) {
          console.log("Unauthorized. Logging out user...");

          signOutUser().then(() => {
            navigate("/register");
          });
        }
        return Promise.reject(err);
      }
    );

    // Cleanup interceptors on unmount
    return () => {
      instance.interceptors.request.eject(requestInterceptor);
      instance.interceptors.response.eject(responseInterceptor);
    };
  }, [user, navigate, signOutUser]);

  return instance;
};

export default useAxiosSecure;
