import Header from './components/Header'
import Footer from './components/Footer'
import { useState } from "react";
import './styles/body.css'
import './styles/common.css'
import './styles/product.css'
import { Outlet } from 'react-router-dom';

function Root() {
  return (
        <>
          <Header />
          <Outlet />
          <Footer />
        </>
  )
}

export default Root
