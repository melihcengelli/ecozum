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

    const [test, setTest] = useState(0);
    
    const { Text} = Typography;  
    const [paketid, setPaketId] = useState("paketboxes")
    const addbordercolor = (e) => {
        if (e.target.className=="paketboxes2"){
            e.target.className="paketboxes"
            setTest(test-packages.paketler[1].find(({id})=> id == e.target.id).amount)
        } else {
            e.target.className="paketboxes2"
            console.log(packages.paketler[1].find(({id})=> id == e.target.id))
            setTest(test+packages.paketler[1].find(({id})=> id == e.target.id).amount)
            console.log(test)
        }
        
    }

    useEffect(()=> {
        dispatch(getPackages())
    },[dispatch])

    
  return (
    <div className='Paketler'>
        <Header/>
        <div id="paketlist">
            <div id="paketbox">
                <div id="upside">
                    {
                        packages.paketler[1] ? 

                        packages.paketler[1].map((item)=> {
                            return (
                            <div id={item.id} className={paketid} onClick={addbordercolor}>
                                <div id="gorsel" style={{pointerEvents:'none'}}>
                                    <img id="image" src={item.imagePath}></img>
                                </div>
                                <div id="paketicerik" style={{pointerEvents:'none'}}>
                                    <div id="paketdetay">
                                        <span id="paketadi">{item.name}</span>
                                        <span id="fiyat">{item.amount}{item.currency}</span>
                                    </div>
                                    <ul id="listdetayul">
                                        {
                                            item.details.map((detay)=>{
                                                return(
                                                    <li id="listdetay">{detay}</li>
                                                )

                                            })
                                        }
                                    </ul>
                                    <br></br>
                                    <hr></hr>
                                    <ul id="listetiketul">
                                        {
                                            item.tags.map((tags)=> {
                                                return (
                                                    <li id="etiketdetay">{tags}</li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                        )})

                        :
                        <></>
                    }


                </div>
                <div id="bottomside">
                    
                    <div id="left">
                        <Text id="bottomtext" strong>{test==0 ? "Henüz seçim yapılmadı" : "Seçilen Paket Tutarı: "+test+" ₺"}</Text>
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