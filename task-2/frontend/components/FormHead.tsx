import React from 'react'
import { Progress } from './ui/progress'
import { Noto_Serif } from 'next/font/google'

const notoSerif = Noto_Serif({
  weight: ['400'],
  subsets: ['latin'],
})


const FormHead = ({className, step }: {className: string, step: number}) => {
  // console.log(step)
  return (
    <div className={`${className} flex-col gap-y-2`}>
        <div className='flex items-start flex-wrap gap-y-1 md:items-center flex-row justify-start md:justify-between'>
        <p className='text-2xl md:text-3xl flex-1 text-white-3'  style={notoSerif.style}> {step === 3? "Ready" : "Ticket Selection"}</p>
        <p className='text-white-3 text-base'>Step {`${step}/3`}</p>
        </div>
        <Progress value={(step * 33) + 1} className='' />
  </div>
  )
}

export default FormHead