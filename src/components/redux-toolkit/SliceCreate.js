import { createSlice } from '@reduxjs/toolkit'
import { formatStrategyValues } from 'rc-tree-select/lib/utils/strategyUtil'

const initialState = {
  Like: [],
  ObjVal:null,
  isDeleted:false,
 
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state,action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      if(state.Like.some(item=>item === action.payload)){
        const notin=state.Like.filter(item=> item !== action.payload)
        
       state.Like=[...notin]
      }else{
        state.Like = [...state.Like,action.payload]
      }
      const objs= state.ObjVal.some(item=>item.id === action.payload)
    
    },
    decrement: (state) => {
      state.isDeleted = !state.isDeleted
    },
    incrementByAmount: (state, action) => {
      state.ObjVal = action.payload
 
 
  
      
    },
    Deletes: (state, action) => {
        const dele= state.ObjVal.filter(item=>item.id!==action.payload)
        state.ObjVal= [...dele]
        
      },
      updateName: (state, action) => {
      state.ObjVal.map(item=>{
        if(item.id === action.payload[0]){
       
            item.name=action.payload[1].username
            item.phone=action.payload[1].phone
            item.email=action.payload[1].Email
            item.website=action.payload[1].Website
        }
      })
     
      
      },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount,Deletes,updateName } = counterSlice.actions

export default counterSlice.reducer