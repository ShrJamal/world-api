import React from 'react'
import { updateRegion, updateSearch } from '../data/countries'

export default function SearchBar() {
  return (
    <div className="my-4 flex sm:flex-row flex-col justify-between">
      <input
        className="input input-bordered min-w-[300px] mb-2"
        placeholder="Search for a country.."
        type="text"
        name="country"
        id="country"
        onChange={(e) => updateSearch(e.target.value)}
      />
      <select
        className="select select-bordered min-w-[200px] shodow-lg"
        onChange={(e) => updateRegion(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Africa">Africa</option>
        <option value="Europe">Europe</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  )
}
