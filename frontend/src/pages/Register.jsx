import AuthLayout from '../layouts/AuthLayout'
import PageTitle from '../components/layouts/PageTitle';
import RegisterForm from '../components/auth/RegisterForm';

const Register = () => {
  return (
    <>
        <PageTitle title={"Social Media | Register"}/>
        <AuthLayout>
            <RegisterForm />
        </AuthLayout>
    </>
  )
}

export default Register