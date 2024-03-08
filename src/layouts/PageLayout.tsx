import { SideBar } from "./SideBar";
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";
import { PageBody } from "./PageBody";
export const PageLayout = ({ children }: { children: JSX.Element }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <SideBar />
      <PageBody>{children}</PageBody>
      <Footer />
    </div>
  );
};
