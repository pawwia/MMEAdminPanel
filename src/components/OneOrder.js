import React, {useState} from 'react';
import './OneOrder.css';
import OrderDetails from './OrderDetails';
const OneOrder = (props) => {
const [popUpDetails,setPopUpDetails]=useState(0);


    return ( 
        <div className='oneOrder'>
           
<div className='singleData'>Data: {props.event_date} </div>
<div className='singleData'>Status: {props.status} </div>
<div className='showOrder' onClick={()=>setPopUpDetails(1)}>Zobacz rezerwację</div>
<div className='singleData'>Liczba godzin: {props.duration} </div>
<div className='singleData'>Miejsce: {props.object_name} </div>

{popUpDetails?<OrderDetails
close={()=>setPopUpDetails(0)}
getData={props.getData}
key={props.id}
add_date={props.add_date}
adress={props.adress}
animation={props.animation}
bg_color={props.bg_color}
connected={props.connected}
deposit={props.deposit}
duration={props.duration}
event_date={props.event_date}
guestbook={props.guestbook}
guestbook_type={props.guestbook_type}
id={props.id}
layout={props.layout}
names={props.names}
object_name={props.object_name}
price={props.price}
start_hour={props.start_hour}
status={props.status}
user_id={props.user_id}
/>:null}



















            
        </div>
     );
}
 
export default OneOrder;