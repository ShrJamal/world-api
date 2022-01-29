import Link from 'next/link'
import Image from 'next/image'
import type { CountryType } from '~/@types'

type Props = {
  c: CountryType
}

export default function CountryItem({ c }: Props) {
  return (
    <Link href={'/countries/' + c.name} passHref>
      <div className="card bordered rounded-lg min-w-[210px] min-h-[300px] shadow-xl bg-base-200 cursor-pointer">
        <div className="h-full w-full shadow-md">
          <Image
            src={c.flag}
            alt={c.name + ' Flag'}
            height={40}
            width={50}
            layout="responsive"
          />
        </div>
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
