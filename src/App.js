
import './App.css';
import { Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { MailOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Typography } from 'antd';
import { Button } from 'antd';
import {useNavigate} from 'react-router-dom'
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { signupUser } from './stores/Slices/userSlice';


const { Text} = Typography;


function App() {
  const navigate = useNavigate();
  
  const dispatch = useDispatch();
  
  const [firstInp, setFirstInp] = useState()
  const handleChangeFirstInp = (e) => {
    setFirstInp(e.target.value)
  }

  const [secondInp, setSecondInp] = useState()
  const handleChangeSecondInp = (e) => {
    setSecondInp(e.target.value)
  }

  const userData=[
    {
      'fullName':firstInp,
      'email':secondInp,
    }
  ]

  const buttonOnClick = () => {
    console.log(firstInp,secondInp)
    dispatch(signupUser(userData)).then(navigate('/paketler'))
  }

 

  
  return (
    <>
      <div className="App">
        <div id="open">
          <div id="openinside">
            <Text id="openinput" strong>Adınız Soyadınız</Text>
            <Input id="openinputs" size="large" placeholder="" prefix={<UserOutlined />} onChange={handleChangeFirstInp} required />
            <br></br>
            <br></br>
            <Text id="openinput" strong>Email Adresiniz</Text>
            <Input id="openinputs" size="large" placeholder="" prefix={<MailOutlined />} onChange={handleChangeSecondInp} required />
            <br></br>
            <br></br>
            <Button type="primary" shape="round"  size={'large'} onClick={() => buttonOnClick()}>
              Devam Et
            </Button>

          </div>
        </div>
            
      </div>
    </>
  );
}

export default App;
