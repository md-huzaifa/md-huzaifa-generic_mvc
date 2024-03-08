import { Route, Routes as Switch } from "react-router-dom";
import { Login, Dashboard, UserList } from "@/pages";
import { PrivateWrapper } from "./PrivateWrapper";

export const Routes: React.FC = () => {
  return (
    <Switch>
      <Route
        path="/"
        element={
          <PrivateWrapper>
            <Dashboard />
          </PrivateWrapper>
        }
      />
      <Route
        path="/dashboard"
        element={
          <PrivateWrapper>
            <Dashboard />
          </PrivateWrapper>
        }
      />
      <Route
        path="/userlist"
        element={
          <PrivateWrapper>
            <UserList />
          </PrivateWrapper>
        }
      />
      <Route path="/login" element={<Login />} />
    </Switch>
  );
};
