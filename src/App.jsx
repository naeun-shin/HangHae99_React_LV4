import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Main from './pages/Main';
import { CookiesProvider } from 'react-cookie';

const App = () => {
  return (
    <CookiesProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signUp' element={<SignUp />} />
          <Route path='/main' element={<Main />} />
        </Routes>
      </BrowserRouter>
    </CookiesProvider>
  );
};

export default App;
