import { createContext } from 'react';
import { AuthStatus, type User } from './auth.types';

export interface AuthContextProps {
  status: AuthStatus;
  user?: User;
  isChecking: boolean;
  isAuthenticated: boolean;
  loginWithEmailPassword: (email: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);
