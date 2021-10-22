import React from 'react'
import { Country } from '../@types/country'
import CountryItem from '../components/Country'
import SearchBar from '../components/SearchBar'
import { useCountries } from '../data/countries'
import Layout from '../layouts/default'

type Props = {
  countries: Country[]
}

export default function Home({ countries }: Props) {
  const { data } = useCountries()
  return (
    <Layout>
      <div className="mx-20">
        <SearchBar />
        <div className="mx-auto grid gap-10 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 ">
          {(data ?? []).map((c) => (
            <CountryItem c={c} key={c.name + c.flag} />
          ))}
        </div>
      </div>
    </Layout>
  )
}
