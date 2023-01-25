import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ShowGrid from './Cards/ShowGrid'
import Loader from './Loader/Loader'
import { increment, incrementByAmount } from './redux-toolkit/SliceCreate'
import { Button, message } from 'antd';
const Home = () => {
  const [messageApi, contextHolder] = message.useMessage();

 
  const [Time,setTime]=useState(false)
   const count = useSelector((state) => state.counter.ObjVal)
   const sett = localStorage.getItem("flag") == "false"? false:true
  const [setmsg,setMsg]=useState(false)
   const setc =localStorage.getItem("Time")==null?false:true
   const Dates=new Date()
    const Dat=Dates.getTime()
 const resul=   localStorage.getItem("Time")-Dat
const res=Math.round(resul/1000)
 const info = () => {
  
  if(res<=60){
    messageApi.info(`Time Remaining to make Api Call: ${res} secs`);
  }else{
    const rou=Math.round(res/60)
    messageApi.info(`Time Remaining to make Api Call: ${rou} mins`);
  }
  
};






    const setValue= 60000

   




   const dispatch = useDispatch()
   const [isLoading,SetLoading] =useState(true)
   const Search =()=>{
    setTimeout(()=>{
        fetch('https://jsonplaceholder.typicode.com/users').then(r=>r.json()).then(results=>{
          dispatch(incrementByAmount(results))
          localStorage.setItem("Time",Dat+setValue)
          localStorage.setItem("flag",false)
          
            SetLoading(false)
        })
    },1000)
   
   } 
   const handleTime=()=>{
    setTime(true)
    if(localStorage.getItem("Time")==null || localStorage.getItem("flag")==null){
      
      
      localStorage.setItem("Time",Dat+setValue)
      localStorage.setItem("flag",false)
    }else if(localStorage.getItem("Time") <= Dat){

      localStorage.setItem("flag",true)
    }
    else{
     
    }
    
    
    
   }
   useEffect(()=>{
    if(localStorage.getItem("Time")>Dat){
      info()
    }
   },[])

  return (
    <div>
      {contextHolder}
        {isLoading && sett && <div style={{margin:440}}><Loader/></div> }
        
    {!Time && handleTime()}
    {sett && Search()}
    {!sett && (<ShowGrid data={count}/>)}
    </div>
  )
}

export default Home