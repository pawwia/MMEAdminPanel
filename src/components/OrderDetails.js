import React, {useState} from 'react';
import './OrderDetails.css';
import ClientDetails from './ClientDetails';

const OrderDetails = (props) => {
const [status,setStatus]=useState(props.status);
const [statusChg,setStatusChg]=useState(false);

const [eventDate,setEventDate]=useState(props.event_date);
const [eventDateChg,setEventDateChg]=useState(false);

const [duration,setDuration]=useState(props.duration);
const [durationChg,setDurationChg]=useState(false);

const [startHour,setStartHour]=useState(props.start_hour);
const [startHourChg,setStartHourChg]=useState(false);

const [objectName,setObjectName]=useState(props.object_name);
const [objectNameChg,setObjectNameChg]=useState(false);

const [adress,setAdress]=useState(props.adress);
const [adressChg,setAdressChg]=useState(false);

const [price,setPrice]=useState(props.price);
const [priceChg,setPriceChg]=useState(false);

const [deposit,setDeposit]=useState(props.deposit);
const [depositChg,setDepositChg]=useState(false);

const [animation,setAnimation]=useState(props.animation);
const [animationChg,setAnimationChg]=useState(false);

const [bgColor,setBgColor]=useState(props.bg_color);
const [bgColorChg,setBgColorChg]=useState(false);

const [layout,setLayout]=useState(props.layout);
const [layoutChg,setLayoutChg]=useState(false);

const [names,setNames]=useState(props.names);
const [namesChg,setNamesChg]=useState(false);

const [guestbook,setGuestbook]=useState(props.guestbook);
const [guestbookChg,setGuestbookChg]=useState(false);

const [guestbookType,setGuestBookType]=useState(props.guestbook_type);
const [guestbookTypeChg,setGuestBookTypeChg]=useState(false);

const [showUser, setShowUser]=useState(0);



const handleUpdateBD=(val,action,closeChange)=>{
    const data={
        name:val,
        id:props.id,
        which:action  
            };
        const rez=props.getData("updateOrder",data)
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
<div className='bookingDetails'>
<h1> Szczegóły rezerwacji</h1>

<div className='bookingDetailselement'>
<div className='bookingDetailsTitle bookingDetailselementOne'>Status: </div>
<div className='bookingDetailsValue bookingDetailselementOne'>{statusChg?<input type="text" value={status} onChange={(e)=>setStatus(e.target.value)}/>:status}</div>
<div className='bookingDetailsEdit bookingDetailselementOne'>{statusChg?<button onClick={()=>{handleUpdateBD(status, "status", setStatusChg)}}>Zatwierdź</button>:<button onClick={()=>setStatusChg(1)}>Edytuj</button>}</div>
</div>
<div className='bookingDetailselement'>
<div className='bookingDetailsTitle bookingDetailselementOne'>Data imprezy: </div>
<div className='bookingDetailsValue bookingDetailselementOne'>{eventDateChg?<input type="text" value={eventDate} onChange={(e)=>setEventDate(e.target.value)}/>:eventDate}</div>
<div className='bookingDetailsEdit bookingDetailselementOne'>{eventDateChg?<button onClick={()=>{handleUpdateBD(eventDate, "event_date", setEventDateChg)}}>Zatwierdź</button>:<button onClick={()=>setEventDateChg(1)}>Edytuj</button>}</div>

</div>
<div className='bookingDetailselement'>
<div className='bookingDetailsTitle bookingDetailselementOne'>Liczba godzin: </div>
<div className='bookingDetailsValue bookingDetailselementOne'>{durationChg?<input type="text" value={duration} onChange={(e)=>setDuration(e.target.value)}/>:duration}</div>
<div className='bookingDetailsEdit bookingDetailselementOne'>{durationChg?<button onClick={()=>{handleUpdateBD(duration, "duration", setDurationChg)}}>Zatwierdź</button>:<button onClick={()=>setDurationChg(1)}>Edytuj</button>}</div>
</div>
<div className='bookingDetailselement'>
<div className='bookingDetailsTitle bookingDetailselementOne'>Czas startu: </div>
<div className='bookingDetailsValue bookingDetailselementOne'>{startHourChg?<input type="text" value={startHour} onChange={(e)=>setStartHour(e.target.value)}/>:startHour}</div>
<div className='bookingDetailsEdit bookingDetailselementOne'>{startHourChg?<button onClick={()=>{handleUpdateBD(startHour, "start_hour", setStartHourChg)}}>Zatwierdź</button>:<button onClick={()=>setStartHourChg(1)}>Edytuj</button>}</div>
</div>
<h1>Gdzie?</h1>
<div className='bookingDetailselement'>
<div className='bookingDetailsTitle bookingDetailselementOne'>Hotel: </div>
<div className='bookingDetailsValue bookingDetailselementOne'>{objectNameChg?<input type="text" value={objectName} onChange={(e)=>setObjectName(e.target.value)}/>:objectName}</div>
<div className='bookingDetailsEdit bookingDetailselementOne'>{objectNameChg?<button onClick={()=>{handleUpdateBD(objectName, "object_name", setObjectNameChg)}}>Zatwierdź</button>:<button onClick={()=>setObjectNameChg(1)}>Edytuj</button>}</div>
</div>
<div className='bookingDetailselement'>
<div className='bookingDetailsTitle bookingDetailselementOne'>Adres hotelu: </div>
<div className='bookingDetailsValue bookingDetailselementOne'>{adressChg?<input type="text" value={adress} onChange={(e)=>setAdress(e.target.value)}/>:adress}</div>
<div className='bookingDetailsEdit bookingDetailselementOne'>{adressChg?<button onClick={()=>{handleUpdateBD(adress, "adress", setAdressChg)}}>Zatwierdź</button>:<button onClick={()=>setAdressChg(1)}>Edytuj</button>}</div>
</div>
<h1> Rozliczenie</h1>
<div className='bookingDetailselement'>
<div className='bookingDetailsTitle bookingDetailselementOne'>Cena: </div>
<div className='bookingDetailsValue bookingDetailselementOne'>{priceChg?<input type="text" value={price} onChange={(e)=>setPrice(e.target.value)}/>:price}</div>
<div className='bookingDetailsEdit bookingDetailselementOne'>{priceChg?<button onClick={()=>{handleUpdateBD(price, "price", setPriceChg)}}>Zatwierdź</button>:<button onClick={()=>setPriceChg(1)}>Edytuj</button>}</div>
</div>

<div className='bookingDetailselement'>
<div className='bookingDetailsTitle bookingDetailselementOne'>Wpłacono: </div>
<div className='bookingDetailsValue bookingDetailselementOne'>{depositChg?<input type="text" value={deposit} onChange={(e)=>setDeposit(e.target.value)}/>:deposit}</div>
<div className='bookingDetailsEdit bookingDetailselementOne'>{depositChg?<button onClick={()=>{handleUpdateBD(deposit, "deposit", setDepositChg)}}>Zatwierdź</button>:<button onClick={()=>setDepositChg(1)}>Edytuj</button>}</div>
</div>


<h1>Konfiguracja</h1>

<div className='bookingDetailselement'>
<div className='bookingDetailsTitle bookingDetailselementOne'>Animacja:</div>
<div className='bookingDetailsValue bookingDetailselementOne'>{animationChg?<input type="text" value={animation} onChange={(e)=>setAnimation(e.target.value)}/>:animation}</div>
<div className='bookingDetailsEdit bookingDetailselementOne'>{animationChg?<button onClick={()=>{handleUpdateBD(animation, "animation", setAnimationChg)}}>Zatwierdź</button>:<button onClick={()=>setAnimationChg(1)}>Edytuj</button>}</div>
</div>

<div className='bookingDetailselement'>
<div className='bookingDetailsTitle bookingDetailselementOne'>Tło</div>
<div className='bookingDetailsValue bookingDetailselementOne'>{bgColorChg?<input type="text" value={bgColor} onChange={(e)=>setBgColor(e.target.value)}/>:bgColor}</div>
<div className='bookingDetailsEdit bookingDetailselementOne'>{bgColorChg?<button onClick={()=>{handleUpdateBD(bgColor, "bg_color", setBgColorChg)}}>Zatwierdź</button>:<button onClick={()=>setBgColorChg(1)}>Edytuj</button>}</div>
</div>
<div className='bookingDetailselement'>
<div className='bookingDetailsTitle bookingDetailselementOne'>Szablon wydruku: </div>
<div className='bookingDetailsValue bookingDetailselementOne'>{layoutChg?<input type="text" value={layout} onChange={(e)=>setLayout(e.target.value)}/>:layout}</div>
<div className='bookingDetailsEdit bookingDetailselementOne'>{layoutChg?<button onClick={()=>{handleUpdateBD(layout, "layout", setLayoutChg)}}>Zatwierdź</button>:<button onClick={()=>setLayoutChg(1)}>Edytuj</button>}</div>
</div>

<div className='bookingDetailselement'>
<div className='bookingDetailsTitle bookingDetailselementOne'>Imiona na wydruku:</div>
<div className='bookingDetailsValue bookingDetailselementOne'>{namesChg?<input type="text" value={names} onChange={(e)=>setNames(e.target.value)}/>:names}</div>
<div className='bookingDetailsEdit bookingDetailselementOne'>{namesChg?<button onClick={()=>{handleUpdateBD(names, "names", setNamesChg)}}>Zatwierdź</button>:<button onClick={()=>setNamesChg(1)}>Edytuj</button>}</div>
</div>
<div className='bookingDetailselement'>
<div className='bookingDetailsTitle bookingDetailselementOne'>Księga gości: </div>
<div className='bookingDetailsValue  bookingDetailselementOne'>{guestbookChg?<input type="text" value={guestbook} onChange={(e)=>setGuestbook(e.target.value)}/>:guestbook}</div>
<div className='bookingDetailsEdit bookingDetailselementOne'>{guestbookChg?<button onClick={()=>{handleUpdateBD(guestbook, "guestbook", setGuestbookChg)}}>Zatwierdź</button>:<button onClick={()=>setGuestbookChg(1)}>Edytuj</button>}</div>
</div>

<div className='bookingDetailselement'>
<div className='bookingDetailsTitle bookingDetailselementOne'>typ księgi gości: </div>
<div className='bookingDetailsValue bookingDetailselementOne'>{guestbookTypeChg?<input type="text" value={guestbookType} onChange={(e)=>setGuestBookType(e.target.value)}/>:guestbookType}</div>
<div className='bookingDetailsEdit bookingDetailselementOne'>{guestbookTypeChg?<button onClick={()=>{handleUpdateBD(guestbookType, "guestbook_type", setGuestBookTypeChg)}}>Zatwierdź</button>:<button onClick={()=>setGuestBookTypeChg(1)}>Edytuj</button>}</div>
</div>


<h1> Inne</h1>
<div className='bookingDetailselement'>
<div className='bookingDetailsTitle bookingDetailselementOne'>Klient: </div>
<div className='bookingDetailsValue bookingDetailselementOne' onClick={()=>setShowUser(1)}>{props.user_id}</div>
<div className='bookingDetailsEdit bookingDetailselementOne'></div>
</div>
<div className='bookingDetailselement'>
<div className='bookingDetailsTitle bookingDetailselementOne' >Typ imprezy</div>
<div className='bookingDetailsValue bookingDetailselementOne'>{props.partytype}</div>
<div className='bookingDetailsEdit bookingDetailselementOne'></div>
</div>
<div className='bookingDetailselement'>
<div className='bookingDetailsTitle bookingDetailselementOne' >Liczba goście</div>
<div className='bookingDetailsValue bookingDetailselementOne'>{props.guestnumber}</div>
<div className='bookingDetailsEdit bookingDetailselementOne'></div>
</div>
<div className='bookingDetailselement'>
<div className='bookingDetailsTitle bookingDetailselementOne' >Id zamówienia</div>
<div className='bookingDetailsValue bookingDetailselementOne' >{props.id}</div>
<div className='bookingDetailsEdit bookingDetailselementOne'></div>
</div>
<div className='bookingDetailselement'>
<div className='bookingDetailsTitle bookingDetailselementOne'>Data dodania: </div>
<div className='bookingDetailsValue bookingDetailselementOne'>{props.add_date}</div>
<div className='bookingDetailsEdit bookingDetailselementOne'></div>
</div>


</div>
            </div>
{showUser?<ClientDetails 
getData={props.getData}
close={()=>setShowUser(0)}
id={props.user_id}


/>:null}
            
        </div>
     );
}
 
export default OrderDetails;