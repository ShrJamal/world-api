import React from 'react'
import { CountryDetailsType } from '../@types'

export default function CountryDetails({ c }: { c: CountryDetailsType }) {
  return (
    <div className="flex flex-col md:flex-row justify-between ">
      <div className="md:mr-10 flex-1">
        <img src={c.flag} alt="Country Flag" />
      </div>
      <div className="mt-5 min-w-md flex-1">
        <h1 className="mb-10 text-3xl font-bold">{c.name}</h1>
        <div className="mr-10 grid gap-2 grid-cols-2 lg:grid-cols-2 md:grid-cols-2">
          <h3>
            <strong>Native Name</strong>: {c.name}
          </h3>
          <h3>
            <strong>Populaton</strong>: {c.population.toLocaleString()}
          </h3>
          <h3>
            <strong>Region</strong>: {c.region}
          </h3>
          <h3>
            <strong>Sub Region</strong>: {c.subRegion}
          </h3>
          <h3>
            <strong>Capital</strong>: {c.capital}
          </h3>
          <h3>
            <strong>Currencies</strong>: {c.currencies?.join(',')}
          </h3>
        </div>
      </div>
    </div>
  )
}
