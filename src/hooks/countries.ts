import { useQuery } from 'react-query'
import { axiosInstance, reactQuery } from '.'
import type { CountryDetailsType, CountryType } from '~/@types'

let allCountries: Array<CountryType> | undefined
let region = 'All'
let query = ''

export async function fetchCountries() {
  if (typeof allCountries === 'undefined') {
    const { data } = await axiosInstance.get<CountryType[]>('/all')
    allCountries = data
  }
  let result = Array<CountryType>()
  if (region === 'All') {
    result = allCountries
  } else {
    result = allCountries?.filter((v) => v.region === region) ?? []
  }
  if (query) {
    result =
      result?.filter((v) =>
        v.name.toLowerCase().includes(query.toLowerCase()),
      ) ?? []
  }
  return result
}

export async function fetchCountry(name: string) {
  let { data } = await axiosInstance.get<CountryDetailsType[]>('/name/' + name)
  return data?.length ? data[0] : undefined
}

export function useCountries() {
  return useQuery('countries', fetchCountries, {
    staleTime: 1000, // * 60 * 5,
  })
}
export function useCountry(name: string) {
  return useQuery(['country', name], () => fetchCountry(name), {
    staleTime: 1000, // * 60 * 5,
  })
}

export function updateSearch(q: string) {
  query = q
  reactQuery.invalidateQueries(['countries'])
}

export function updateRegion(_reg: string) {
  region = _reg
  reactQuery.invalidateQueries(['countries'])
}
