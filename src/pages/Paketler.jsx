import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { Typography } from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Button } from 'antd';
import { style } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import { getPackages } from '../stores/Slices/paketlerSlice';



function Paketler() {
    const dispatch = useDispatch();
    const packages = useSelector(state => state.paketler)
    const { Text} = Typography;  
    const [paketid, setPaketId] = useState("paketboxes")
    const addbordercolor = (e) => {
        if (e.target.className=="paketboxes2"){
            e.target.className="paketboxes"

        } else {
            e.target.className="paketboxes2"
        }
        
    }

    useEffect(()=> {
        dispatch(getPackages())
    })
  return (
    <div className='Paketler'>
        <Header/>
        <div id="paketlist">
            <div id="paketbox">
                <div id="upside">
                    <div id="1" className={paketid} onClick={addbordercolor}>
                        <div id="gorsel" style={{pointerEvents:'none'}}>
                            Görsel
                        </div>
                        <div id="paketicerik" style={{pointerEvents:'none'}}>
                            <div id="paketdetay">
                                <span id="paketadi">Paket Adı</span>
                                <span id="fiyat">336₺</span>
                            </div>
                            <ul id="listdetayul">
                                <li id="listdetay">Detay1</li>
                                <li id="listdetay">Detay2</li>
                                <li id="listdetay">Detay3</li>
                            </ul>
                            <br></br>
                            <hr></hr>
                            <ul id="listdetayul">
                                <li id="etiketdetay">Etiket 1</li>
                                <li id="etiketdetay">Etiket 2</li>
                                <li id="etiketdetay">Etiket 3</li>
                            </ul>
                        </div>
                    </div>
                    <div id="2" className={paketid} onClick={addbordercolor}>
                    <div id="gorsel" style={{pointerEvents:'none'}}>
                            Görsel
                        </div>
                        <div id="paketicerik" style={{pointerEvents:'none'}}>
                            <div id="paketdetay">
                                <span id="paketadi">Paket Adı</span>
                                <span id="fiyat">336₺</span>
                            </div>
                            <ul id="listdetayul">
                                <li id="listdetay">Detay1</li>
                                <li id="listdetay">Detay2</li>
                                <li id="listdetay">Detay3</li>
                            </ul>
                            <br></br>
                            <hr></hr>
                            <ul id="listdetayul">
                                <li id="etiketdetay">Etiket 1</li>
                                <li id="etiketdetay">Etiket 2</li>
                                <li id="etiketdetay">Etiket 3</li>
                            </ul>
                        </div>
                    </div>
                    <div id="3" className={paketid} onClick={addbordercolor}>
                    <div id="gorsel" style={{pointerEvents:'none'}}>
                            Görsel
                        </div>
                        <div id="paketicerik" style={{pointerEvents:'none'}}>
                            <div id="paketdetay">
                                <span id="paketadi">Paket Adı</span>
                                <span id="fiyat">336₺</span>
                            </div>
                            <ul id="listdetayul">
                                <li id="listdetay">Detay1</li>
                                <li id="listdetay">Detay2</li>
                                <li id="listdetay">Detay3</li>
                            </ul>
                            <br></br>
                            <hr></hr>
                            <ul id="listdetayul">
                                <li id="etiketdetay">Etiket 1</li>
                                <li id="etiketdetay">Etiket 2</li>
                                <li id="etiketdetay">Etiket 3</li>
                            </ul>
                        </div>
                    </div>
                    <div id="4" className={paketid} onClick={addbordercolor}>
                    <div id="gorsel" style={{pointerEvents:'none'}}>
                            Görsel
                        </div>
                        <div id="paketicerik" style={{pointerEvents:'none'}}>
                            <div id="paketdetay">
                                <span id="paketadi">Paket Adı</span>
                                <span id="fiyat">336₺</span>
                            </div>
                            <ul id="listdetayul">
                                <li id="listdetay">Detay1</li>
                                <li id="listdetay">Detay2</li>
                                <li id="listdetay">Detay3</li>
                            </ul>
                            <br></br>
                            <hr></hr>
                            <ul id="listdetayul">
                                <li id="etiketdetay">Etiket 1</li>
                                <li id="etiketdetay">Etiket 2</li>
                                <li id="etiketdetay">Etiket 3</li>
                            </ul>
                        </div>
                    </div>
                    <div id="5" className={paketid} onClick={addbordercolor}>
                    <div id="gorsel" style={{pointerEvents:'none'}}>
                            Görsel
                        </div>
                        <div id="paketicerik" style={{pointerEvents:'none'}}>
                            <div id="paketdetay">
                                <span id="paketadi">Paket Adı</span>
                                <span id="fiyat">336₺</span>
                            </div>
                            <ul id="listdetayul">
                                <li id="listdetay">Detay1</li>
                                <li id="listdetay">Detay2</li>
                                <li id="listdetay">Detay3</li>
                            </ul>
                            <br></br>
                            <hr></hr>
                            <ul id="listdetayul">
                                <li id="etiketdetay">Etiket 1</li>
                                <li id="etiketdetay">Etiket 2</li>
                                <li id="etiketdetay">Etiket 3</li>
                            </ul>
                        </div>
                    </div>
                    <div id="6" className={paketid} onClick={addbordercolor}>
                    <div id="gorsel" style={{pointerEvents:'none'}}>
                            Görsel
                        </div>
                        <div id="paketicerik" style={{pointerEvents:'none'}}>
                            <div id="paketdetay">
                                <span id="paketadi">Paket Adı</span>
                                <span id="fiyat">336₺</span>
                            </div>
                            <ul id="listdetayul">
                                <li id="listdetay">Detay1</li>
                                <li id="listdetay">Detay2</li>
                                <li id="listdetay">Detay3</li>
                            </ul>
                            <br></br>
                            <hr></hr>
                            <ul id="listdetayul">
                                <li id="etiketdetay">Etiket 1</li>
                                <li id="etiketdetay">Etiket 2</li>
                                <li id="etiketdetay">Etiket 3</li>
                            </ul>
                        </div>
                    </div>
                    


                </div>
                <div id="bottomside">
                    
                    <div id="left">
                        <Text id="bottomtext" strong>Seçilen Paket Tutarı:</Text>
                    </div>
                    <div id="right">
                        <Button id="paketbuton" type="primary" shape="round"  size={'large'}>
                            Devam Et
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    
    </div>
    
  )
}

export default Paketler