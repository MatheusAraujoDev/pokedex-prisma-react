import React from 'react';
import './dashboard.css';
import { Datatable } from '../../components/Table';
import PokemonTitle from '../../assets/pokedex_list_title.png'

export default function PokemonList() {

  return (
    <div className='pokedex-page-container'>
      <img className='pokedex-title' src={PokemonTitle} />
      <div className="pokedex-table-container">
        <Datatable />
      </div>
    </div>
  )
}
