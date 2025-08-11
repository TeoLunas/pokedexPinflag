import { useSelector } from 'react-redux';
import { usePokemonStore } from './hooks/usePokemonStore'
import { useEffect } from 'react';

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
      <p className='text-center text-5xl'>HOLA</p>    
    </>
  )
}

export default App
