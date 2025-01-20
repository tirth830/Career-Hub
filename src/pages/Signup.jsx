import signupImg from "../assets/signUp.png"
import Template from "../components/core/Template"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"

function Signup() {
  return (
    <>
    <Header />
    <Template
      title="Network, tailor your resume, apply strategically, and stay positive"
      description1="Build skills for today, tomorrow, and beyond."
      description2="Secure future-proof your career."
      image={signupImg}
      formType="signup"
    />
    <Footer />
    </>
  )
}

export default Signup
