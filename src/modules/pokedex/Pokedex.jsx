import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import { useSelector } from "react-redux";
import { usePokemonStore } from "../../hooks/usePokemonStore";


const Pokedex = () => {

  const { getPokemonDetail } = usePokemonStore();
  const [isLoading, setIsLoading] = useState(true);

  const [pokemonList, setPokemonList] = useState([]);

  const pokemonListDetailStore = useSelector(state => state.pokemon.PokemonListDetail);

  // const getPokemon = async () => {
  //   await getPokemonDetail(1);
  // };

  useEffect(() => {
    if (pokemonListDetailStore != null) {
      setPokemonList(pokemonListDetailStore);
    }
  }, [pokemonListDetailStore])

  useEffect(() => {
    // getPokemon();
  }, [])



  return (
    <div className="flex flex-col h-screen overflow-hidden">

      <NavBar />

      <main className="flex-1 overflow-y-auto p-4 bg-gray-100">
        <ul className="grid grid-cols-3 gap-4">
          {isLoading ?
            Array.from({ length: 30 }).map((_, i) => (
              <li key={i} className="aspect-square bg-gray-300 rounded-md animate-pulse" />
            ))
            : (
              pokemonList.map((poke, index) => (
                <li
                  key={index}
                  className="bg-white shadow-lg rounded-xl p-4 flex flex-col items-center text-center border border-gray-200"
                >
                  <p className="text-lg font-bold capitalize">{poke.name}</p>
                  <p className="text-gray-500 text-sm">ID: {poke.id}</p>

                  {poke.sprites ? (
                    <img
                      src={poke.sprites}
                      alt={poke.name}
                      width={100}
                      height={100}
                      className="mt-2"
                    />
                  ) : (
                    <p className="mt-2 text-red-500">Sin imagen</p>
                  )}
                </li>
              ))
            )}
        </ul>

      </main>

      <footer className="bg-gray-800 text-white p-4">
        <p className="text-sm">Footer</p>
      </footer>
    </div>
  );
}

export default Pokedex