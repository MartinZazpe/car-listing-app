import React, { useState, useEffect } from 'react'
import './App.css'
import { CarList } from './Components/CarList'
import { Add } from './Components/Add'
import { About } from './Components/About'
import { Header } from './Components/Header'
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
        <Header />
      </header>
      <section id="carListSection">
        <CarList dbList={dbList} dbCallback={dbCallback} />
      </section>
      <section id="addCarSection">
        <Add dbCallback={dbCallback} />
      </section>
      {/* <section id="about">
        <About />
      </section> */}
      <footer>
        <div>
          <h4 className="aboutLink">About this website</h4>
          <p>© Made by <a href="http://martinzazpe.com" target="_blank">Martin Zazpe</a></p></div>
      </footer>
    </div>
  )
}

export default App
