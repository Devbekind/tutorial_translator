import React from "react";
import "./App.css";
import { useTranslation } from "react-i18next";
import Demo from './demo';
import { Switch } from "antd";
 
 

function App() {
  const { t, i18n } = useTranslation();
  let switchMode = document.getElementById("switchMode");
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="App">
     <div className="Header_novis">  
      <table> 
       
         
      
        <tr>
        <td> 
        <div className="logo"> 
        <img src="./img/Azovstal_logo.png"/>
        
        </div>
        </td><td> 
        <div  > 
          <table> <tr><td>night theme</td> </tr>
         <tr> <td>  
        <Switch id="switchMode" className="switch"/></td></tr>
        </table>
        </div>
        </td><td><div className="title"><h1>{t("title")}</h1></div></td>
        <td> 
        <div className="buttons">
      <button className="buttonen" onClick={() => changeLanguage("en")}><img id="photo" src="./img/eng.png"/></button>
      <button className="buttondk" onClick={() => changeLanguage("da-DK")}><img id="photo" src="./img/dk.png"/></button>
      <button className="buttonua" onClick={() => changeLanguage("ua")}><img id="photo" src="./img/ua.jpg"/></button>
      </div>
      </td>
      </tr>
      </table>
      </div>  
      <div className='demo'>
        <table>
            <tr>
              <td>
              <Demo>  </Demo>
              </td>
            </tr>
            {/* <tc>
              <td>
               <div   >  
                
               </div>
              </td>
            </tc> */}
        
         </table>
      </div>
       
      {/* <div className="textmenu"> 
       
       
      
       
      <div className="descriptionpart3">{t("description.part3")}</div>
       
      </div> */}

      <div className="footer">
      <div className="descriptionpart2">{t("description.part2")}</div>
      </div>
    </div>
  );
}

export default App;