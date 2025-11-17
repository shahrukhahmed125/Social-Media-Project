import Input from "../common/Input";
import Button from "../common/Button";
import Checkbox from "../common/Checkbox";
import AuthLogo from "./AuthLogo";
import AuthDivider from "./AuthDivider";
import SocialButton from "../common/SocialButton";
import AuthFooter from "./AuthFooter";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <>
      <div className='overflow-hidden p-3 acc-vh'>
        <div className='row vh-100 w-100 g-0'>
          {/* Left */}
          <div className='col-lg-6 vh-100 overflow-y-auto overflow-x-hidden'>
            <div className='col-md-10 mx-auto'>
              <form className='vh-100 d-flex justify-content-between flex-column p-4 pb-0'>
                <AuthLogo />

                <div>
                  <div className='mb-3'>
                    <h3 className='mb-2'>Sign In</h3>
                    <p className='mb-0'>
                      Access the CRMS panel using your email and passcode.
                    </p>
                  </div>

                  <Input label='Email Address' type='email' icon='ti ti-mail' />

                  <Input
                    label='Password'
                    type='password'
                    icon='ti ti-eye-off'
                    isPassword
                  />

                  <div className='d-flex align-items-center justify-content-between mb-3'>
                    <Checkbox label='Remember Me' />

                    <Link
                      to='/forgot-password'
                      className='link-danger fw-medium link-hover'
                    >
                      Forgot Password?
                    </Link>
                  </div>

                  <Button text='Sign In' className='w-100' />

                  <p className='mb-3'>
                    New on our platform?
                    <Link
                      to='/register'
                      className='link-indigo fw-bold link-hover'
                    >
                      {' '}
                      Create an account
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

          {/* Right Image */}
          <div className='col-lg-6 account-bg-01'></div>
        </div>
      </div>
    </>
  )
}

export default LoginForm
