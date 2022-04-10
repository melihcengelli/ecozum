import { configureStore } from '@reduxjs/toolkit'
import  User  from './Slices/userSlice'
import Packages from './Slices/paketlerSlice'

export default configureStore({
    reducer: {
      user : User,
      packages : Packages,
  
    }
  })