import { Link } from "react-router-dom";
import AuthLogo from "./AuthLogo";
import Input from "../common/Input";
import Checkbox from "../common/Checkbox";
import Button from "../common/Button";
import AuthDivider from "./AuthDivider";
import SocialButton from "../common/SocialButton";
import AuthFooter from "./AuthFooter";

const RegisterForm = () => {
  return (
    <>
      <div className='overflow-hidden p-3 acc-vh'>
        <div className='row vh-100 w-100 g-0'>
          {/* LEFT */}
          <div className='col-lg-6 vh-100 overflow-y-auto overflow-x-hidden'>
            <div className='col-md-10 mx-auto'>
              <form className='vh-100 d-flex justify-content-between flex-column p-4 pb-0'>
                <AuthLogo />

                <div>
                  <div className='mb-3'>
                    <h3 className='mb-2'>Register</h3>
                    <p className='mb-0'>Create new CRMS account</p>
                  </div>

                  <Input label='Name' type='text' icon='ti ti-user' />

                  <Input label='Email Address' type='email' icon='ti ti-mail' />

                  <Input
                    label='Password'
                    type='password'
                    icon='ti ti-eye-off'
                    isPassword
                  />

                  <Input
                    label='Confirm Password'
                    type='password'
                    icon='ti ti-eye-off'
                    isPassword
                  />

                  <div className='d-flex align-items-center justify-content-between mb-3'>
                    <Checkbox
                      label={
                        <>
                          I agree to the{' '}
                          <a href='#' className='text-primary link-hover'>
                            Terms & Privacy
                          </a>
                        </>
                      }
                    />
                  </div>

                  <Button text='Sign Up' className='w-100' />

                  <p className='mb-3'>
                    Already have an account?
                    <Link to='/' className='link-indigo fw-bold link-hover'>
                      {' '}
                      Sign In Instead
                    </Link>
                  </p>

                  <AuthDivider />

                  <div className='d-flex align-items-center justify-content-center flex-wrap gap-2 mb-3'>
                    <SocialButton provider='facebook' />
                    <SocialButton provider='google' outline />
                    <SocialButton provider='apple' dark />
                  </div>
                </div>

                <AuthFooter />
              </form>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className='col-lg-6 account-bg-02'></div>
        </div>
      </div>
    </>
  )
}

export default RegisterForm
