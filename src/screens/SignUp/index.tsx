import { SignUpMain } from "@domain/login/main";
import { useNavigationAuth } from "@routes/useNavigationAuth";
import React, { useState } from "react";
import { ISignUpTemplateProps, SignUpTemplate } from "./template";

export function SignUp() {
  const { navigateSignIn } = useNavigationAuth();
  const [loginMain] = useState(new SignUpMain());

  async function signUp(data: any) {
    console.log("login_data: ", JSON.stringify(data));
    await loginMain.signUp(data.name, data.email, data.password);
  }

  const propsTemplate: ISignUpTemplateProps = {
    navigateSignIn,
    signUp,
  };

  return <SignUpTemplate {...propsTemplate} />;
}
