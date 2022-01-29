import { updateRegion, updateSearch } from '~/hooks/countries'

export default function SearchBar() {
  return (
    <div className="my-4 flex sm:flex-row flex-col justify-between">
      <input
        className="input input-bordered bg-base-200 min-w-[300px] mb-2"
        placeholder="Search for a country.."
        type="text"
        name="country"
        id="country"
        onChange={(e) => updateSearch(e.target.value)}
      />
      <select
        className="select select-bordered bg-base-200 min-w-[200px] shodow-lg"
        onChange={(e) => updateRegion(e.target.value)}
      >
        {regions.map((region) => (
          <option key={region} value={region}>
            {region}
          </option>
        ))}
      </select>
    </div>
  )
}

const regions = ['All', 'Africa', 'Europe', 'Americas', 'Asia', 'Oceania']
