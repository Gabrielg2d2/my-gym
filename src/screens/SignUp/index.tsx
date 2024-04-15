import { SignUpMain } from "@domain/login/ signUp/main";
import { useNavigationAuth } from "@routes/useNavigationAuth";
import { useToast } from "native-base";
import React, { useState } from "react";
import { ISignUpTemplateProps, SignUpTemplate } from "./template";

export function SignUp() {
  const { navigateSignIn } = useNavigationAuth();
  const [loginMain] = useState(new SignUpMain());
  const toast = useToast();

  async function signUp(data: any) {
    const result = await loginMain.signUp(data.name, data.email, data.password);

    if (result.messages.length > 0) {
      result.messages.forEach((message) =>
        toast.show({
          title: message,
          placement: "top",
          duration: 3000,
        })
      );
      navigateSignIn();
    }
    if (result.erros.length > 0) {
      result.erros.forEach((error) =>
        toast.show({
          title: error,
          duration: 5000,
          placement: "top",
          bgColor: "red.500",
        })
      );
    }
  }

  const propsTemplate: ISignUpTemplateProps = {
    navigateSignIn,
    signUp,
  };

  return <SignUpTemplate {...propsTemplate} />;
}
