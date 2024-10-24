import { useState } from "react";

function ProductDetail({product, showDetail, setStatusShowDetail, setScreenName}) {
    const [showMessage, setShowMessage] = useState(false);

  return (
    <>
        <div className="ta-r mt-40">
            <button className="btn btn-close" onClick={()=>{setStatusShowDetail(!showDetail); setScreenName("Productos")}}>Cerrar X</button>
        </div>
        <div className = "flex">
            <div className = "prd-img-sec ta-c margin-20">
                <img src={product.image} alt="vite logo" height={300} width={300} />
            </div>
            <div className = "mt-40 rgap-15">
                <div className = "bold">{product.title}</div>
                <div className = "bold">${product.price}</div>
                <div>
                    <div>Descripción</div>
                    <div className = "bold">{product.description}</div>
                </div>
                <div>
                    <div>Categoría</div>
                    <div className = "bold">{product.category}</div>
                </div>
            </div>    
        </div>
        
         
        {showMessage? 
            <p>Gracias por su compra</p>
            :
            <div>
                <button className="btn btn-confirm buy" onClick={() => {setShowMessage(!showMessage)}}>Comprar</button>
            </div>
        }
    </>
  )
}

export default ProductDetail