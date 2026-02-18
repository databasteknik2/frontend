import { Outlet } from "react-router-dom";
import AdminHeader from "../sections/header/AdminHeader";
import Sidebar from "../sections/sidebar/Sidebar";

const AdminLayout = () => {
  return (
    <div className="admin-layout">
      <AdminHeader />
      <Sidebar/>
      <main>
        <Outlet />
      </main>
    </div>
  )
  
};

export default AdminLayout;


