import React,{useState, useEffect} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import OneOrder from './OneOrder';
import Login from './Login';



import './Calendar.css'

const CalendarComponent = (props) => {
    const [date, setDate] = useState(new Date());
    const [orders,setOrders]=useState(null)
    const [info,setInfo]=useState(null);

useEffect(()=>{
showOrdersOftheDay(date);


},[date])

const showOrdersOftheDay=(date)=>{
    const data={
        date:date.getFullYear()+'-'+ getFullMonth(date.getMonth())+'-'+date.getDate(),
    }
    const getOrder= props.getData('getOrderOnDate',data);
    if (getOrder){
       getOrder.then(  function(result) {
        console.log(result);

            if(result.connected && result.error)
            {
                setOrders(null);
                setInfo(result.error);

            }
            else if (result[0].connected)
            {
                setInfo(null);
                setOrders(result)
            }

          /*if (result[0].connected)
          {   console.log(result)
            if (result.error)
            {
                setOrders(result);
                console.log("tutaj")

            }
            else
            {
                setInfo(result.error)
                console.log("niee")

            }


          }
          else
          { console.log('dziala');
       
        }
        */
       }
       )}




}
const getFullMonth=(month)=>{
month=month+1;
if (month<10) return "0"+month;
else if (month>9) return month;

}
    return ( 

       props.isLogged?<div className='Calendar'>
   <div className='Calleft'>
      <div className='calendar-container'>
        <Calendar  onChange={setDate} value={date} />
      </div>
      <p className='text-center'>
        {date.toDateString()}
        {console.log(date.getFullYear()+'-'+ getFullMonth(date.getMonth())+'-'+date.getDate())}
      </p>

      </div>
      <div className='CalRight'>
{orders?orders.map((orderData)=>(
<OneOrder
getData={props.getData}
partytype={orderData.partytype}
guestnumber={orderData.guestnumber}
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
))



:info}

      </div>


        </div>:<Login getData={props.getData} isLogged={props.isLogged} setIsLogged={props.setIsLogged}/>
     );
}
 
export default CalendarComponent;