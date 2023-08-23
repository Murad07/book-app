import { Outlet } from "react-router-dom";
import Navbar from "../components/ui/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-2">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
