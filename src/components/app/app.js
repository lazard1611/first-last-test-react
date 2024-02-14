import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './app.scss';
import Header from '../header/header';
import WherePage from '../../pages/wherePage';
import WhatPage from '../../pages/whatPage';
import WhoPage from '../../pages/whoPage';
import HomePage from "../../pages/homePage";

const App = () => {
  const data = {
    links: [
      {label: 'where?', url: '/where'},
      {label: 'what?', url: '/what'},
      {label: 'who?', url: '/who'},
    ],
    lgLinks: [
      {label: 'UK', url: '#'},
      {label: 'RU', url: '#'},
    ],
    titleHome: 'FULL-CYCLE EVENT AGENCY',
    titleWhoPage: 'Who?',
    titleWhatPage: 'What?',
    titleWherePage: 'Where?',
    logoURL: '/'
  };

  return (
      <Router>
        <div className="App">
          <Header data ={data}/>
          <Routes>
            <Route exact path="/" element={<HomePage data={data}/>} />
            <Route path="/who" element={<WhoPage data={data}/>} />
            <Route path="/what" element={<WhatPage data={data}/>} />
            <Route path="/where" element={<WherePage data={data}/>} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
