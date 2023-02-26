import { React, useState } from 'react'

import './App.css';
import JSON from "./MOCK_DATA.json"

function App() {

  const [searchVal, setSearchVal] = useState('')
  return (
    <div className="App">
      <input className='searchBox' type='text' placeholder='Search' onChange={(e) => setSearchVal(e.target.value)} />
      {JSON.filter((val) => {
        if (searchVal === "") {
          return val
        }

        else if (val.first_name.toLowerCase().includes(searchVal.toLowerCase())) {
          return searchVal
        }
      
      }).map((val, key) => {
        return <div key={key} className='json-data'>
          {val.first_name}
        </div>
      })}
    </div>
  );
}

export default App;
