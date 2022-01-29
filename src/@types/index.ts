export type CountryType = {
  name: string
  flag: string
  capital: string
  region: string
  population: number
  callingCodes: string[]
}

export type CountryDetailsType = {
  name: string
  nativeName: string
  capital: string
  flag: string
  region: string
  subregion: string
  population: number
  topLevelDomain: string[]
  currencies: Array<{ name: string; code: string }>
  languages: Array<{ name: string; iso639_1: string }>
}
