import React from 'react'
import { Button } from 'antd'
import { DeleteFilled  } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import { Deletes, increment } from '../redux-toolkit/SliceCreate'
const Delete = ({ide}) => {
    
    const dispatch =useDispatch()
    const toggleDel=()=>{
       dispatch(Deletes(ide)) 
    }
   
  return (
    <div><Button onClick={toggleDel}><DeleteFilled /></Button></div>
  )
}

export default Delete