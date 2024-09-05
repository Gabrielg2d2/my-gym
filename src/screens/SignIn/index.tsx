import { LoadingPage } from "@components/LoadingPage";
import { useNavigationAuth } from "@routes/useNavigationAuth";
import { useState } from "react";
import { useAuthContext } from "src/context/auth";
import { IData, ISignInTemplateProps, SignInTemplate } from "./template";

export function SignIn() {
  const { navigateSignUp } = useNavigationAuth();
  const { signIn } = useAuthContext();
  const [loading, setLoading] = useState(false);

  async function onSubmit(data: IData) {
    try {
      setLoading(true);
      await signIn(data);
    } finally {
      setLoading(false);
    }
  }

  const props: ISignInTemplateProps = {
    navigateSignUp,
    onSubmit,
  };

  return (
    <>
      <LoadingPage loading={loading} />
      <SignInTemplate {...props} />
    </>
  );
}
