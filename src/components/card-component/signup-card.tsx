import React, { useState } from "react";
import SecondaryTextFieldComponent from "../textfield-component/secondary-text-field-component";
import RemoveRedEyeRoundedIcon from "@mui/icons-material/RemoveRedEyeRounded";
import VisibilityOffRoundedIcon from "@mui/icons-material/VisibilityOffRounded";
import Button from "../button-component";

const PasswordIcon = ({
  isShow,
  onClick,
}: {
  isShow: boolean;
  onClick: () => void;
}) => {
  return (
    <div onClick={onClick}>
      {isShow ? (
        <VisibilityOffRoundedIcon className="cursor-pointer" />
      ) : (
        <RemoveRedEyeRoundedIcon className="cursor-pointer" />
      )}
    </div>
  );
};

const SignupCard = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);
  return (
    <div className="rounded-xl border border-borderColor p-7 bg-cardBackground w-[100%] max-w-[400px]">
      <SecondaryTextFieldComponent
        containerStyle="w-[100%] mb-6"
        placeholder="Full name"
      />
      <SecondaryTextFieldComponent
        containerStyle="w-[100%] mb-6"
        placeholder="Email"
      />
      <SecondaryTextFieldComponent
        containerStyle="w-[100%] mb-6"
        placeholder="User name"
      />
      <SecondaryTextFieldComponent
        containerStyle="w-[100%] mb-6"
        placeholder="Password"
        type={!showPassword ? "password" : "text"}
        icon={
          <PasswordIcon
            onClick={() => setShowPassword(!showPassword)}
            isShow={showPassword}
          />
        }
      />
      <SecondaryTextFieldComponent
        containerStyle="w-[100%] mb-6"
        placeholder="Confirm Password"
        type={!showConfirmPassword ? "password" : "text"}
        icon={
          <PasswordIcon
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            isShow={showConfirmPassword}
          />
        }
      />
      <Button title="Create an account" onClick={() => {}} />
      <div className="mt-6">
        <span className="text-sm">
          Already have an account?{" "}
          <span className="text-primary cursor-pointer">Sign In</span>
        </span>
      </div>
    </div>
  );
};

export default SignupCard;
