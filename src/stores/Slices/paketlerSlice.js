import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import paketlerService from "../Services/paketlerService";

const initialState = {
    paketler: [{
        imagePath:"",
        name:"",
        details:[],
        tags:[],
        amount:"",
        currency:"",
        id:"",
    }],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

const apiurl =  'https://6249a1e8fd7e30c51c042ccb.mockapi.io/api/packages'

// Get Packages
export const getPackages = createAsyncThunk(apiurl+'/paketler', async (_, thunkAPI) => {
    try {
        return await paketlerService.getPackages()
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const packagesSlice = createSlice({
    name: 'paketler',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
        .addCase(getPackages.pending, (state) => {
            state.isLoading = true
        })
        .addCase(getPackages.fulfilled, (state,action)=> {
            state.isLoading = false
            state.isSuccess = true
            state.paketler.push(action.payload)
            
        })
        .addCase(getPackages.rejected, (state,action)=> {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
    },
})

export const {reset} = packagesSlice.actions
export default packagesSlice.reducer