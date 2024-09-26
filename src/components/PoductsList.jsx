import axios from "axios"
import ProductCard from "./ProductCard";
import { useState, useEffect } from "react";

function PoductsList ({showDetail, setShowDetail, setProduct}) {
    const [data, setData] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('https://fakestoreapi.com/products');
          setData(response.data);   
  
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);

    return(data &&
        <div>
            {data.map(product =>(
                <ProductCard 
                    key={product.id} 
                    id = {product.id}
                    title = {product.title}
                    image = {product.image}
                    price = {product.price}
                    description = {product.description}
                    category = {product.category}
                    showDetail = {showDetail}
                    setShowDetail = {setShowDetail}
                    setProduct = {setProduct}
                />
            ))}
        </div>
    )
}

export default PoductsList