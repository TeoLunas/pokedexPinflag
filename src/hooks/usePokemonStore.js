import { useDispatch, useSelector} from "react-redux";
import { pokemonApi } from '../api/index';
import { setPokemonList, setPokemonListDetail } from '../store/redux/pokemonSlice'

export const usePokemonStore = () => {

    const dispatch = useDispatch();

    const getListPokemons = async() => {
        try {
            console.log('>getListPokemons iniciada<')
            const { data } = await pokemonApi.get('/pokemon?limit=30&offset=0');
            // console.log('RESP', data)
            dispatch(setPokemonList(data));
            dispatch(setPokemonListDetail(data.results))
            const names = data.results.map((r) => r.name);
          await getPokemonDetail(names);
        } catch (error) {
            console.log(getListPokemons, error)
        }
    };

    const getPokemonDetail = async(name) => {
        // console.log(name)
       const a = await Promise.allSettled(
        name.map(name => pokemonApi.get(`/pokemon/${name}`))
       );
    
       const details = a
        .filter(p => p.status === 'fulfilled')
        .map(p => p.value.data)
        .map(c => ({
            id: c.id,
            name: c.name,
            sprites: c.sprites?.other.showdown.front_default
        }));

        dispatch(setPokemonListDetail(details));

    };

    

    return {
        getListPokemons,
        getPokemonDetail
    }

}


