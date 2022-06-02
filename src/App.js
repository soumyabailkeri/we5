import logo from './logo.svg';
import './App.css';
// import  App  from './App';

// import Navbar from './components/Navbar';
import Home from './components/Home';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import Categories from './components/Categories';
import CategoriesMain from './components/CategoriesMain';
import Login from './components/Login';
import Register from './components/Register';
import Payments from './components/Payments';
import Cart from './components/Cart';
import { FaShoppingCart } from "react-icons/fa";
import Products from './components/Products';
import  We_home from './components/We_home';
import  We_about from './components/We_about';
import  We_contact from './components/We_contact';
import  We_services from './components/We_services';
// import We_dashboard from './components/We_dashboard';

// import We_footer from './components/We_footer';
import {Routes ,Route} from 'react-router-dom';



function App() {
  return (
  <>
  {/* <Navbar/> */}
  <Routes>
  <Route path='/' element={<Home />} />
  <Route path='/home' element={<Home />} />
  <Route path='/carousel' element={<Carousel />} />
  <Route path='/categories' element={<Categories/>} />
  <Route path='/categoriesMain' element={<CategoriesMain/>}/>        
  <Route path='/login' element={<Login/>}/>  
  <Route path='/register' element={<Register/>}/>  


  <Route path='/register' element={<Register/>}/> 
  <Route path='/payments' element={<Payments/>}/> 
  <Route path='/cart' element={<Cart/>}/> 
  <Route path='/products' element={<Products/>}/> 
  <Route path='/we_home' element={<We_home/>}/> 
  <Route path='/we_about' element={<We_about/>}/> 
  <Route path='/we_services' element={<We_services/>}/> 
  <Route path='/we_contact' element={<We_contact/>}/> 
  {/* <Route path='/dashboard' element={<We_dashboard />} /> */}







  



  </Routes>
  {/* <Footer/> */}
  </> 

  
  );
}

export default App;



//import logo from './logo.svg';
// import './App.css';
// import We_navbar from './components/We_navbar';
// import We_home from './components/We_home';
// import We_about from './components/We_about';
// import We_services from './components/We_services';
// import We_contact from './components/We_contact';
// import Login from './components/Login';
// import Register from './components/Register';
// import We_dashboard from './components/We_dashboard';
// import We_footer from './components/We_footer';
// import {Routes ,Route} from 'react-router-dom';


// function App() {
//   return (
//     <>
//     <Navbar/>
//      <Routes>
//       <Route path='/' element={<We_home />} />
//       <Route path='/about' element={<We_about />} />
//       <Route path='/services' element={<We_services />} />
//       <Route path='/contact' element={<We_contact />} /> 
//       {/* <Route path='/login' element={<Login />} />  */}
//       {/* <Route path='/register' element={<Register />} />    */}
//       <Route path='/dashboard' element={<We_dashboard />} />


//      </Routes>
//    <Footer/>
//     </>
//   );
// }

// export default App;
