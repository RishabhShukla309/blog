import React from 'react'
import SearchBar from '@/components/SearchSection/SearchBar/SearchBar'

const SearchSection = () => {
  return (<div
    className={`flex flex-col md:flex-row items-start w-full justify-between`}
  >
    <div>
      <SearchBar/>
    </div>

    <div className={`flex items-center justify-end mt-4 md:my-auto`}>
      <h1 className={`mr-2 text-lg font-semibold text-slate-500`}>
        My topics:{' '}
      </h1>
      <p
        className={`ml-2 rounded-3xl bg-gray-100 px-4 py-2 text-xs text-gray-600`}
      >
        Design
      </p>
      <p
        className={`ml-2 rounded-3xl bg-gray-100 px-4 py-2 text-xs text-gray-600`}
      >
        Development
      </p>
      <p
        className={`ml-2 rounded-3xl bg-gray-100 px-4 py-2 text-xs text-gray-600`}
      >
        UX
      </p>
      {/*<p className={`ml-2 rounded-3xl bg-gray-100 px-4 py-2 text-xs text-gray-600`}>Marketing</p>*/}
    </div>
  </div>)
}

export default SearchSection
