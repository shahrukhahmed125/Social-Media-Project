import "../assets/css/bootstrap.min.css";
import "../assets/plugins/tabler-icons/tabler-icons.min.css";
import "../assets/plugins/simplebar/simplebar.min.css";
import "../assets/plugins/datatables/css/dataTables.bootstrap5.min.css";
import "../assets/plugins/daterangepicker/daterangepicker.css";
import "../assets/css/style.css";

const AuthLayout = ({children}) => {
  return (
    <>
    <div className="account-page bg-white">
        <div className="main-wrapper">
            {children}
        </div>
    </div>
    </>
  )
}

export default AuthLayout