import { NavLink, Link } from 'react-router'
import { MdFavorite } from "react-icons/md";
import LogoPokemon from '../../../assets/pokemonlogo.svg'


const NavBar = () => {
    return (
        <nav className="relative bg-red-800/50 after:pointer-events-none">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <Link to="/" >
                        <img src={LogoPokemon} alt="" className="w-24 h-16" />
                    </Link>
                    <MdFavorite
                        className="text-white hover:text-red-500 transition-colors duration-300 cursor-pointer"
                        size={35}
                    />
                </div>
            </div>

        </nav>
    )
}

export default NavBar