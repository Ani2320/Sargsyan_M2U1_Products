import ProductDetail from "./ProductDetail"
import PoductsList from "./PoductsList"
import { useState } from "react";

function MainContent() {
  const [showDetail, setShowDetail] = useState(false);
  const [product, setProduct] = useState(null);

  const handleSetShowDetail = (newValue) => {
    setShowDetail(newValue);
  };
  const handleSetProduct = (product) => {
    setProduct(product);
  }
  return (
    <main id = "mainContent">
      {showDetail?
      <>
        {console.log("se solicita ver detalle")}
        <ProductDetail product={product} showDetail = {showDetail} setShowDetail = {setShowDetail} />
      </> :
      <>
        {console.log("se solicita ver lista")}
        <PoductsList showDetail = {showDetail} setShowDetail = {handleSetShowDetail} setProduct = {handleSetProduct} />
      </>
        }
    </main>
  )
}

export default MainContent