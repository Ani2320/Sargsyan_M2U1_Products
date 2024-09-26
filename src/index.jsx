import MainContent from './components/MainContent.jsx'
const mainContentStatus = false;
const closeIcon = document.getElementById("prod-detail-close");

if(closeIcon !== null)
    closeIcon.addEventListener('click', ChangeMainContentStatus());

function ViewProductDetail(id,title,image,price,description,category){

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

}