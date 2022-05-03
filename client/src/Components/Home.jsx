import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Link } from "react-router-dom";
import { getPokemons, getTypes } from '../Redux/actions';
import Cards from './Cards'
import Loader from './Loader'
import Searchbar from './Searchbar';

const Home = () => {
    const pokes = useSelector((state) => state.allPokes);
    const types = useSelector((state)=> state.types);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getPokemons());
        dispatch(getTypes())
    }, [dispatch])
if(pokes){
  return (
    <div>I'm home
        <div>
            <Searchbar/>
            {pokes && pokes?.map((pk)=>{
                return (
                    <Link to={'/home/'+ pk.id}>
                    <Cards
                    name={pk.name}
                    image={pk.image}
                    types={pk.types}
                    key={pk.id}
                    />
                    </Link>
                )
            })}
        </div>
    </div>
  )}else{
      return(<Loader/>)
  }
}

export default Home