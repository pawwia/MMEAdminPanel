import React, {useState} from 'react';

import './App.css';
import Header from './components/Header';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import Login from './components/Login';
import Orders from './components/Orders';
import CalendarComponent from './components/Calendar';

function App() {
  const[isLogged,setIsLogged]=useState(null);

  const getData=async(file,data)=>{
    const url='http://localhost/db/admin/'+file+'.php';
    const resp=await fetch(url,{
    method:'POST',
    body:JSON.stringify(data),
    headers:{
      'Content-Type': 'application/json'
    }     });
       const json = await resp.json();
        return json;
    }

  return (

   
    <div className="App">

     <BrowserRouter>
     <Header isLogged={isLogged}/>

<Routes>
<Route path='/' element={<Login getData={getData} isLogged={isLogged} setIsLogged={setIsLogged} />}/>
<Route path='/orders' element={<Orders getData={getData} isLogged={isLogged} setIsLogged={setIsLogged} />}/>
<Route path='/calendar' element={<CalendarComponent getData={getData} isLogged={isLogged} setIsLogged={setIsLogged}  />}/>


</Routes>

</BrowserRouter>

     </div>

  );
}

export default App;
