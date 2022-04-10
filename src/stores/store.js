import { configureStore } from '@reduxjs/toolkit'
import  User  from './Slices/userSlice'
import Paketler from './Slices/paketlerSlice'

export default configureStore({
    reducer: {
      user : User,
      paketler : Paketler,
  
    }
  })