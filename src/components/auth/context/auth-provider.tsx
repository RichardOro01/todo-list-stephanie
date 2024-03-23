'use client';

import React from 'react';
import { SessionProvider } from 'next-auth/react';

interface AuthProviderProps {
  children: React.ReactElement;
}
const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => (
  <SessionProvider>{children}</SessionProvider>
);

export default AuthProvider;
