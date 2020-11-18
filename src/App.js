import React, { useState, useEffect } from "react";

import LoadingWrapper from './components/LoadingWrapper';
import { _GET } from './db/Db';

import './App.css';

_GET()

function App() {

  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    _GET(setData);
    setInterval(() =>{
      _GET(setData)
    }, 5000)
  }, []);

  return (
    <div className="App">
      <LoadingWrapper barName="FooBar" queueNr={data.inQueue} people={data.personel} loggedAt={data.loggedAt}></LoadingWrapper>
    </div>
  );
}

export default App;
