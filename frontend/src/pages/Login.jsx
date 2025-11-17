import AuthLayout from "../layouts/AuthLayout";
import PageTitle from "../components/layouts/PageTitle";
import LoginForm from "../components/auth/LoginForm";

const Login = () => {
  return (
    <>
        <PageTitle title="Social Media | Login"/>
        <AuthLayout>
            <LoginForm />
        </AuthLayout>
    </>
  )
}

export default Login