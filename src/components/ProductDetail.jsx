import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ref, onValue } from "firebase/database";
import { db } from "../configurations/firebase";

function ProductDetail() {
    const { productId } = useParams();
    const [showMessage, setShowMessage] = useState(false);
    const [product, setProduct] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          /*Commented for using own database from firebase realtime database
          const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
          setProduct(response.data); */
          const dbRef = ref(db, `products/${productId}`);
          onValue(dbRef, (snapshot) => {
            const data = snapshot.val();
            console.log(data);
            setProduct(data)
          });
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);

  return (
    <>
        <div className="fr mt-40">
            <Link to={"/products" }>
                <div className="btn btn-close flex ai-c ta-c mr-10"><span className="p-5">{"< "}Volver</span></div>
            </Link>
        </div>
        <div className = "flex mt-40" >
            <div className = "prd-img-sec ta-c margin-20">
                <img src={product.image} alt="vite logo" height={300} width={300} />
            </div>
            <div className = "mt-40 rgap-15 ml-100" >
                <div className = "bold">{product.name}</div>
                <div className = "bold">${product.price}</div>
                <div>
                    <div>Descripción</div>
                    <div className = "bold">{product.description}</div>
                </div>
                <div>
                    <div>SKU</div>
                    <div className = "bold">{product.sku}</div>
                </div>
            </div>    
        </div>
        
         
        {showMessage? 
            <p className="mb-70 ml-10">Gracias por su compra</p>
            :
            <div className="mb-70">
                <button className="btn btn-confirm buy" onClick={() => {setShowMessage(!showMessage)}}>Comprar</button>
            </div>
        }
    </>
  )
}

export default ProductDetail