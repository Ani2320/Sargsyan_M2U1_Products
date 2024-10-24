
function ProductCard({id, title, image, price, description, category, showDetail, setShowDetail, setProduct, setScreenName}) {
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
  setScreenName("Detalles")
  }
    return (
      <div 
        key = {id} width={100} 
        className="product-distance grid-item" 
        onClick={ViewProductDetail} 
      >
        <img src={image} title={title} alt={`Image of  ${title}`} height={120} width={120} />
        <div> {title} </div>
      </div>
    )
  }

export default ProductCard