'use client'
import React, { useState } from 'react'
import { FiSearch } from 'react-icons/fi'

const SearchBar = () => {
  const [value, setValue] = useState('')

  return (
    <div
      className={`flex items-center rounded-full border border-gray-300 focus:border-gray-500 focus:ring-gray-500`}
    >
      <FiSearch class={`ml-4 text-gray-500`}/>
      <input
        type="text"
        placeholder="Search..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={`px-4 py-2 rounded-full text-gray-700 focus:outline-none`}
      />
    </div>
  )
}

export default SearchBar
