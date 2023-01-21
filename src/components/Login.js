import React, {useState} from 'react';
import './Login.css';

const Login = (props) => {
    const[pass,setPass]=useState("");
    const handleLogin=()=>{

const data={
    password:pass,
}

const getLogin= props.getData('adminLogin',data);
            if (getLogin){
       
    
                getLogin.then(  function(result) {
                  if (result.connected===true)
                  {
                
                  props.setIsLogged(1);
                }
                  else 
                  {
                    props.setIsLogged(null);
                    
                  }
    })}


    }
    const logout=()=>
    {
        props.setIsLogged(null);
    }

    return ( 
        <div className="LoginBox">

{!props.isLogged?<div className='LoginField'>
Podaj Hasło panelu Admina:<br/>
<input type="password"  value={pass} onChange={(e)=>setPass(e.target.value)} placeholder='Hasło'/>
<br/><button onClick={handleLogin}>Zaloguj</button>

</div>:
<div className='LoginField'>Jesteś zalogowany <button onClick={logout}> Wyloguj </button></div> }
        </div>
     );
}
 
export default Login;