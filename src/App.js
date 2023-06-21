import React, { useState, useEffect } from 'react'
import './App.css'
import { CarList } from './Components/CarList'
import { Add } from './Components/Add'

import axios from 'axios'






function App() {

  //Here we set the list. this can then be passed as props
  const [dbList, setlist] = useState()


  async function getData() {
    const data = await axios.get('http://localhost:3001/')
    console.log(data.data)
    setlist(data.data)
  }

  useEffect(() => {
    getData()
  }, [])


  async function dbCallback() {
    const data = await axios.get("http://localhost:3001/")
    setlist(data.data)
  }




  return (
    <div className="App">
      <header className="App-header">
        <h1>Car listing</h1>
      </header>
      <section>
        <CarList dbList={dbList} dbCallback={dbCallback} />
      </section>
      <section>
        <Add dbCallback={dbCallback} />
      </section>
    </div>
  )
}

export default App
