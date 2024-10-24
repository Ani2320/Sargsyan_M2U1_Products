import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import { useState } from "react";
import './styles/body.css'
import './styles/common.css'
import './styles/product.css'

function App() {
  const [screenName, setName] = useState("Inicio de sesión")
  /*const handlerSetName = (currentName) =>{
    setName(currentName);
  }*/
  
  return (
    <>
      <Header screenName = {screenName}/>
      <MainContent setScreenName = {(currentName) => {setName(currentName)}} />
      <Footer />
    </>
  )
}

export default App
