import React from 'react'
import Header from '../Components/Header'
import { Typography } from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Button } from 'antd';


function Paketler() {
    const { Text} = Typography;
  return (
    <div className='Paketler'>
        <Header/>
        <div id="paketlist">
            <div id="paketbox">
                <div id="upside">
                    <div id="paketboxes"></div>
                    <div id="paketboxes"></div>
                    <div id="paketboxes"></div>
                    <div id="paketboxes"></div>
                    <div id="paketboxes"></div>
                    <div id="paketboxes"></div>
                    <div id="paketboxes"></div>
                    <div id="paketboxes"></div>


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