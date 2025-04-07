// import logo from './logo.svg';
import './App.css';
import Header from './component/header';
import Home from './pages/home';
import Contact from './pages/contact';
import Product from './pages/product';
import Womenproduct from './pages/womenproduct';
import Addtocart from './pages/addtocart';
import Quickview from './pages/quickview';
import Invoice from './pages/invoice';
import Demo from './pages/demo';
import Forgotpassword from './pages/forgotpassword';
import Wishlist from './pages/wishlist';
import Luggage from './pages/luggage';
import Giftcombos from './pages/giftcombos';
import Footer from './component/footer';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Orderhistory from './pages/orderhistory';
import Test from './pages/test';
import MultiStepForm from './pages/mutistepform';
import Filterdata from './pages/filterdata';
function App() {
  return (
<>
<Router>
<Header/>
<Routes>
<Route exact path="/" element={<Home/>} />
<Route exact path="/contact" element={<Contact/>} />
<Route exact path="/pro" element={<Product/>} />
<Route exact path="/pro1" element={<Womenproduct/>} />
<Route exact path="/cart" element={<Addtocart/>} />
<Route exact path="/view" element={<Quickview/>} />
<Route exact path="/view/:id" element={<Quickview />}></Route>
<Route exact path="/invoice" element={<Invoice/>} />
<Route exact path="/demo" element={<Demo/>} />
<Route exact path="/forgotpassword" element={<Forgotpassword/>} />
<Route exact path="/wish" element={<Wishlist/>} />
<Route exact path="/lug" element={<Luggage/>} />
<Route exact path="/gift" element={<Giftcombos/>} />
<Route exact path='/orderhistory' element={<Orderhistory/>}/>
<Route exact path='/test' element={<Test/>}/>
<Route exact path='/fiterdata' element={<Filterdata/>}/>
<Route exact path='/multii' element={<MultiStepForm/>}/>
</Routes>
<Footer/> 
</Router>
</>

     );
}

export default App;
