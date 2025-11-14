import {Outlet} from 'react-router-dom';
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
// import Footer from "../components/Footer";

import "../assets/css/bootstrap.min.css";
import "../assets/plugins/tabler-icons/tabler-icons.min.css";
import "../assets/plugins/simplebar/simplebar.min.css";
import "../assets/plugins/datatables/css/dataTables.bootstrap5.min.css";
import "../assets/plugins/daterangepicker/daterangepicker.css";
import "../assets/css/style.css";


const MainLayout = () => {
  return (
    <>
        <div className="main-wrapper">
            <Navbar />
            <Sidebar />
            <Outlet />
        </div>    
    </>
  )
}

export default MainLayout