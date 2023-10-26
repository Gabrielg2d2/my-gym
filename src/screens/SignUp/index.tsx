import { useNavigationAuth } from "@routes/useNavigationAuth";
import React from "react";
import { ISignUpTemplateProps, SignUpTemplate } from "./template";

export function SignUp() {
  const { navigateSignIn } = useNavigationAuth();

  const props: ISignUpTemplateProps = {
    navigateSignIn,
  };

  return <SignUpTemplate navigateSignIn={navigateSignIn} />;
}
