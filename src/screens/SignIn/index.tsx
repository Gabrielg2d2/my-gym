import { useNavigationAuth } from "@routes/useNavigationAuth";
import React from "react";
import { ISignInTemplateProps, SignInTemplate } from "./template";

export function SignIn() {
  const { navigateSignUp } = useNavigationAuth();

  const props: ISignInTemplateProps = {
    navigateSignUp,
  };

  return <SignInTemplate {...props} />;
}
