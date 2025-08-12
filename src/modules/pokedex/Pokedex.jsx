import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import { useSelector } from "react-redux";
import { usePokemonStore } from "../../hooks/usePokemonStore";
import { MdFavorite, MdSearch } from "react-icons/md";

const Pokedex = () => {
  const { getPokemonDetail } = usePokemonStore();
  const [isLoading, setIsLoading] = useState(true);
  const [pokemonList, setPokemonList] = useState([]);

  // toggles tipo iPhone
  const [isActiveAnimation, setIsActiveAnimation] = useState(true);
  const [isAuto, setIsAuto] = useState(false);

  const pokemonListDetailStore = useSelector(
    (state) => state.pokemon.PokemonListDetail
  );

  useEffect(() => {
    if (pokemonListDetailStore != null) {
      setPokemonList(pokemonListDetailStore);
      setTimeout(() => {
        setIsLoading(false);
      }, 5000);
    }
  }, [pokemonListDetailStore]);

  useEffect(() => {
    // getPokemonDetail(1)
  }, []);

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <NavBar />

      <main className="flex-1 overflow-y-auto p-4 bg-gray-100">
        {/* Barra de búsqueda + controles */}
        <div className="flex flex-col sm:flex-row items-center justify-between bg-white p-4 rounded-lg shadow mb-4 gap-4">
          {/* Buscador con lupa */}
          <div className="flex items-center bg-gray-100 rounded-md px-3 py-3 w-full sm:w-1/2">
            <MdSearch className="text-gray-400 text-xl" />
            <input
              type="text"
              placeholder="Buscar..."
              className="bg-transparent outline-none px-2 flex-1 text-sm"
            />
          </div>

          {/* Controles tipo iPhone */}
          <div className="flex gap-6 w-full sm:w-auto">
            {/* Switch Activar/Desactivar */}
            <div className="flex items-center gap-2">
              <span className="text-sm">Animaciones</span>
              <button
                type="button"
                aria-pressed={isActiveAnimation}
                onClick={() => setIsActiveAnimation((v) => !v)}
                className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-300 ${isActiveAnimation ? "bg-green-500" : "bg-gray-300"
                  }`}
              >
                <div
                  className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${isActiveAnimation ? "translate-x-6" : "translate-x-0"
                    }`}
                />
              </button>
            </div>

            {/* Switch Automático/Manual */}
            <div className="flex items-center gap-2">
              <span className="text-sm">Auto</span>
              <button
                type="button"
                aria-pressed={isAuto}
                onClick={() => setIsAuto((v) => !v)}
                className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-300 ${isAuto ? "bg-blue-500" : "bg-gray-300"
                  }`}
              >
                <div
                  className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${isAuto ? "translate-x-6" : "translate-x-0"
                    }`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Grid de tarjetas */}
        <ul className="grid grid-cols-3 gap-4">
          {isLoading
            ? Array.from({ length: 30 }).map((_, i) => (
              <li
                key={i}
                className="bg-white shadow-lg rounded-xl p-4 flex flex-col justify-between border border-gray-200 aspect-[2/3] animate-pulse"
              >
                {/* Header placeholders */}
                <div className="flex justify-between w-full">
                  <div className="w-12 h-4 bg-gray-300 rounded" />
                  <div className="w-6 h-6 bg-gray-300 rounded-full" />
                </div>
                {/* Imagen placeholder */}
                <div className="flex-1 flex items-center justify-center">
                  <div className="w-[100px] h-[100px] bg-gray-300 rounded" />
                </div>
                {/* Nombre placeholder */}
                <div className="w-2/3 h-4 bg-gray-300 rounded self-center" />
              </li>
            ))
            : pokemonList.map((poke, index) => (
              <li
                key={index}
                className="bg-white shadow-lg rounded-xl p-4 flex flex-col justify-between border border-gray-200 aspect-[2/3]"
              >
                {/* ID arriba izquierda y favorito arriba derecha */}
                <div className="flex justify-between items-center w-full">
                  <p className="text-gray-500 text-sm">ID: {poke.id}</p>
                  <MdFavorite className="text-gray-400 hover:text-red-500 cursor-pointer" />
                </div>
                {/* Imagen al centro */}
                <div className="flex-1 flex items-center justify-center">
                  {isActiveAnimation ? (
                    poke.gif ? (
                      <img
                        src={poke.gif}
                        alt={poke.name}
                        width={100}
                        height={100}
                        className="object-contain"
                      />
                    ) : (
                      <p className="text-red-500">Sin imagen</p>
                    )
                  ) : poke.image ? (
                    <img
                      src={poke.image}
                      alt={poke.name}
                      width={100}
                      height={100}
                      className="object-contain"
                    />
                  ) : (
                    <p className="text-red-500">Sin imagen</p>
                  )}
                </div>

                {/* Nombre abajo centrado */}
                <p className="text-lg font-bold capitalize text-center">
                  {poke.name}
                </p>
              </li>
            ))}
        </ul>
      </main>

      <footer className="bg-gray-800 text-white p-4">
        <p className="text-sm">Footer</p>
      </footer>
    </div>
  );
};

export default Pokedex;
