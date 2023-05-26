'use client'
import React from 'react'
import Button from '@/components/ui/Button'
import avatarImage from '@/assets/images/avatarImages/avatar_2.jpg'
import Image from 'next/image'

const RecommendedProfiles = () => {
  return (
    <div className={`flex justify-between items-center mt-4`}>
      <div className={`flex justify-center items-center`}>
        <Image
          src={avatarImage}
          alt={`logo`}
          className={`inline-block h-12 w-12 rounded-full ring-2 ring-white border`}
        />
        <div className={`ml-2`}>
          <h1 className={`text-md font-semibold text-slate-600`}>
            Rishabh Shukla
          </h1>
          <p className={`text-slate-400 text-xs `}>
            Creative Director of BBC Weather
          </p>
        </div>
      </div>
      <Button className={`rounded-full`} size={`small`} variant={`outlined`}>
        Follow
      </Button>
    </div>
  )
}

export default RecommendedProfiles
