export enum AuthStatus {
  checking = 'checking',
  authenticated = 'authenticated',
  unauthenticated = 'unauthenticated',
}

export interface User {
  name: string;
  email: string;
}
