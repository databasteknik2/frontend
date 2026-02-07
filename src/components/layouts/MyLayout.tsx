import { Outlet } from "react-router-dom";
import Header from "../sections/header/Header";
import Footer from "../sections/footer/Footer";

const MyLayout = () => {
  return (
    <div className="my-layout">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MyLayout;
