import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Switch } from 'antd';


const onChange = (checked) => {
  console.log(`switch to ${checked}`);
};

const App = () => <Switch defaultChecked onChange={onChange} />;

export default App;