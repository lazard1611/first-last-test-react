import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './app.scss';
import Header from '../header/header';
import WherePage from '../../pages/wherePage';
import WhatPage from '../../pages/whatPage';
import WhoPage from '../../pages/whoPage';
import HomePage from "../../pages/homePage";
import {data} from '../../utils/constants';

const App = () => {
  return (
      <Router>
        <div className="App">
          <Header data ={data}/>
            <HomePage data={data}/>
          {/*<Routes>*/}
          {/*  <Route exact path="/" element={<HomePage data={data}/>} />*/}
          {/*  <Route path="/who" element={<WhoPage data={data}/>} />*/}
          {/*  <Route path="/what" element={<WhatPage data={data}/>} />*/}
          {/*  <Route path="/where" element={<WherePage data={data}/>} />*/}
          {/*</Routes>*/}
        </div>
      </Router>
  );
}



export default App;
