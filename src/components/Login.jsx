import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";
import { auth } from "../configurations/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

function Login() {
    const { setUser } = useContext(UserContext);
    const navigate = useNavigate();

    const doLogin = async (email, password) => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            const user = auth.currentUser;   
    
            console.log(user); 
                setUser({name: user.displayName});
                navigate('/');
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
        };
    function handleLogin (e) {

        e.preventDefault()
        const email = document.getElementById("user-email")
        const pass = document.getElementById("user-pass")
    
        if(
            !(email.value.trim() === "" ||
            pass.value.trim() === "")
        ){
            doLogin(email.value.trim(), pass.value.trim());
        }
        else{
            console.log("Completa los campos obligatorios");
        }
    
    };

    return (
    <div>
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
            <button type="submit" onClick={handleLogin} className="btn-generic mt-10 br-10 w-100">Confirmar</button>
        </div>

      </form>
    </div>
    <p className="flex jc-c ai-c">
       <span>Todavía no tenes cuenta registrada?</span>
       <Link
           to="/register"
       >
            <div className="flex jc-c ai-c btn-generic br-10 ml-10 w-100">
                REGÍSTRATE
            </div>
       </Link>
    </p>
    </div>
      
    )
  
  }
  export default Login