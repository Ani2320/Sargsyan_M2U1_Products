import ProductDetail from "./ProductDetail"
import PoductsList from "./PoductsList"
import { useState } from "react";
import Login from "./Login";
import RegisterForm from "./RegisterForm";

function MainContent({setScreenName}) {
  const[user, setUserData] = useState({name : "", surname: "", email : "", pass : ""})
  const [showDetail, setShowDetail] = useState(false);
  const [isUserLoged, setLogedStatus] = useState(false);
  const [isRegisterRequested, setRegisterStatus] = useState(false);
  const [product, setProduct] = useState(null);

  const handleSetShowDetail = (newValue) => {
    setShowDetail(newValue);
  };

  const handleSetProduct = (product) => {
    setProduct(product);
  };

  const handlerLoginStatus = (loginstatus) => {
    setLogedStatus(loginstatus);
  };

  const handlerSetRegisterStatus = (registerStatus) => {
    setRegisterStatus(registerStatus);
  }

  const handelerSetUserData = (user) => {
    setUserData(user);
    console.log(user);
  }

  return (
    <main id = "mainContent">
      {!isUserLoged?
        isRegisterRequested?
          <>
            <RegisterForm 
              setScreenName = {setScreenName} 
              setRegisterStatus = {(registerStatus) => setRegisterStatus(registerStatus)} 
              saveUser = {(user) => setUserData(user)} />
          </>
        :
          <>
            <Login 
              setScreenName = {setScreenName} 
              setLoginStatus = {(loginStatus) => setLogedStatus(loginStatus)} 
              setRegisterStatus = {(registerStatus) => setRegisterStatus(registerStatus)} 
              user = {user} 
            />
          </>
      :
        showDetail?
          <>
            {console.log("se solicita ver detalle")}
            <ProductDetail 
              setScreenName = {setScreenName} 
              product={product} 
              showDetail = {showDetail} 
              setStatusShowDetail = {(newValue) => setShowDetail(newValue)} 
            />
          </> 
        :
          <>
            {console.log("se solicita ver lista")}
            <PoductsList 
              setScreenName = {setScreenName} 
              showDetail = {showDetail} 
              setStatusShowDetail = {(newValue) => setShowDetail(newValue)} 
              setChoosedProduct = {(product) => setProduct(product)} />
          </>
      }
    </main>
  )
}

export default MainContent