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
          <Routes>
            <Route exact path="/first-last-test-react/" element={<HomePage data={data}/>} />
            <Route path="/first-last-test-react/who" element={<WhoPage data={data}/>} />
            <Route path="/first-last-test-react/what" element={<WhatPage data={data}/>} />
            <Route path="/first-last-test-react/where" element={<WherePage data={data}/>} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
