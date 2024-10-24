import MainContent from './components/MainContent.jsx'
const mainContentStatus = false;
const user = {
    name : "",
    surname: "",
    email : "",
    pass : ""
}
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

function confirmRegisterForm(){
    const screenName = document.getElementById("screen-name")
    const name = document.getElementById("user-name")
    const surname = document.getElementById("user-surname")
    const email = document.getElementById("user-email")
    const pass = document.getElementById("user-pass")
    const repPass = document.getElementById("user-repPass")
    if(
        name.value.trim() === "" ||
        surname.value.trim() === "" ||
        email.value.trim() === "" ||
        pass.value.trim() === "" ||
        repPass.value.trim() === ""
    ){
        console.log("Completá los campos obligatorios")
    }else {
        screenName.innerText = "Inicio"
        user.name = name.value.trim();
        user.surname = surname.value.trim();
        user.email = email.value.trim();
        user.pass = pass.value.trim();  
        confirm("Tus datos no fueron guiardados en una variable.")
    }
    
}

function doLogin(){
    const screenName = document.getElementById("screen-name")
    const email = document.getElementById("user-email")
    const pass = document.getElementById("user-pass")

    if(
        email.value.trim() === "" ||
        pass.value.trim() === ""
    ){
        screenName.innerText = "Productos"
        if(email.value.trim() === user.email & pass.value.trim() === user.pass)
            confirm("Login con éxito. Redirigiendo a la pantalla de productos.")
    }
    else{
        console.log("Completa los campos obligatorios");
    }

}

function goToRegister(){
    const screenName = document.getElementById("screen-name")
    console.log("Va a la pantalla de registro")
    screenName.innerText = "Registro de usuario"
}