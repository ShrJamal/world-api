import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FaArrowLeft } from 'react-icons/fa'
import Layout from '~/layouts/default'
import CountryDetails from '~/components/CountryDetails'
import { useCountry } from '~/hooks/countries'

export default function CountryPage() {
  const name = useRouter().query.name as string
  const { data: country, isLoading } = useCountry(name)
  return (
    <Layout>
      <Link href="/" passHref>
        <button className="my-4 flex btn btn-ghost shadow-2xl bg-base-200">
          <FaArrowLeft className="mr-4" />
          Back
        </button>
      </Link>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : country ? (
        <CountryDetails c={country} />
      ) : (
        <h1>Country Not Found {name}</h1>
      )}
    </Layout>
  )
}
