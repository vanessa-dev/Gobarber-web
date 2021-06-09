import React from 'react';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import GlobalStyle from './styles/global';
import Toast from './components/Toast';
import { AuthProvider } from './hooks/AuthContext';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <SignIn />
    </AuthProvider>
    <Toast />
    <GlobalStyle />
  </>
);
export default App;
