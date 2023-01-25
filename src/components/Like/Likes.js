import React from 'react'
import { Button } from 'antd'
import { HeartOutlined,HeartFilled } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from '../redux-toolkit/SliceCreate'
const Likes = ({ide}) => {
    const isLike = useSelector(state=> state.counter.Like)
    const Liked = isLike.some(item=> ide===item)
    const dispatch =useDispatch()
    const toggleLike=()=>{
       dispatch(increment(ide)) 
    }
   
  return (
    <div><Button onClick={toggleLike}>{Liked && <HeartFilled />}{!Liked && <HeartOutlined />}</Button></div>
  )
}

export default Likes