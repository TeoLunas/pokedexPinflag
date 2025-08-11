// import { useSelector } from 'react-redux';
import { usePokemonStore } from './hooks/usePokemonStore'
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './modules/home/Home';
import Pokedex from './modules/pokedex/Pokedex';

function App() {

  const { getListPokemons } = usePokemonStore();


  const getData = async() => {
    await getListPokemons();
  };

  useEffect(() => {
    console.log('App.jsx iniciado')
    getData();
  }, [])
  

  return (
    <>
      <BrowserRouter basename='pokedexPinflag'>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path='/pokedex' element={<Pokedex/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
