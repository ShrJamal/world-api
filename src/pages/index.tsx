import React from 'react'
import { reactQuery } from '~/hooks'
import CountryItem from '~/components/Country'
import SearchBar from '~/components/SearchBar'
import { fetchCountries, useCountries } from '~/hooks/countries'
import Layout from '~/layouts/default'
import { dehydrate } from 'react-query'

export default function Home() {
  const { data } = useCountries()
  return (
    <Layout>
      <div>
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

export async function getStaticSideProps() {
  await reactQuery.prefetchQuery('countries', fetchCountries)
  return {
    props: {
      dehydratedState: dehydrate(reactQuery),
    },
  }
}
