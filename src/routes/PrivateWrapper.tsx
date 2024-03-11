import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const PrivateWrapper = ({ children }: { children: JSX.Element }) => {
  const navigate = useNavigate();
  const isAuthenticated = window.localStorage.getItem("token") !== null;
  useEffect(() => {
    if (!isAuthenticated) {
      console.log("Authenticated");
      navigate("/login");
    }
  }, [isAuthenticated]);

  return <>{children}</>;
};
