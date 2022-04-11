import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import odemeService from "../Services/odemeService";

const initialState = {
    odeme: [{
        packageIds: [],
        cardHolderName: "",
        cardNumber: "",
        expireDate: "",
        cvv: "",
        totalAmount: 0,
    }],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

const apiurl = 'https://6249a1e8fd7e30c51c042ccb.mockapi.io/api/payment'


// Odeme Yap
export const odemeYap = createAsyncThunk(apiurl+'/odemeyap', async (paymentData, thunkAPI) => {
    try {
        return await odemeService.odemeYap(paymentData)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})


export const odemeSlice = createSlice({
    name: 'odeme',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
        .addCase(odemeYap.pending, (state) => {
            state.isLoading = true
        })
        .addCase(odemeYap.fulfilled, (state,action)=> {
            state.isLoading = false
            state.isSuccess = true
            state.odeme.push(action.payload)
        })
        .addCase(odemeYap.rejected, (state,action)=> {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
    },
})

export const {reset} = odemeSlice.actions
export default odemeSlice.reducer