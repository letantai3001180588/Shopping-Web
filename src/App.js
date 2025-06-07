import './App.css';
import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from 'react';
import Login from './page/login';
import Register from './page/register';
import Header from './component/Nav';
import Profile from './page/profile';

const Home = lazy(() =>{
  return new Promise(resolve => {
    setTimeout(() => resolve(import('./page/home')), 1000);
  });
});
const Checkout = lazy(() =>import('./page/checkout'));
const Admin = lazy(() =>import('./page/admin'));

const SkeletonHome=({value})=>{
  return(
    <>
      <Header/>
      <div className="text-center" style={{marginTop:300}}>
          <div className="spinner-border" role="status"></div>
      </div>
      <div className='text-center'>
        <span className="mt-5">Page {value} is Loading ...</span>
      </div>
    </>
  )
}

function App() {
  return (
    <>
      <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/" exact element={
            <Suspense fallback={<SkeletonHome value='Home'/>}>
              <Home/>
            </Suspense>
          }/>
          <Route path="/checkout" element={
            <Suspense fallback={<SkeletonHome value='Checkout'/>}>
              <Checkout/>
            </Suspense>
          }/>
          <Route path="/admin" element={
            <Suspense fallback={<SkeletonHome value='Admin'/>}>
              <Admin/>
            </Suspense>
          }/>
          {/* <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound}/> */}
      </Routes>

    
    </>
  );
}

export default App;
