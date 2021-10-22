import { useQuery } from 'react-query'
import { axiosInstance, reactQuery } from '.'
import { Country } from '../@types/country'

let allCountries: Array<Country> | undefined
let region = 'All'
let query = ''

export function useCountries() {
  return useQuery(
    'countries',
    async () => {
      if (typeof allCountries === 'undefined') {
        const { data } = await axiosInstance.get<Country[]>('/all')
        allCountries = data
      }
      let result = Array<Country>()
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
      console.log('Countries', result.length, query, region)

      return result
    },
    {
      staleTime: 1000, // * 60 * 5,
    },
  )
}

export function updateSearch(q: string) {
  console.log('updateSearch', q)
  query = q
  reactQuery.invalidateQueries(['countries'])
}

export function updateRegion(_reg: string) {
  console.log('updateRegion', _reg)
  region = _reg
  reactQuery.invalidateQueries(['countries'])
}
