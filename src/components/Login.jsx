function Login({user, setRegisterStatus, setLoginStatus, setScreenName}) {

    function doLogin(e){
        e.preventDefault()
        var errorMessage = document.getElementById("invalid-user-message")
        const email = document.getElementById("user-email")
        const pass = document.getElementById("user-pass")
    
        if(
            !(email.value.trim() === "" ||
            pass.value.trim() === "")
        ){
            if(email.value.trim() === user.email & pass.value.trim() === user.pass)
            {
                confirm("Login con éxito. Redirigiendo a la pantalla de productos.");
                setLoginStatus(true);
                setScreenName("Productos")
            }
            else{
                //confirm.log("Los datos ingresados son inválidos");
                errorMessage.style.display = 'block'   
            }
        }
        else{
            console.log("Completa los campos obligatorios");
        }
    
    };
    
    function goToRegister(e){
        e.preventDefault();
        console.log("Va a la pantalla de registro")
        setRegisterStatus(true)
        setScreenName("Registro de usuario")
    };

    return (
    <div>
    <h3>Bienvenido a nuestra página oficial. Inicia sesión con una cuenta registrada para seguir navegando </h3>
    <div className="flex jc-c">
      <form type = "form" id = "login-form" className="gap-15 mt-50 mb-50 w-40" >
        <label htmlFor="user-email">Usuario*</label>
        <input type="email" placeholder="Email" id = "user-email" required />

        <label htmlFor="user-user-pass">Contraseña*</label>
        <input type="password" placeholder="Contraseña" id = "user-pass" required />
        
        
        <p id = "invalid-user-message" className="block">
        Los datos ingresados no corresponden a un usuario registrado.*
        </p>

        <div className="ta-c"> 
            <button type="submit" onClick={doLogin} className="btn-generic mt-10 br-10 w-100">Confirmar</button>
        </div>

      </form>
    </div>
    <p className="flex jc-c ai-c">
       <span>Todavía no tenes cuenta registrada?</span>
       <button
           onClick={goToRegister}
           className="btn-generic br-10 ml-10"
       >
           REGÍSTRATE
       </button>
    </p>
    </div>
      
    )
  
  }
  export default Login