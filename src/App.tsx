import React, { useEffect, useState } from 'react';
import './App.css';

export interface AppType {}

const App:React.FC<AppType> = () => {

const [url, setUrl] = useState<string | undefined>('');

useEffect(() => {
  const queryInfo = {active: true, lastFocusedWindow: true};
  chrome.tabs && chrome.tabs.query(queryInfo, tabs => {
    const url = tabs[0].url;
    setUrl(url);
  })
}, [])

  return (
    <div className="App">
      Rishav Kumar <br/>
      {url}
    </div>
  )
}

export default App
