import './App.css';
import Navbar from './Componests/Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";
import Footer from './Componests/Shared/Footer';
import SignIn from './Pages/SignIn';
import Login from './Componests/SignIn/Login';

function App() {
  return (
    <div className="bg-white dark:bg-black min-h-screen flex flex-col justify-between">
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />}>
            <Route index element={<Login />} />
          </Route>
        </Routes>
      </div>
      <div>
        {/* footer */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
