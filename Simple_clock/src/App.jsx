import { useState,useEffect } from "react";


function App()
{
const [time,settime]=useState(new Date());
useEffect(()=>{
  const timer=setInterval(()=>{
    settime(new Date())
  },1000);
  return ()=>clearInterval(timer);
},[]);
  return(
    <>
      <h1>Digital Clock</h1>
      <p>{time.toLocaleTimeString()}</p>
    </>
  );
}
export default App;