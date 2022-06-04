import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Splash } from './pages/Splash';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Splash />} />
      {/* <Route path="/login" element={<Login />} /> */}
      {/* <Route path="/feed" element={<Feed />} /> */}
    </Routes>
  </BrowserRouter>
);

export default App;
