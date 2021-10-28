import { InferGetServerSidePropsType, GetServerSidePropsContext } from 'next'
import React from 'react'
import { axiosInstance } from '../../data'
import { CountryDetailsType } from '../../@types'
import Layout from '../../layouts/default'
import { useRouter } from 'next/router'
import { FaArrowLeft } from 'react-icons/fa'
import CountryDetails from '../../components/CountryDetails'
import Link from 'next/link'

export default function CountryPage({
  country,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
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

export async function getServerSideProps({ query }: GetServerSidePropsContext) {
  const { name } = query
  let { data } = await axiosInstance.get<CountryDetailsType[]>('/name/' + name)

  return {
    props: { country: (data && data[0]) ?? {} },
  }
}
