'use client';
import {
  createContext,
  createRef,
  FC,
  ReactNode,
  useCallback,
  useContext,
  useImperativeHandle,
} from 'react';

import { ACCESS_TOKEN, REFRESH_TOKEN, WORKSPACE_URL } from '@/utils/constants';
import { UserType } from '@/utils/ts/types/user';

import useLocalStorageValue from '../hooks/useLocalStorageValue';

interface AuthState {
  isLoggedIn: boolean;
  user?: UserType;
  logout: () => void;
  setAccessToken: (token: string) => void;
  setRefreshToken: (token: string) => void;
  setWorkspaceUrl: (url: string) => void;
}

const AuthContext = createContext({} as AuthState);
export const useAuthState = () => useContext(AuthContext);

interface Props {
  children?: ReactNode;
}

export const authRef = createRef<
  Pick<AuthState, 'setAccessToken' | 'setRefreshToken' | 'setWorkspaceUrl'> & {
    accessToken: string | null;
    refreshToken: string | null;
    workspaceUrl: string | null;
  }
>();

const AuthProvider: FC<Props> = ({ children }) => {
  const {
    item: accessToken,
    setItem: setAccessToken,
    removeItem: removeAccessToken,
  } = useLocalStorageValue<string>(ACCESS_TOKEN);
  const {
    item: refreshToken,
    setItem: setRefreshToken,
    removeItem: removeRefreshToken,
  } = useLocalStorageValue<string>(REFRESH_TOKEN);
  const {
    item: workspaceUrl,
    setItem: setWorkspaceUrl,
    removeItem: removeWorkspaceUrl,
  } = useLocalStorageValue<string>(WORKSPACE_URL);

  useImperativeHandle(authRef, () => ({
    setAccessToken,
    setRefreshToken,
    setWorkspaceUrl,
    accessToken,
    refreshToken,
    workspaceUrl,
  }));

  // const { data } = useGetMe(!!accessToken);
  const data = undefined;

  const logout = useCallback(() => {
    removeAccessToken();
    removeRefreshToken();
    removeWorkspaceUrl();
  }, [removeAccessToken, removeRefreshToken, removeWorkspaceUrl]);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!accessToken,
        user: data,
        logout,
        setAccessToken,
        setRefreshToken,
        setWorkspaceUrl,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;