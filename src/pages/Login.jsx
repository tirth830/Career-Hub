import Template from "../components/core/Template"
import LoginImg from "../assets/login.png"
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function Login() {
  return (
    <>
    <Header />
    <Template
      title="Welcome Back"
      description1="Job hunting is a journey of perseverance and self-discovery. "
      description2="The right opportunity will come."
      image={LoginImg}
      formType="login"
    />
    <Footer />
    </>
  )
}

export default Login
