import React from 'react'
import Image from 'next/image'
import avatarImage from '@/assets/images/avatarImages/avatar_1.jpg'

const ReadingList = () => {
  return (<div className={`flex items-center mt-4`}>
    <Image src={avatarImage} alt={`image`} className={`rounded-md h-32 w-full`}/>
    <div className={`ml-2`}>
      <h1 className={`text-sm font-bold text-slate-700`}>A beginnar's Guide to White Balance in photography.</h1>
      <p className={`text-xs my-2 text-slate-400`}>Along with shutter speed,aperture an ISO, white balance is one of the</p>
      <div className={`flex justify-start items-center`}>
        <Image src={avatarImage} alt={`logo`} className={`inline-block h-6 w-6 rounded-full ring-2 ring-white`}/>
        <p className={`text-xs ml-2 my-2 text-slate-400`}>Rishabh</p>
        <p className={`text-xs ml-2 my-2 text-slate-400`}>Apr 16, 2023</p>
      </div>
    </div>
  </div>)
}

export default ReadingList
