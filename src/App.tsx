import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Login } from './pages/Login';
import { AuthProvider } from './contexts/AuthContext';
import { Feed } from './pages/Feed';
import { AuthLayout } from './layouts/AuthLayout';

const App = () => (
  <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/" element={<Login />} />
        </Route>

        <Route element={<AuthLayout isProtected />}>
          <Route path="/feed" element={<Feed />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </AuthProvider>
);

export default App;
