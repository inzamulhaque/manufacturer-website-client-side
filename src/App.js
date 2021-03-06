import Navbar from './Componests/Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Home from './Pages/Home';
import Protfolio from './Pages/Protfolio';
import Footer from './Componests/Shared/Footer';
import SignIn from './Pages/SignIn';
import Login from './Componests/SignIn/Login';
import SignUp from './Componests/SignIn/SignUp';
import ResetPass from './Componests/SignIn/ResetPass';
import Dashboard from './Pages/Dashboard';
import RequirAuth from './Componests/RequireAuth/RequireAuth';
import RequirAdmin from './Componests/RequireAuth/RequirAdmin';
import RequirUser from './Componests/RequireAuth/RequireUser';
import MyProfile from './Componests/Dashboard/MyProfile';
import AddItem from './Componests/Dashboard/AddItem';
import ReadMore from './Componests/Shared/ReadMore';
import BuyNow from './Pages/BuyNow';
import PayNow from './Pages/PayNow';
import AddReview from './Componests/Dashboard/AddReview';
import MyOrder from './Componests/Dashboard/MyOrder';
import ManageOrders from './Componests/Dashboard/ManageOrders';
import ManageItems from './Componests/Dashboard/ManageItems';
import NotFound from './Pages/NotFound';
import AllItems from './Pages/AllItems';
import EditItem from './Componests/Dashboard/EditItem';
import UpdateQty from './Componests/Dashboard/UpdateQty';
import ManageUser from './Componests/Dashboard/ManageUser';
import Blogs from './Pages/Blogs';

// Import styles
import './App.css';
import 'swiper/css';
import "swiper/css/pagination";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="bg-white dark:bg-black min-h-screen flex flex-col justify-between">
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/allitems" element={<AllItems />} />
          <Route path="/portfolio" element={<Protfolio />} />
          <Route path="/signin" element={<SignIn />}>
            <Route index element={<Login />} />
            <Route path="newaccount" element={<SignUp />} />
            <Route path="resetpass" element={<ResetPass />} />
          </Route>
          <Route path="/dashboard" element={<RequirAuth>
            <Dashboard />
          </RequirAuth>}>
            <Route index element={<MyProfile />} />
            <Route path="myorders" element={<RequirUser>
              <MyOrder />
            </RequirUser>} />
            <Route path="addreview" element={<RequirUser>
              <AddReview />
            </RequirUser>} />
            <Route path="additem" element={<RequirAdmin>
              <AddItem />
            </RequirAdmin>} />
            <Route path="manageOrders" element={<RequirAdmin>
              <ManageOrders />
            </RequirAdmin>} />
            <Route path="manageItems" element={<RequirAdmin>
              <ManageItems />
            </RequirAdmin>} />
            <Route path="manageUser" element={<RequirAdmin>
              <ManageUser />
            </RequirAdmin>} />
          </Route>
          <Route path="/edit/:id" element={
            <RequirAuth>
              <RequirAdmin>
                <EditItem />
              </RequirAdmin>
            </RequirAuth>
          } />
          <Route path="/updateQty/:id" element={
            <RequirAuth>
              <RequirAdmin>
                <UpdateQty />
              </RequirAdmin>
            </RequirAuth>
          } />
          <Route path="/readmore/:id" element={<ReadMore />} />
          <Route path="/buynow/:id" element={<RequirAuth>
            <BuyNow />
          </RequirAuth>} />
          <Route path="/paynow/:id" element={<RequirAuth>
            <PayNow />
          </RequirAuth>} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="*" element={<NotFound />} />
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
