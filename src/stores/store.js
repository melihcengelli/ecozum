import { configureStore } from '@reduxjs/toolkit'
import  User  from './Slices/userSlice'
import Paketler from './Slices/paketlerSlice'
import Odeme from './Slices/odemeSlice'

export default configureStore({
    reducer: {
      user : User,
      paketler : Paketler,
      odeme : Odeme,
    }
  })