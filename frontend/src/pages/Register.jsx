import AuthLayout from '../layouts/AuthLayout'
import Facebook from "../assets/img/icons/facebook-logo.svg";
import Logo from "../assets/img/logo.svg";
import Google  from "../assets/img/icons/google-logo.svg";
import Apple  from "../assets/img/icons/apple-logo.svg";
import {Link} from "react-router-dom";
import PageTitle from '../components/PageTitle';

const Register = () => {
  return (
    <>
        <PageTitle title={"Social Media | Register"}/>
        <AuthLayout>
            <div className="overflow-hidden p-3 acc-vh">
                
                {/* start row  */}
                <div className="row vh-100 w-100 g-0"> 

                    <div className="col-lg-6 vh-100  overflow-y-auto overflow-x-hidden">

                        {/* start row  */}
                        <div className="row">

                            <div className="col-md-10 mx-auto">
                                <form action="#" className=" vh-100 d-flex justify-content-between flex-column p-4 pb-0">
                                    <div className="text-center mb-3 auth-logo">
                                        <img src={Logo} className="img-fluid" alt="Logo"/>
                                    </div>
                                    <div>
                                        <div className="mb-3">
                                            <h3 className="mb-2">Register</h3>
                                            <p className="mb-0">Create new CRMS account</p>
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Name</label>
                                            <div className="input-group input-group-flat">
                                                <input type="text" className="form-control"/>
                                                <span className="input-group-text">
                                                    <i className="ti ti-user"></i>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Email Address</label>
                                            <div className="input-group input-group-flat">
                                                <input type="email" className="form-control"/>
                                                <span className="input-group-text">
                                                    <i className="ti ti-mail"></i>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Password</label>
                                            <div className="input-group input-group-flat pass-group">
                                                <input type="password" className="form-control pass-input"/>
                                                <span className="input-group-text toggle-password ">
                                                    <i className="ti ti-eye-off"></i>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Confirm Password</label>
                                            <div className="input-group input-group-flat pass-group">
                                                <input type="password" className="form-control pass-input"/>
                                                <span className="input-group-text toggle-password ">
                                                    <i className="ti ti-eye-off"></i>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between mb-3">
                                            <div className="form-check form-check-md d-flex align-items-center">
                                                <input className="form-check-input mt-0" type="checkbox" value="" id="checkebox-md" checked=""/>
                                                <label className="form-check-label ms-1" for="checkebox-md">I agree to the <a href="javascript:void(0);" className="text-primary link-hover">Terms & Privacy</a>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <button type="submit" className="btn btn-primary w-100">Sign Up</button>
                                        </div>
                                        <div className="mb-3">
                                            <p className="mb-0">Already have an account? <Link to="/login" className="link-indigo fw-bold link-hover"> Sign In Instead</Link></p>
                                        </div>
                                        <div className="or-login text-center position-relative mb-3">
                                            <h6 className="fs-14 mb-0 position-relative text-body">OR</h6>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-center flex-wrap gap-2 mb-3">
                                            <div className="text-center flex-fill">
                                                <a href="javascript:void(0);" className="p-2 btn btn-info d-flex align-items-center justify-content-center">
                                                    <img className="img-fluid m-1" src={Facebook} alt="Facebook"/>
                                                </a>
                                            </div>
                                            <div className="text-center flex-fill">
                                                <a href="javascript:void(0);" className="p-2 btn btn-outline-light d-flex align-items-center justify-content-center">
                                                    <img className="img-fluid  m-1" src={Google} alt="Google"/>
                                                </a>
                                            </div>
                                            <div className="text-center flex-fill">
                                                <a href="javascript:void(0);" className="p-2 btn btn-dark d-flex align-items-center justify-content-center">
                                                    <img className="img-fluid  m-1" src={Apple} alt="Apple"/>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-center pb-4">
                                        <p className="text-dark mb-0">Copyright &copy; <script type="d05226c98bbb1c552e3d6201-text/javascript">document.write(new Date().getFullYear())</script> - CRMS</p>
                                    </div>
                                </form>
                            </div>  {/* end col  */}

                        </div>
                        {/* end row  */}

                    </div>  {/* end col  */}

                    <div className="col-lg-6 account-bg-02"></div>  {/* end col  */}

                </div>
                {/* end row  */}

            </div>
        </AuthLayout>
    </>
  )
}

export default Register