import { configureStore } from '@reduxjs/toolkit'
import  User  from './Slices/userSlice'

export default configureStore({
    reducer: {
      user : User,
  
    }
  })