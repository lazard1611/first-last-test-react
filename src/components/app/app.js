import React from "react";
import './app.scss';
import Header from '../header/header';
import Cursor from '../cursor/cursor';
import Ticker from '../ticker/ticker';
import Decor from '../decor/decor';
import Title from '../title/title';

const App = () => {
  const data = {
    links: [
      {label: 'where?', url: '#'},
      {label: 'what?', url: '#'},
      {label: 'who?', url: '#'},
    ],
    lgLinks: [
      {label: 'UK', url: '#'},
      {label: 'RU', url: '#'},
    ],
    title: 'FULL-CYCLE EVENT AGENCY'
  };

  return (
    <div className="App">
      <Header data ={data}/>

      <div className="wrapper">
        <div className="base">
          <section className="section">
            <div className="section_in">
              <Title label={data.title}/>
            </div>
          </section>
          <Decor/>
          <Ticker/>
          <Cursor/>
        </div>
      </div>
    </div>
  );
}

export default App;
