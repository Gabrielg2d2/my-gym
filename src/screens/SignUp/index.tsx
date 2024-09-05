import { LoadingPage } from "@components/LoadingPage";
import { SignUpMain } from "@domain/login/signUp/main";
import { ITypeMessage_GLOBAL } from "@domain/types/typeMessage";
import { useToastCustom } from "@hooks/useToastCustom";
import { useNavigationAuth } from "@routes/useNavigationAuth";
import { useState } from "react";
import { IData, ISignUpTemplateProps, SignUpTemplate } from "./template";

export function SignUp() {
  const { navigateSignIn } = useNavigationAuth();
  const [signUpMain] = useState(new SignUpMain());
  const [loading, setLoading] = useState(false);
  const { toastCustom } = useToastCustom();

  async function signUp(data: IData) {
    try {
      setLoading(true);
      const result = await signUpMain.signUp(
        data.name,
        data.email,
        data.password
      );

      toastCustom(result.message, result.typeMessage);

      if (result.typeMessage === ITypeMessage_GLOBAL.SUCCESS) {
        navigateSignIn();
      }
    } finally {
      setLoading(false);
    }
  }

  const propsTemplate: ISignUpTemplateProps = {
    navigateSignIn,
    signUp,
  };

  return (
    <>
      <LoadingPage loading={loading} />
      <SignUpTemplate {...propsTemplate} />
    </>
  );
}
