import React from "react";
import "./App.css";
import { useTranslation } from "react-i18next";
import Demo from './demo';
function App() {
  const { t, i18n } = useTranslation();

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
        <img src=""/>
        
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
            <tc>
              <td>
          <Demo> <div className="content">content</div>content</Demo>
              </td>
            </tc>
            <tc>
              <td>
               <div   >  
               <div className="descriptionpart1">{t("description.part1")}</div>
               </div>
              </td>
            </tc>
        
         </table>
          </div>
       
      <div className="textmenu"> 
       
       
      
       
      {/* <div className="descriptionpart3">{t("description.part3")}</div> */}
       
      </div>

      <div className="footer">
      <div className="descriptionpart2">{t("description.part2")}</div>
      </div>
    </div>
  );
}

export default App;