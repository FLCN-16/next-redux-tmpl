import type { AppProps } from 'next/app';
import React from 'react';

// Redux
import { useDispatch } from 'react-redux';
import { wrapper } from '../redux';
import { initialize } from '../redux/app/action';

import '../styles/globals.css';

interface AppProviderProps {
  children: React.ReactNode;
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(initialize());
  }, [dispatch]);

  return <React.Fragment>{children}</React.Fragment>;
};

const AppProviderComponent = wrapper.withRedux(AppProvider);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProviderComponent>
      <Component {...pageProps} />
    </AppProviderComponent>
  );
}

export default MyApp;
