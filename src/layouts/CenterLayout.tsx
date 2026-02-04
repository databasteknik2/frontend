import { Outlet } from "react-router-dom";

const CenterLayout = () => {
  return (
    <div className="center-layout">
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default CenterLayout;
