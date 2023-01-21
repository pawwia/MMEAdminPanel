import React, {useState,useEffect} from 'react';
import './Orders.css';
import OneOrder from './OneOrder';
import Login from './Login';

const Orders = (props) => {
  const [sortOrder,setSortOrder]=useState(1);
  const [past,setPast]=useState(1);
  const [month,setMonth]=useState("0");
  const [year,setYear]=useState("0");
  const [status,setStatus]=useState("7");

  const [show,setShow]=useState(null);

const [error, setError]=useState("");









const renderOrders=()=>{


  const getLogin= props.getData('getAllOrders',null);
  if (getLogin){
     getLogin.then(  function(result) {
        if (result)
        {
if(sortOrder===1) 
{
  result=[...result].sort((a,b)=>{
    return new Date(a.event_date)-new Date(b.event_date)  ;
 }) 
}
else if (sortOrder===2)
{
  result=[...result].sort((a,b)=>{ 
    return new Date(b.event_date)-new Date(a.event_date);
  })
} 

//-------------Usuwanie przeszłych
if(past===false)
{let add=0;
let currentDate = new Date().toJSON().slice(0, 10);

  while(add<result.length)
  {
    if (result[add].event_date<currentDate)
    {
   result.splice(add,1)

    }
    else 
    {
      add=add+1;
    }
  }
}
// ----- Koniec usuwania przeszłych
//-------Szukanie miesiąca
if (month==="01"||month==="02"||month==="03"||month==="04"||month==="05"||month==="06"||month==="07"||month==="08"||month==="09"||month==="10"||month==="11"||month==="12")
{
let add=0;
console.log(result);

while(add<result.length)
{
  if (result[add].event_date.substr(5,2)!==month)
  {
console.log('jestem')
    result.splice(add,1)
  }
  else 
  {add=add+1;

  }
}

}
//------koniec szukania miesiaca
//-------poczatek szukania roku
if (year!=="0")
{
let add=0;
while(add<result.length)
{
  if (result[add].event_date.toString().substr(0,4)!==year)
  {
    result.splice(add,1)
  }
  else add=add+1;
}

}
//-----koniec szukania roku
//------poczatek szukania statusu
if (status!=="7")
{
let add=0;
console.log(result)
while(add<result.length)
{
  if (result[add].status.toString()!==status)
   {    
    result.splice(add,1)
   }
    else 
    {
      add=add+1;
    }
  }
}


//---------koniec szukania statusu

setShow(result);


        }
        else 
        {
          setError("Błąd bazy danych");
        }
})}


}



    return ( 
      props.isLogged? <div className="Orders">
<h1> Zamówienia </h1>
<div className='optionsOrders'>
<div className={sortOrder===1?"oneOption oneOptionActive":"oneOption"} onClick={()=>setSortOrder(1)}>Data - Najpierw najstarsze</div>
<div className={sortOrder===2?"oneOption oneOptionActive":"oneOption"} onClick={()=>setSortOrder(2)}> Data - Najpierw najmłodsze</div>
<div className={past?"oneOption oneOptionActive":"oneOption"} onClick={()=>setPast(!past)}> Przeszłe</div>
<div className='oneOption' >Miesiąc<select value={month} onChange={(e)=>setMonth(e.target.value)}><option value="00">W</option><option value="01">01</option><option value="02">02</option><option value="03">03</option><option value="04">04</option><option value="05">05</option><option value="06">06</option><option value="07">07</option><option value="08">08</option><option value="09">09</option><option value="10">10</option><option value="11">11</option><option value="12">12</option></select></div>
<div className='oneOption'  >Rok<select value={year} onChange={(e)=>setYear(e.target.value)}><option value="0">W</option><option value="2022">2022</option><option value="2023">2023</option><option value="2024">2024</option></select></div>
<div className='oneOption'  >Status:<select value={status} onChange={(e)=>setStatus(e.target.value)}><option value="0"> 0 - Utworzony</option><option value="1">1 Zarejstrowany</option><option value="2">2 Oczekiwanie na umowę</option><option value="3">3 - Potwierdzona</option><option value="4">4- Oczekująca</option><option value="5">5- Wykonana</option><option value="7">Pokaz Wszystkie</option></select></div>
<div className='oneOption' onClick={renderOrders}>Zastosuj filtry</div>
</div>

{show?show.map((orderData)=>(
<OneOrder
getData={props.getData}
partytype={props.partytype}
guestnumber={props.guestnumber}
key={orderData.id}
add_date={orderData.add_date}
adress={orderData.adress}
animation={orderData.animation}
bg_color={orderData.bg_color}
connected={orderData.connected}
deposit={orderData.deposit}
duration={orderData.duration}
event_date={orderData.event_date}
guestbook={orderData.guestbook}
guestbook_type={orderData.guestbook_type}
id={orderData.id}
layout={orderData.layout}
names={orderData.names}
object_name={orderData.object_name}
price={orderData.price}
start_hour={orderData.start_hour}
status={orderData.status}
user_id={orderData.user_id}
/>
)):null}









        </div>:<Login getData={props.getData} setIsLogged={props.setIsLogged} isLogged={props.isLogged}/>
     );

}
export default Orders;