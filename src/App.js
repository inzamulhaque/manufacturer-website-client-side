import './App.css';
import Navbar from './Componests/Shared/Navbar';

// Import Swiper styles
import 'swiper/css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';

function App() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <div>
        {/* footer */}
      </div>
    </div>
  );
}

export default App;
