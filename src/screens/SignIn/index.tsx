import { SignIDomain } from "@domain/login/signIn/main";
import { useNavigationAuth } from "@routes/useNavigationAuth";
import { useState } from "react";
import { IData, ISignInTemplateProps, SignInTemplate } from "./template";

export function SignIn() {
  const { navigateSignUp } = useNavigationAuth();
  const [signIDomain] = useState(new SignIDomain());

  async function onSubmit(data: IData) {
    const result = await signIDomain.signIn(data.email, data.password);
    console.log("result: ", JSON.stringify(result));
  }

  const props: ISignInTemplateProps = {
    navigateSignUp,
    onSubmit,
  };

  return <SignInTemplate {...props} />;
}
