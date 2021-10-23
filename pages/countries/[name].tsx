import { GetServerSideProps } from 'next'
import React from 'react'
import { axiosInstance } from '../../data'
import { CountryDetailsType } from '../../@types'
import Layout from '../../layouts/default'
import { useRouter } from 'next/router'
import { FaArrowLeft } from 'react-icons/fa'
import CountryDetails from '../../components/CountryDetails'
import Link from 'next/link'

type Props = {
  country: CountryDetailsType | undefined
}

export default function CountryPage({ country }: Props) {
  const { name } = useRouter().query
  return (
    <Layout>
      <Link href="/">
        <button className="my-4 flex btn btn-ghost shadow-2xl bg-white dark:bg-base-100">
          <FaArrowLeft className="mr-4" />
          Back
        </button>
      </Link>
      {country?.name ? (
        <CountryDetails c={country} />
      ) : (
        <h1>Country Not Found {name}</h1>
      )}
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { name } = query
  console.log(name)

  let { data } = await axiosInstance.get<CountryDetailsType[]>('/name/' + name)

  return {
    props: { country: (data && data[0]) ?? {} },
  }
}
