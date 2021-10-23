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
  flag: string
  capital: string
  region: string
  population: number
  callingCodes: string[]
  subRegion: string
  topLevelDomain: string
  currencies: string[]
  languages: string[]
  borderCountries: string[]
}
