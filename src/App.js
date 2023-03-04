import './App.css'
import Header from './components/Header';
import Home from './components/Home';
import Jobs from './components/Jobs';
import TermsOf from './components/TermsOf';
import PrivacyPol from './components/PrivacyPol';
import Contact from './components/Contact';
import Faq from './components/Faq';
import {createBrowserRouter, createRoutesFromElements, Routes, Route, Outlet, RouterProvider, Link} from 'react-router-dom';
import Footer from './components/Footer';
import Getboosting from './components/Getboosting';
import { createContext, useState  } from 'react';

function App() {
  const router = 
    createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root />}>
      <Route index element={<Home />}/>
      <Route path='/TermsOfService' element={<TermsOf />}/>
      <Route path='/PrivacyPolicy' element={<PrivacyPol />}/>
      <Route path='/Contact' element={<Contact />}/>
      <Route path='/Faq' element={<Faq />}/>
      <Route path='/Boosting' element={<Getboosting />}/>
      <Route path='/Jobs' element={<Jobs />}/>
      </Route>
    )
  )
  return (
    <>

    <RouterProvider router={router}/>
    </>
  );

}


const Root = () => {
    let pricFinal = 14;
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>      
    </>

  )
}
export default App;
