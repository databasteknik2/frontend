import { Outlet } from "react-router-dom";
import Header from "../sections/header/Header";
import Footer from "../sections/footer/Footer";

const AppLayout = () => {
  return (
    <div className="app-layout">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
