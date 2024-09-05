import { useNavigationAuth } from "@routes/useNavigationAuth";
import { useAuthContext } from "src/context/auth";
import { IData, ISignInTemplateProps, SignInTemplate } from "./template";

export function SignIn() {
  const { navigateSignUp } = useNavigationAuth();
  const { signIn } = useAuthContext();

  async function onSubmit(data: IData) {
    await signIn(data);
  }

  const props: ISignInTemplateProps = {
    navigateSignUp,
    onSubmit,
  };

  return <SignInTemplate {...props} />;
}
