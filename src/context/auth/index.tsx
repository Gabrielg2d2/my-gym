import { createContext, ReactNode, useContext, useState } from "react";

type AuthType = {
  children: ReactNode;
};

type AuthContextType = {
  loading: boolean;
  setLoading: (loading: boolean) => void;
};

type IUser = {
  id: string;
  name: string;
  email: string;
  avatar: string;
  isAuthenticated: boolean;
};

const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: AuthType) {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<IUser | null>(null);

  return (
    <AuthContext.Provider value={{ loading, setLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}
