import { Outlet } from "react-router-dom";
import Navbar from "../utilities/Navbar";

const RootLayout = () => {
  return (
    <div className="relative w-full h-full  p-0 m-0">
      <Outlet />
      {/* <Navbar /> */}
    </div>
  );
};

export default RootLayout;
