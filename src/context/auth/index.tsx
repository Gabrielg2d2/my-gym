import { IDataSignIn, SignIDomain } from "@domain/login/signIn/main";
import { ITypeMessage_GLOBAL } from "@domain/types/typeMessage";
import { useToastCustom } from "@hooks/useToastCustom";
import { createContext, ReactNode, useContext, useState } from "react";

type IData = {
  email: string;
  password: string;
};

type AuthType = {
  children: ReactNode;
};

type AuthContextType = {
  signIn: (data: IData) => Promise<void>;
  getUserData: () => IDataUser;
};

type IDataUser = IDataSignIn | null;

const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: AuthType) {
  const [signIDomain] = useState(new SignIDomain());
  const { toastCustom } = useToastCustom();
  const [userData, setUserData] = useState<IDataUser>(null);

  async function signIn(data: IData) {
    const result = await signIDomain.signIn(data.email, data.password);

    if (result.typeMessage !== ITypeMessage_GLOBAL.SUCCESS) {
      return setUserData(null);
    }

    setUserData(result.data);

    toastCustom(result.message, result.typeMessage);
  }

  function getUserData() {
    return userData;
  }

  return (
    <AuthContext.Provider value={{ signIn, getUserData }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}
