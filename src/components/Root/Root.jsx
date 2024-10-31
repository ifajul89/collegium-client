import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import { Toaster } from 'react-hot-toast';

const Root = () => {
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
