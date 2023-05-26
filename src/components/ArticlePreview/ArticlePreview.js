import React from 'react'
import Image from 'next/image'
import avatarImage from '@/assets/images/avatarImages/avatar_2.jpg'

const ArticlePreview = () => {
  return (<div className={`border-b`}>
    {/*Header Section*/}
    <div className={`flex justify-start items-center py-4`}>
      <Image src={avatarImage} alt={`logo`}
             className={`inline-block h-10 w-10 rounded-full ring-2 ring-white`}/>
      <div className={`ml-2`}>
        <h1 className={`text-md font-semibold text-slate-600`}>Rishabh Shukla</h1>
        <p className={`text-xs text-slate-400`}>Creative Director of BBC Weather</p>
      </div>
    </div>
    {/*Body Section*/}
    <div className={`flex justify-between items-center`}>
      <div>
        <h1 className={`text-2xl font-semibold text-slate-600 pb-4`}>Zero UI: The end of screen-based
          Interfaces and What It Means for Business</h1>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <p className={`text-md text-slate-400`}>Zero UI is a style that's been looming in the shadow for
          some time but is really starting to emerge now. The idea is easy to understand the less the user
          has to think about the interface, the better and more natural it feels.
        </p>
      </div>
      <Image src={avatarImage} alt={`image`} className={`rounded-md w-1/6`}/>
    </div>
    {/*Footer Section*/}
    <div className={`flex justify-start items-center my-4`}>
      <p className={`bg-gray-100 px-4 py-2 rounded-3xl text-xs text-slate-400`}>UX design</p>
      <p className={`bg-gray-100 px-4 py-2 ml-4 rounded-3xl text-xs text-slate-400`}>4 min read</p>
    </div>
  </div>)
}

export default ArticlePreview