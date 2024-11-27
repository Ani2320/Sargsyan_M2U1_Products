import ProductCard from "./ProductCard";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ref, onValue } from "firebase/database";
import { db } from "../configurations/firebase";

function ProductsList () {
    const [data, setData] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          /*const response = await axios.get('https://fakestoreapi.com/products');*/
          const dbRef = ref(db, `products`);
          onValue(dbRef, (snapshot) => {
            const data = snapshot.val();
            // data contendrá un objeto con todos tus productos
            console.log(Object.values(data));
          setData(Object.values(data));
        });   
  
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);

    return(data &&
      <>
        <h1>Productos</h1>
        <div className="grid-container margin-20">
            {data.map(product =>(
              <Link to={`/products/${product.id}`}>
                <ProductCard 
                    key={(product.id)} 
                    id = {(product.id)}
                    title = {product.name}
                    image = {product.image}
                    sku = {product.sku}
                    description = {product.description}
                    price={product.price}
                />
              </Link>
            ))}
        </div>
      </>
    )
}

export default ProductsList