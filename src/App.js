import './App.css';
import Navbar from './Componests/Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Home from './Pages/Home';
import Footer from './Componests/Shared/Footer';
import SignIn from './Pages/SignIn';
import Login from './Componests/SignIn/Login';
import SignUp from './Componests/SignIn/SignUp';

// Import styles
import 'swiper/css';
import "swiper/css/pagination";
import 'react-toastify/dist/ReactToastify.css';
import ResetPass from './Componests/SignIn/ResetPass';
import Dashboard from './Pages/Dashboard';
import RequirAuth from './Componests/RequireAuth/RequireAuth';
import MyProfile from './Componests/Dashboard/MyProfile';

function App() {
  return (
    <div className="bg-white dark:bg-black min-h-screen flex flex-col justify-between">
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />}>
            <Route index element={<Login />} />
            <Route path="newaccount" element={<SignUp />} />
            <Route path="resetpass" element={<ResetPass />} />
          </Route>
          <Route path="/dashboard" element={<RequirAuth>
            <Dashboard />
          </RequirAuth>}>
            <Route index element={<MyProfile />} />
          </Route>
        </Routes>
      </div>
      <ToastContainer />
      <div>
        {/* footer */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
