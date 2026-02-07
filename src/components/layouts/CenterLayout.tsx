import { Outlet } from "react-router-dom";
import Footer from "../sections/footer/Footer";

const CenterLayout = () => {
  return (
    <div className="center-layout">
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default CenterLayout;
