import ButtonWithIcon from "@/components/button-component/button-icon";
import SignupCard from "@/components/card-component/signup-card";
import Footer from "@/components/footer-component";
import Header from "@/components/header-component";
import React from "react";
import GoogleIcon from "@mui/icons-material/Google";
const SignupPage = () => {
  return (
    <React.Fragment>
      <Header>
        <div>
          <div className="flex flex-col justify-center items-center pb-12">
            <h1 className={`section-title gradient-text my-12`}>Register</h1>
            <SignupCard />
            <div className="flex items-center justify-center w-[100%] my-7">
              <div className="h-[1px] w-[3rem] bg-borderColor" />
              <span className="px-4">Or, sign up with your email</span>
              <div className="h-[1px] w-[3rem] bg-borderColor" />
            </div>
            <ButtonWithIcon
              icon={<GoogleIcon fontSize="small" />}
              title="Sign up with Google"
              containerStyle={"text-center text-sm w-[100%] max-w-[400px]"}
            />
          </div>
          <Footer />
        </div>
      </Header>
    </React.Fragment>
  );
};

export default SignupPage;
