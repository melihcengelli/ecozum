import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userService from "../Services/userService";

const initialState = {
    user: [{
        fullName:"",
        email:"",
    }],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

const apiurl = 'https://6249a1e8fd7e30c51c042ccb.mockapi.io/api/signup'


// Signup User
export const signupUser = createAsyncThunk(apiurl+'/signup', async (userData, thunkAPI) => {
    try {
        return await userService.signupUser(userData)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})


export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
        .addCase(signupUser.pending, (state) => {
            state.isLoading = true
        })
        .addCase(signupUser.fulfilled, (state,action)=> {
            state.isLoading = false
            state.isSuccess = true
            state.user.push(action.payload)
        })
        .addCase(signupUser.rejected, (state,action)=> {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
    },
})

export const {reset} = userSlice.actions
export default userSlice.reducer