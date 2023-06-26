import SignInForm from "../components/SignIn";
import SHLogo from "../images/SH_logo.png";

const SignIn = () => {
  return (
    <div className="flex flex-col justify-start pt-48 items-center w-full h-screen">
      <img className="w-64 mb-6" src={SHLogo} alt="SimpleHealth Logo" />
      <div>Some text about SH Medical Records</div>
      <SignInForm />
    </div>
  );
};

export default SignIn;
