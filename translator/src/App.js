import React from "react";
import "./App.css";
import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="App">
      <button onClick={() => changeLanguage("en")}><img id="photo" src="./img/eng.png"/></button>
      <button onClick={() => changeLanguage("ru")}>RU</button>
      <button onClick={() => changeLanguage("ua")}>UA</button>
      <hr />
      <div><h1>{t("title")}</h1></div>
      <div>{t("description.part1")}</div>
      
      <div>{t("description.part2")}</div>
      <div>{t("description.part3")}</div>
       


    </div>
  );
}

export default App;