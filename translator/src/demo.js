import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Alert, Breadcrumb } from 'antd';
import { useTranslation } from "react-i18next";
import './i18n';
import { HashRouter, Link, Route, Routes, useLocation } from 'react-router-dom';
 
const Apps = () => 
(
  
  <table className="app-list">
     <div className='s'>
    <tr>
    
      <td> 
           
      <Link to="/apps/1">FrontEnd Developing</Link>：<Link to="/apps/1/detail">different works</Link> 
      </td>
    </tr>
    <tr>
    <td> 
      <Link to="/apps/2">Other programming Abilities</Link>：<Link to="/apps/2/detail">detail</Link>
      </td>
       
    </tr>
    </div>
  </table>
);

const breadcrumbNameMap = {
  '/apps': 'Abilities',
  '/apps/1': 'FrontEnd Developing',
  '/apps/2': 'Other programming Abilities',
  '/apps/1/detail': 'different works',
  '/apps/2/detail': 'Detail',
};
 
const Home = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const pathSnippets = location.pathname.split('/').filter((i) => i);
  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
    
    return (
      <Breadcrumb.Item key={url}>
        <Link to={url}>{breadcrumbNameMap[url]}</Link>
      </Breadcrumb.Item>
    );
  });
  const breadcrumbItems = [
    <Breadcrumb.Item key="home">
      <Link to="/">Main page</Link>
    </Breadcrumb.Item>,
  ].concat(extraBreadcrumbItems);
  return (
    <div className="demo">
      <div className="demo-nav">
          <Link id='homelink' to="/">Main page</Link> 
        <Link id='AppListlink' to="/apps">Abilities</Link>
      </div>
      <Routes>
        <Route path="/apps" element={<Apps />} />
         
      </Routes>
       
      <Breadcrumb>{breadcrumbItems}</Breadcrumb>
      <div className="content"> <div className="descriptionpart1">{t("description.part1")}</div></div> 
    </div>
    
    
  );
};

const App = () => (
  <HashRouter>
    <Home />
  </HashRouter>
);


export default App;