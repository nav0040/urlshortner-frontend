import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import { Toaster } from 'react-hot-toast';
import Home from './Pages/Home';
import PrivateRoute from './routes/PrivateRoutes';

function App() {
  return (
    <div className="">
        <Toaster />

        <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/' element={<PrivateRoute element={Home} />} />
     


      </Routes>
    </div>
  );
}

export default App;
