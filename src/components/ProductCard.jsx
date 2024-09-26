import MainContent from "./MainContent"

function ProductCard({id, title, image, price, description, category, showDetail, setShowDetail, setProduct}) {
  console.log(image)
  function ViewProductDetail(){
    const product = {
      id : "",
      title : "",
      image : "",
      price : "",
      description : "",
      category : ""
  }

  product.id = id
  product.title = title
  product.image = image
  product.price = price
  product.description = description
  product.category = category
  setProduct(product);
  setShowDetail(!showDetail);
  }
    return (
      <label key = {id} width={100} className="product-distance" onClick={ViewProductDetail} >
        <img src={image} title={title} alt={`Image of  ${title}`} height={110} width={110} />
      </label>
    )
  }

export default ProductCard