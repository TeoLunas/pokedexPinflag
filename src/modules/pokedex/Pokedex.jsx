import NavBar from "./components/NavBar";


const Pokedex = () => {
  return (
    <div className="flex flex-col h-screen overflow-hidden">

      <NavBar />

      <main className="flex-1 overflow-y-auto p-4 bg-gray-100">
        <p>Contenido</p>
      </main>

      <footer className="bg-gray-800 text-white p-4">
        <p className="text-sm">Footer</p>
      </footer>
    </div>
  );
}

export default Pokedex