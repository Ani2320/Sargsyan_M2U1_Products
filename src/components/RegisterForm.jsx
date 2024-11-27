import 'firebase/auth';
import 'firebase/database'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../context/UserContext';
import { updateProfile, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../configurations/firebase';
import { set, ref } from 'firebase/database';

function RegisterForm() {

  const [personalizedErrorMessage, setMessage ] = useState("");
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const Login = (name) =>{
    setUser({name:name})
    navigate('/');
  }

 const registerUser = async (name, surname, email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
       
        const user = userCredential.user;   
        console.log('User created:', user);
        const userRef = ref(db, 'users/' + user.uid);
        set(userRef, {
          name: name,
          surname: surname,
          displayName: user.displayName,
        })
        .then(() => {
          updateProfile(user,   
            {
                 displayName: (name)
               })
          confirm("Usuario registrado con éxito. \n Redireccionando a la pantalla principal");
          Login(name, surname, user.email);
        })
        .catch((error) => {
          console.error('Error writing user data:', error);
        });
      })
      .catch((error) => {
        
        const errorCode = error.code;
        const errorMessage = error.message;
      });
      
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

/* Deprecated after the updating of the firebase version to the latest
function registerUser(name, surname, email, password) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;   

        console.log('User created:', user);

        firebase.database().ref('users/' + user.uid).set({
          name: name,
          surname: surname,
          displayName: name
        })
        .then(() => {
          updateProfile(user,   
            {
                 displayName: (name)
               })
          confirm("Usuario registrado con éxito. \n Redireccionando a la pantalla principal");
          Login(name, surname, user.email);
        })
        .catch((error) => {
          console.error('Error writing user data:', error);
        });
      })
      .catch((error) => {
        
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('Error creating user:', error);
      });
  };*/

  function validateAndRegister(e){
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
        setMessage("Completá los campos obligatorios");
    }else {
        user.name = name.value.trim()
        user.surname = surname.value.trim()
        user.email = email.value.trim()
        user.pass = pass.value.trim()  
        console.log(user)

        if(pass.value.trim() !== repPass.value.trim())
        {
          setMessage("Las contraseñas no coinciden");
        }
        else{
          setMessage("");
          registerUser(user.name, user.surname, user.email, user.pass)
        }
    }   
};

  return (
    <div className="flex jc-c mt-20 mb-20">
    <form id = "reg-form" className="gap-15" >
      
        <label htmlFor="user-name">Nombre*</label>
        <input type="text" placeholder="Nombre" id = "user-name" required />  
      
        <label htmlFor="user-surname">Apellido*</label>
        <input type="text" placeholder="Apellido" id = "user-surname" required />
      
        <label htmlFor="user-email">Email*</label>
        <input type="email" placeholder="Email" id = "user-email" required />
      
        <label htmlFor="user-pass">Contraseña*</label>
        <input type="password" placeholder="Contraseña" id = "user-pass" required />
      
        <label htmlFor="user-repPass">Repetir contraseña*</label>
        <input type="password" placeholder="Repetir contraseña" id = "user-repPass" required />

        <div className='tc-warning'>{personalizedErrorMessage}</div>
      
        <button type="submit" onClick={validateAndRegister} className="btn-generic top-10 br-10">Confirmar</button>
        
    </form>
    </div>
    
  )

}
export default RegisterForm