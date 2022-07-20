import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Switch } from 'antd';
import "./App.css";
import "./dark-mode.css";

const onChange = (checked) => {
  console.log(`switch to ${checked}`);
};
let switchMode = document.getElementById("switchMode");

switchMode.onclick = function () {
    let theme = document.getElementById("theme")

    if (theme.getAttribute("href") === "App.css") {
        theme.href = "dark-mode.css"; }
        else {
            theme.href = "App.css";
        }
    }
    export {switchMode};
    
const App = () => <Switch defaultChecked onChange={switchMode} />;

export default App;