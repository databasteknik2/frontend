import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const AppLayout = () => {
  return (
    <div className="app-layout">
      <Header />

      <main>
        <Outlet />
      </main>

      <footer> &copy; nackademin-2026</footer>
    </div>
  );
};

export default AppLayout;
