import React from 'react'
import Link from 'next/link'
import { Country } from '../@types/country'

type Props = {
  c: Country
}

export default function CountryItem({ c }: Props) {
  return (
    <Link href={'/countries/' + c.name}>
      <div className="card bordered rounded-lg min-w-[210px] min-h-[300px] shadow-xl bg-white dark:bg-base-100">
        <img className="h-full w-full shadow-md" src={c.flag} loading="lazy" />
        <div className="m-4 flex-1">
          <h1 className="my-2 font-bold text-md">{c.name}</h1>
          <p>
            <strong>Population:</strong> {c.population.toLocaleString()}
          </p>
          <p>
            <strong>Region:</strong> {c.region}
          </p>
          <p>
            <strong>Capital:</strong> {c.capital}
          </p>
        </div>
      </div>
    </Link>
  )
}
