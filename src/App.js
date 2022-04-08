
import './App.css';
import { Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { MailOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Typography } from 'antd';
import { Button } from 'antd';



const { Text} = Typography;

function App() {
  return (
    <>
      <div className="App">
        <div id="open">
          <div id="openinside">
            <Text id="openinput" strong>Adınız Soyadınız</Text>
            <Input id="openinputs" size="large" placeholder="" prefix={<UserOutlined />} required />
            <br></br>
            <br></br>
            <Text id="openinput" strong>Email Adresiniz</Text>
            <Input id="openinputs" size="large" placeholder="" prefix={<MailOutlined />} required />
            <br></br>
            <br></br>
            <Button type="primary" shape="round"  size={'large'}>
              Devam Et
            </Button>

          </div>
        </div>
            
      </div>
    </>
  );
}

export default App;
