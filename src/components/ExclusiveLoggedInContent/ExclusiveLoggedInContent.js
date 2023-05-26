'use client'
import React from 'react'
import Image from 'next/image'
import image from '@/assets/images/login.svg'
import Button from '@/components/ui/Button'

const ExclusiveLoggedInContent = () => {
  return (
    <div className={`flex justify-center items-center p-6 bg-gray-100 rounded-3xl`}>
      <div className={`w-4/6`}>
        <h1 className={`text-md font-bold text-gray-700`}>Get unlimited access to everything on Reader.</h1>
        <p className={`text-sm my-2 text-gray-400`}>Plans starting at less than $1/week.</p>
        <Button variant={`outlined`} size={`small`} className={`mt-4`}>Get unlimited access</Button>
      </div>
      <div className={`w-2/6`}>
        <Image src={image} alt={`image`}/>
      </div>
    </div>
  )
}

export default ExclusiveLoggedInContent