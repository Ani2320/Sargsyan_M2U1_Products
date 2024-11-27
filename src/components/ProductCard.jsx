
function ProductCard({id, title, image, sku, price, description}) {
  console.log(image)
    return (
      <div 
        key = {id} width={100} 
        className="product-distance grid-item" 
      >
        {
        //<img src={image} title={title} alt={`Image of  ${title}`} height={120} width={120} />
        //<div> {title} </div>
        }
        <div className="product-card ct-black">
          <img src={image} alt={title} height={100} width={100}/>
          <div className="product-info">
            <h5>{title.substring(0,20) + "..."}</h5>
            <p>SKU: {sku}</p>
            <p>Precio: ${price}</p>
            <p>{description.substring(0, 30) + "..."}</p>
          </div>
        </div>
      </div>
    )
  }

export default ProductCard