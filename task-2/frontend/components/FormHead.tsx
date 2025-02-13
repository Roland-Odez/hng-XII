import React from 'react'
import { Progress } from './ui/progress'

const FormHead = (className: {className: string}) => {
  return (
    <div className={`${className.className} flex-col gap-y-2`}>
        <div className='flex items-start gap-y-1 md:items-center flex-col md:flex-row justify-start md:justify-between'>
        <p className='text-2xl md:text-3xl flex-1 text-white-3'>Ticket Selection</p>
        <p className='text-white-3 text-base'>Step 1/3</p>
        </div>
        <Progress value={33} className='' />
  </div>
  )
}

export default FormHead