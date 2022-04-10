import React from 'react'
import Header from '../Components/Header'
import { Input } from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

import { Button } from 'antd';


function Odeme() {
  return (
    <div className='Odemeler'>
      <Header/>
      <div id="odeme">
        <div id="kartbilgileriall">
          <p id="kartbilgileribaslik">Kart Bilgileri</p>
          <div id="kartbilgileri">
            <div id="karbilgileriupside">
              <div id="kartisimsoyisiminput">
                <p>Kart Üzerindeki İsim Soyisim</p>
                <Input id="openinputs" size="large" placeholder="" required />
              </div>
            </div>
            <br></br>
            <div id="kartbilgileribottomside">
              <div id="kartnumarası">
                <p>Test</p>
                <Input id="kartbilgileribottomsideitem" size="large" placeholder=""  required />
              </div>
              <div id="sonkullanma">
                <p>Test</p>
                <Input id="kartbilgileribottomsideitem" size="large" placeholder=""  required />
              </div>
              <div id="cvv">
                <p>Test</p>
                <Input id="kartbilgileribottomsideitem" size="large" placeholder=""  required />
              </div>

            </div>
          </div>
          <br></br>
          <div id="sozlesme">
            <p id="sozlesmebaslik">Sözleşme</p>
            <p id="sozlesmeicerigi">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                but also the leap into electronic typesetting, remaining essentially unchanged.
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
        </div>
        <div id="sepet">
          <p id="sepetbasligi">Sepetteki Paketler</p>
          <div id="sepettekipaketler">
            <div id="paketsecenekborder">
              <span id="paketsecenek">
                <p>Paket Adı</p>
                <p id="sepeticitutar">350₺</p>
              </span>
            </div>
            <div id="paketsecenekborder">
              <span id="paketsecenek">
                <p>Paket Adı</p>
                <p id="sepeticitutar">350₺</p>
              </span>
            </div>
            <div id="paketsecenekborder">
              <span id="paketsecenek">
                <p>Paket Adı</p>
                <p id="sepeticitutar">350₺</p>
              </span>
            </div>
            <div id="paketsecenekborder">
              <span id="paketsecenek">
                <p>Paket Adı</p>
                <p id="sepeticitutar">350₺</p>
              </span>
            </div>
            

          </div>
          <div id="sepetbutonu">
            <Button id="sepetbuton" type="primary" shape="round"  size={'large'}>
                Devam Et
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Odeme