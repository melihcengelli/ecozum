import axios from 'axios'


const API_URL = 'https://6249a1e8fd7e30c51c042ccb.mockapi.io/api/payment'

// Odeme Yap
const odemeYap = async (paymentData) => {
    const response = await axios.post(API_URL, {'packageIds':paymentData.packageIds,'CardHolderName':paymentData.CardHolderName,'cardNumber':paymentData.cardNumber,'expireDate':paymentData.expireDate,'cvv':paymentData.cvv,'totalAmount':paymentData.totalAmount})

    return console.log(response.data)
    
}

const odemeService = {
    odemeYap,
    
}

export default  odemeService
