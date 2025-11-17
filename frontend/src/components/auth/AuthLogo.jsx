import Logo from "../../assets/img/logo.svg"; 

const AuthLogo = () => {
  return (
    <>
      <div className='text-center mb-4 auth-logo'>
        <img src={Logo} className='img-fluid' alt='Logo' />
      </div>
    </>
  )
}

export default AuthLogo
