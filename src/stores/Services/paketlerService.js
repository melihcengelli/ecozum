import axios from 'axios'

const API_URL = ' https://6249a1e8fd7e30c51c042ccb.mockapi.io/api/packages'

// Get packages
const getPackages = async () => {
    const response = await axios.get(API_URL)

    return console.log(response.data)
    
}

const packagesService = {
    getPackages,
    
}

export default  packagesService