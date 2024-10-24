function RegisterForm({setScreenName, setRegisterStatus, saveUser}) {
  function confirmRegisterForm(e){
    e.preventDefault();
    const user = {
      name : "",
      surname: "",
      email : "",
      pass : ""
  }
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
        user.name = name.value.trim()
        user.surname = surname.value.trim()
        user.email = email.value.trim()
        user.pass = pass.value.trim()  
        console.log(user)
        saveUser(user)
        confirm("Tus datos fueron guiardados en una variable. \n" + 
          "Advertencia!!!  \nUsa la contraseña del primer campo para poder Iniciar sesión")
        setRegisterStatus(false)
        setScreenName("Inicio de sesión")
    }   
};

  return (
    <div className="flex jc-c">
    <form id = "reg-form" className="gap-15" >
      
        <label htmlFor="user-name">Nombre*</label>
        <input type="text" placeholder="Nombre" id = "user-name" required />  
      
        <label htmlFor="user-surname">Apellido*</label>
        <input type="text" placeholder="Apellido" id = "user-surname" required />
      
        <label htmlFor="user-email">Email*</label>
        <input type="email" placeholder="Email" id = "user-email" required />
      
        <label>Teléfono</label>
        <input type="tel" placeholder="Teléfono" />
      
        <label htmlFor="user-user-pass">Contraseña*</label>
        <input type="password" placeholder="Contraseña" id = "user-pass" required />
      
        <label htmlFor="user-repPass">Repetir contraseña*</label>
        <input type="password" placeholder="Repetir contraseña" id = "user-repPass" required />
      
        <button type="submit" onClick={confirmRegisterForm} className="btn-generic top-10 br-10">Confirmar</button>
        
    </form>
    </div>
    
  )

}
export default RegisterForm