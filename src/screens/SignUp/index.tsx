import { SignUpMain } from "@domain/login/ signUp/main";
import { useToastCustom } from "@hooks/useToastCustom";
import { useNavigationAuth } from "@routes/useNavigationAuth";
import React, { useState } from "react";
import { IData, ISignUpTemplateProps, SignUpTemplate } from "./template";

export function SignUp() {
  const { navigateSignIn } = useNavigationAuth();
  const [signUpMain] = useState(new SignUpMain());
  const { toastCustom } = useToastCustom();

  async function signUp(data: IData) {
    const result = await signUpMain.signUp(
      data.name,
      data.email,
      data.password
    );

    toastCustom(result.message, result.typeMessage);

    if (result.typeMessage === "success") {
      navigateSignIn();
    }
  }

  const propsTemplate: ISignUpTemplateProps = {
    navigateSignIn,
    signUp,
  };

  return <SignUpTemplate {...propsTemplate} />;
}
