import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { getPokemons, getTypes } from '../Redux/actions';
import { useDispatch } from 'react-redux';

const Filters = () => {
    const pokes = useSelector((state)=> state.allPokes)
    const types = useSelector((state)=> state.types);
    const dispatch = useDispatch()
    const [order, setOrder] = useState('');
    const [filtered, setFiltered] = useState('')
    useEffect(()=>{
        dispatch(getPokemons());
        dispatch(getTypes())
        },[dispatch])

    // eslint-disable-next-line no-unused-vars
    const defaultSort = () => pokes.sort((a, b) => (a.id > b.id) ? 1 : -1);

    const handleOrder = (e) => {
        setOrder(e.target.value)
    }
    const handleFilter = (e) => {
        setFiltered(e.target.value)
      }
    //Sort by name
      if (order === 'DSC') {
        var sorted = pokes?.sort((a, b) => (a.name < b.name) ? 1 : -1)
      }
      if (order === 'ASC') {
        sorted = pokes?.sort((a, b) => (a.name > b.name) ? 1 : -1)
      }
      //Sort by ATK
      if (order === 'LOW') {
        var sortedATK = pokes?.sort((a, b) => (a.attack < b.attack) ? 1 : -1)
      }
      if (order === 'HI') {
        sortedATK = pokes?.sort((a, b) => (a.attack > b.attack) ? 1 : -1)
      }
      //Filter by type
      if(filtered !== 'ALL'){
        var product = pokes?.filter(el => el.types.includes(filtered))
        console.log(product)
    }
      if(filtered === "ALL"){
        product = pokes
      }
      //Filter by origin
      if(filtered === 'DB'){
        var srcPoke = pokes?.filter(el => el.id.length > 3)
      }
      if(filtered === 'API'){
        srcPoke = pokes
      }

    return (
        <>
      <label>Sort by name 
      <select onChange={handleOrder} value={sorted}>
          <option value="ASC">A to Z</option>
          <option value="DSC">Z to A</option>
      </select>
      </label>
      <label>Sort by ATK 
      <select onChange={handleOrder} value={sortedATK}>
          <option value="LOW">Low to hi</option>
          <option value="HI">Hi to low</option>
      </select>
      </label>
      <label>Filter by type
      <select onChange={handleFilter} value={product}>
          <option value="ALL">All</option>
          {types?.map((type) => {
            return <option key={type.id}>{type.name}</option>
          })}
      </select>
      </label>
      <label>Filter by source
      <select onChange={handleFilter} value={srcPoke}>
          <option value="MIX">Mixed</option>
          <option value="API">API</option>
          <option value="DB">Createds</option>
      </select>
      </label>
      </>
    )
}
export default Filters