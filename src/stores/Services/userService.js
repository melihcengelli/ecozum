import axios from 'axios'


const API_URL = 'https://6249a1e8fd7e30c51c042ccb.mockapi.io/api/signup'

// Signup user
const signupUser = async (userData) => {
    const response = await axios.post(API_URL, {'fullName':userData.fullName,'email':userData.email})

    return console.log(response.data)
    
}

const userService = {
    signupUser,
    
}

export default  userService