import React from 'react'

const FilterSection = () => {
  return (<div className={`flex justify-between items-center pt-8 py-4 w-full border-b`}>
    <h1 className={`text-lg font-bold text-slate-700`}>Articles</h1>
    <p className={`bg-gray-100 px-4 py-2 rounded-3xl text-xs text-gray-600`}>Following</p>
  </div>)
}

export default FilterSection