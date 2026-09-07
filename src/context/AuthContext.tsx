import { useContext, useEffect, useState, type PropsWithChildren } from 'react';
import { AuthStatus, type AuthStatus as AuthStatusType, type User } from './auth.types';
import { AuthContext } from './auth.context';

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [status, setStatus] = useState<AuthStatusType>(AuthStatus.checking);
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const timer = setTimeout(() => {
      setStatus(AuthStatus.unauthenticated);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const loginWithEmailPassword = (email: string) => {
    setUser({
      name: 'Fernando Herrera',
      email: email,
    });
    setStatus(AuthStatus.authenticated);
  };

  const logout = () => {
    setUser(undefined);
    setStatus(AuthStatus.unauthenticated);
  };

  return (
    <AuthContext.Provider
      value={{
        status: status,
        user: user,

        // Getter
        isChecking: status === AuthStatus.checking,
        isAuthenticated: status === AuthStatus.authenticated,

        // Method
        loginWithEmailPassword,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthContext must be used within an AuthProvider');
  }
  return context;
};
