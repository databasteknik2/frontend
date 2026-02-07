import { Outlet } from "react-router-dom";
import AdminHeader from "../sections/header/AdminHeader";
import Footer from "../sections/footer/Footer";

const AdminLayout = () => {
  return (
    <div className="admin-layout">
      <AdminHeader />
      <aside>
        admin menu
      </aside>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
  
};

export default AdminLayout;


