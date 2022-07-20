import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import { DatePicker } from 'antd';
import 'antd/dist/antd.css';
import './i18n';
 
 
const root = ReactDOM.createRoot(document.getElementById('root'));

  
ReactDOM.render (
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
     
        <App />
         
     
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);

 