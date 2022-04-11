import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { Input } from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'antd';
import { Navigate, useNavigate } from 'react-router-dom';
import { getPackages } from '../stores/Slices/paketlerSlice';
import { odemeYap } from '../stores/Slices/odemeSlice'

function Odeme() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const packages = useSelector(state => state.paketler)
  
  const [selected, setSelected] = useState([]);
  let selectedarray = [];
  let selectedamount = 0;
  const selecteditems = window.location.href.split("-").splice(1)
 
  useEffect(()=>{
    
    
    dispatch(getPackages())

    for (let i=0; i<packages.paketler[1].length; i++){
      if (selecteditems.includes(String(packages.paketler[1][i].id))){
        selectedarray.push(packages.paketler[1][i])
        selectedamount=[Number(selectedamount)+Number(packages.paketler[1][i].amount)]
        
      }
    }
    
    
  },[dispatch])

  const [cardnumber, setCardNumber] = useState();
  const cardnumberhandler = (e) => {
        setCardNumber(e.target.value)
        
  }

  const [holdername, setHolderName] = useState();
  const holdernamehandler = (e) => {
    setHolderName(e.target.value)
    
  }

  const [sonkullanma, setSonKullanma] = useState();
  const sonkullanmahandler = (e) => {
    setSonKullanma(e.target.value)
    
  }
 
  const [cvvdeger , setCvvDeger] = useState();
  const cvvdegerhandler = (e) => {
    setCvvDeger(e.target.value)
    
  }

  let paymentData = {
    packageIds: [selecteditems],
    cardHolderName: holdername,
    cardNumber: cardnumber,
    expireDate: sonkullanma,
    cvv: cvvdeger,
    totalAmount: selectedamount,
  }

  const odemeYapma = () => {
    dispatch(odemeYap(paymentData))
    navigate('/tamamlandi')
  }

  return (
    <>
    <div className='Odemeler'>
      <Header/>
      <div id="odeme">
        <div id="kartbilgileriall">
          <p id="kartbilgileribaslik">Kart Bilgileri</p>
          <div id="kartbilgileri">
            <div id="karbilgileriupside">
              <div id="kartisimsoyisiminput">
                <p>Kart Üzerindeki İsim Soyisim</p>
                <Input id="openinputs" size="large" placeholder="" onChange={holdernamehandler}  required />
              </div>
            </div>
            <br></br>
            <div id="kartbilgileribottomside">
              <div id="kartnumarası">
                <p>Kart Numarası</p>
                <Input id="kartbilgileribottomsideitem" size="large" placeholder=""  value={cardnumber} onChange={cardnumberhandler} required />
              </div>
              <div id="sonkullanma">
                <p>Son Kul. Tar.</p>
                <Input id="kartbilgileribottomsideitem" size="large" placeholder="" type="date" onChange={sonkullanmahandler} required />
              </div>
              <div id="cvv">
                <p>CVV/CVC</p>
                <Input id="kartbilgileribottomsideitem" size="large" placeholder="" onChange={cvvdegerhandler} required />
              </div>

            </div>
          </div>
          
          <div id="sozlesme">
            <p id="sozlesmebaslik">Sözleşme</p>
            <div id="sozlesmeicerigi">
              <p id="sozlesmeiciyazi">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                but also the leap into electronic typesetting, remaining essentially unchanged.
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
          </div>
        </div>
        <div id="sepet">
          <p id="sepetbasligi">Sepetteki Paketler</p>
          <div id="sepettekipaketler">

            {
                
                  packages.paketler[1].map((item) => {
                    return (
                      selecteditems.includes(String(item.id)) ?
                      <div id="paketsecenekborder">
                        <span id="paketsecenek">
                          <p>{item.name}</p>
                          <p id="sepeticitutar">{item.amount}{item.currency}</p>
                        </span>
                      </div>
                      :
                      <></>
                      
                    )
                  })
               
              
          
            }
            
           

          </div>
          <div id="sepetbutonu">
            <Button id="sepetbuton" type="primary" shape="round"  size={'large'} onClick={()=> odemeYapma() }>
                Ödeme Yap
            </Button>
          </div>
        </div>
      </div>
    </div>
    </>
    
  )
}

export default Odeme