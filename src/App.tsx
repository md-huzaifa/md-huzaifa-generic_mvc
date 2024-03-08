import "./App.css";

import { BrowserRouter } from "react-router-dom";
import { Routes } from "@/routes";
import { AuthProvider } from "@/context/AuthContext";
import { SideBarProvider } from "@/context/SidebarContext";
function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <SideBarProvider>
          <Routes />
        </SideBarProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
