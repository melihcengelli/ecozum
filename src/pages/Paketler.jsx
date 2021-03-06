import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { Typography } from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Button } from 'antd';
import { style } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import { getPackages } from '../stores/Slices/paketlerSlice';
import { Navigate, useNavigate } from 'react-router-dom';



function Paketler() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const packages = useSelector(state => state.paketler)
    const [addsepet, setAddSepet] = useState([]);
    const [sepet, setSepet] = useState([]);

    const [test, setTest] = useState(0);
    
    const { Text} = Typography;  
    const [paketid, setPaketId] = useState("paketboxes")
    const addbordercolor = (e) => {
        if (e.target.className=="paketboxes2"){
            e.target.className="paketboxes"
            setTest(test-packages.paketler[1].find(({id})=> id == e.target.id).amount)
            setSepet([...sepet.slice(0, e.target.id-1)])
            
        } else {
            e.target.className="paketboxes2"
            
            setTest(test+packages.paketler[1].find(({id})=> id == e.target.id).amount)
            setSepet([...sepet,{id:packages.paketler[1].find(({id})=> id == e.target.id).id}])
            
            
        }
        
    }
    let sepetids = ""
    useEffect(()=> {
        dispatch(getPackages())
    },[dispatch])

    const paketlerbutton = () => {
        
        for (let i=0; i<sepet.length; i++){
            sepetids = sepetids+"-"+sepet[i].id
            //sepetids.push(sepet[i].id)
        }
        

        navigate('/odeme/'+sepetids)
        
    }

    
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
                        <Text id="bottomtext" strong>{test==0 ? "Hen??z se??im yap??lmad??" : "Se??ilen Paket Tutar??: "+test+" ???"}</Text>
                    </div>
                    <div id="right">
                        <Button id="paketbuton" type="primary" shape="round"  size={'large'} onClick={() => paketlerbutton()}>
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