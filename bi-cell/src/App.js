import ForgetPassword from './pages/ForgetPassword';
import Information from './pages/Information';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import { useContext } from "react";
import AppContext from './context/AppContext';

function App() {
  const { isLoading } = useContext(AppContext);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="users/information" element={<Information />} />
        <Route path="users/register" element={<Register />} />
        <Route path="users/forgetpassword" element={<ForgetPassword />} />
      </Routes>
    </div>


  );
}

export default App;
