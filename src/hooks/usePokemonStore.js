import { useDispatch, useSelector} from "react-redux";
import { pokemonApi } from '../api/index';
import { setPokemonList } from '../store/redux/pokemonSlice'

export const usePokemonStore = () => {

    const dispatch = useDispatch();

    const getListPokemons = async() => {
        try {
            console.log('getListPokemons iniciada')
            const { data } = await pokemonApi.get('/ditto');
            console.log('RESP', data)
            dispatch(setPokemonList(data))
        } catch (error) {
            console.log(error)
        }
    };

    return {
        getListPokemons
    }

}


