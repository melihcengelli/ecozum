import React from 'react'
import Header from '../Components/Header'
import { CheckCircleOutlined } from '@ant-design/icons';

function Tamamlandi() {
  return (
    <>
    <div className='Tamamlandi'>
      <Header/>
      <div id="tamamlandi">
        <div id="tamamlandibox">
          <div id="tik">
            <CheckCircleOutlined style={{ fontSize: '100px'}}/>
            <br></br>
            <br></br>
            <h2 style={{ fontWeight: "bold"}}>Başarıyla Tamamlandı!</h2>
          </div>
        </div>
      </div>
    </div>
    </>

  )
}

export default Tamamlandi