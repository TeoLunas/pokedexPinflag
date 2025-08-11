import { useSelector } from 'react-redux';
import { usePokemonStore } from './hooks/usePokemonStore'
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './modules/home/Home';

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
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<Home />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
