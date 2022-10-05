import React from 'react'
import './App.css';
import Navbar from './components/Navbar/Navbar.js'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainter';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (

    <div className="App">
      <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element = {<ItemListContainer />}/>
        <Route path='/category/:categoryId' element = {<ItemListContainer />}/>
        <Route path='/detail/:productId' element = {<ItemDetailContainer />}/>
      </Routes>
    </BrowserRouter>

    </div>
     
  );
}

export default App;
