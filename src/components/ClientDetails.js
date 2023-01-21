import React, {useState, useEffect} from 'react';

const ClientDetails = (props) => {
    const[error,setError]=useState(null);

    const [name, setName]=useState(null);
    const [nameChg, setNameChg]=useState(0);

    const [surname, setSurname]=useState(null);
    const [surnameChg, setSurnameChg]=useState(0);

    const [adress, setAdress]=useState(null);
    const [adressChg, setAdressChg]=useState(0);

    const [pesel, setPesel]=useState(null);
    const [peselChg, setPeselChg]=useState(0);

    const [email, setEmail]=useState(null);
    const [emailChg, setEmailChg]=useState(0);

    const [tel, setTel]=useState(null);
    const [telChg, setTelChg]=useState(0);

    const [showData,setShowData]=useState(0);


useEffect(()=>{
   const data={
        id:props.id,
    }
    const getUser= props.getData('getUser',data);
    if (getUser){
       getUser.then(  function(result) {
          if (result)
          {
setName(result.name);
setSurname(result.surname);
setAdress(result.adress);
setPesel(result.pesel);
setShowData(result.connected)
setTel(result.tel);
setEmail(result.email);

          }
          else 
          {
            setError("Błąd bazy danych");
          }
  })}


},[])

const handleUpdateBD=(val,action,closeChange)=>{
    const data={
        name:val,
        id:props.id,
        which:action  
            };
        const rez=props.getData("updateUser",data)
        if (rez)
{
    rez.then(function(result){

if(result.connected===true)
{
    alert("Poprawnie zmieniono rekord", action, "na: ", val);
    closeChange(0);

    }
    else alert("Wystąpił problem. Spróbuj ponownie");

    })
}

        
            
}
    return (  
        <div className='popUpOrderDetails'>
        <div className="popUpOrderDetailsTopBar">
<div className='popUpOrderDetailsTopBarTitle'>Zamówienie</div>
<div className='popUpOrderDetailsTopBarClose' onClick={props.close}>X</div>
</div>
{showData?<div className='bookingDetails'>
<div className='bookingDetailselement'>
<div className='bookingDetailsTitle bookingDetailselementOne' >Imię: </div>
<div className='bookingDetailsValue bookingDetailselementOne'>{nameChg?<input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>:name}</div>
<div className='bookingDetailsEdit bookingDetailselementOne'>{nameChg?<button onClick={()=>{handleUpdateBD(name, "name", setNameChg)}}>Zatwierdź</button>:<button onClick={()=>setNameChg(1)}>Edytuj</button>}</div>
</div>
<div className='bookingDetailselement'>
<div className='bookingDetailsTitle bookingDetailselementOne' >Nazwisko: </div>
<div className='bookingDetailsValue bookingDetailselementOne' >{surnameChg?<input type="text" value={surname} onChange={(e)=>setSurname(e.target.value)}/>:surname}</div>
<div className='bookingDetailsEdit bookingDetailselementOne'>{surnameChg?<button onClick={()=>{handleUpdateBD(surname, "surname", setSurnameChg)}}>Zatwierdź</button>:<button onClick={()=>setSurnameChg(1)}>Edytuj</button>}</div>
</div>
<div className='bookingDetailselement'>
<div className='bookingDetailsTitle bookingDetailselementOne'> Adres:</div>
<div className='bookingDetailsValue bookingDetailselementOne'>{adressChg?<input type="text" value={adress} onChange={(e)=>setAdress(e.target.value)}/>:adress}</div>
<div className='bookingDetailsEdit bookingDetailselementOne'>{adressChg?<button onClick={()=>{handleUpdateBD(adress, "adress", setAdressChg)}}>Zatwierdź</button>:<button onClick={()=>setAdressChg(1)}>Edytuj</button>}</div>
</div>
<div className='bookingDetailselement'>
<div className='bookingDetailsTitle bookingDetailselementOne' >Pesel:</div>
<div className='bookingDetailsValue bookingDetailselementOne'>{peselChg?<input type="text" value={pesel} onChange={(e)=>setPesel(e.target.value)}/>:pesel}</div>
<div className='bookingDetailsEdit bookingDetailselementOne'>{peselChg?<button onClick={()=>{handleUpdateBD(pesel, "pesel", setPeselChg)}}>Zatwierdź</button>:<button onClick={()=>setPeselChg(1)}>Edytuj</button>}</div>
</div>
<div className='bookingDetailselement'>
<div className='bookingDetailsTitle bookingDetailselementOne' >E-mail: </div>
<div className='bookingDetailsValue bookingDetailselementOne' >{emailChg?<input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>:email}</div>
<div className='bookingDetailsEdit bookingDetailselementOne'>{emailChg?<button onClick={()=>{handleUpdateBD(email, "email", setEmailChg)}}>Zatwierdź</button>:<button onClick={()=>setEmailChg(1)}>Edytuj</button>}</div>
</div>
<div className='bookingDetailselement'>
<div className='bookingDetailsTitle bookingDetailselementOne'>Telefon </div>
<div className='bookingDetailsValue bookingDetailselementOne'>{telChg?<input type="text" value={tel} onChange={(e)=>setTel(e.target.value)}/>:tel}</div>
<div className='bookingDetailsEdit bookingDetailselementOne'>{telChg?<button onClick={()=>{handleUpdateBD(tel, "tel", setTelChg)}}>Zatwierdź</button>:<button onClick={()=>setTelChg(1)}>Edytuj</button>}</div>
</div>



    </div>:error}

    </div>
    );
}
 
export default ClientDetails;