import React from 'react'
import ExclusiveLoggedInContent from '@/components/ExclusiveLoggedInContent/ExclusiveLoggedInContent'
import RecommendedProfiles from '@/components/RecommendedProfiles/RecommendedProfiles'
import ReadingList from '@/components/ReadingList/ReadingList'
import ArticlePreview from '@/components/ArticlePreview/ArticlePreview'
import FilterSection from '@/components/FilterSection/FilterSection'
import SearchSection from '@/components/SearchSection/SearchSection'

const Page = () => {
  return (<div className={`flex h-full w-full`}>
    {/*Left Container*/}
    <div className={`w-full lg:w-4/6 pt-8 lg:pr-8 lg:border-e`}>
      {/*Search section*/}
      <SearchSection/>

      {/*Filter Section*/}
      <FilterSection/>

      {/*Article Section*/}
      <ArticlePreview/>
      <ArticlePreview/>
      <ArticlePreview/>
    </div>

    {/*Right container*/}
    {/*<aside className={`w-2/6 pt-8 pl-8`}>*/}
    <aside className="hidden w-2/6 pt-8 pl-8 lg:block">

      {/*promotion*/}
      <ExclusiveLoggedInContent/>

      {/*Recommended Profiles*/}
      <div className={`my-8`}>
        <h1 className={`text-md font-bold text-gray-700`}>People you might be interested</h1>
        <RecommendedProfiles/>
        <RecommendedProfiles/>
        <RecommendedProfiles/>
      </div>

      {/*Last read content*/}
      <div>
        <h1 className={`text-md mt-6 font-bold text-gray-700`}>My reading list</h1>
        <ReadingList/>
        <ReadingList/>
        <ReadingList/>
      </div>
    </aside>
  </div>)
}

export default Page