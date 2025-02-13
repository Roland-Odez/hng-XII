import React from 'react'
import FormHead from './FormHead'
import { Alatsi, Road_Rage } from 'next/font/google'
import Image from 'next/image'

const alatsi = Alatsi({subsets: ['latin'], weight: ['400']})
const roadRage = Road_Rage({ subsets: ['latin'], weight: ['400'], style: ['normal'] })

const FormStepThree = () => {
  return (
    <div className='flex flex-col p-6 border border-secondary-2 rounded-3xl bg-primary-4 gap-y-8'>
        <FormHead className='flex md:hidden' />

        <div>
            <h1 className={`${alatsi.className} text-2xl md:text-3xl md:text-center text-white-3` }>Your Ticket is Booked!</h1>
            <p className='text-white-2 text-base md:text-center'>You can download or Check your email for a copy</p>
        </div>

        <div className='ticket-bg-image h-[120px] md:h-[200px] w-full md:w-[562px] grid grid-cols-12 gap-x-3 md:gap-x-4 lg:gap-x-5'>
            <div className='border border-secondary-4 col-span-10'>
                <div className='flex items-start gap-x-4 p-1 pt-1 pl-1 text-white-3'>
                    <div>
                        <Image src='/bar-code.png' alt='bar code' className='w-[97px] h-[97px] md:w-[160px] md:h-[160px]' width={120} height={120} />
                    </div>
                    <div>
                    <h1 className={`${roadRage.className} text-3xl md:text-6xl font-Road_Rage`}>Techember <br className='hidden md:block' /> Fest "25</h1>
                    <div className='flex items-start justify-start text-xs md:text-base gap-x-2 flex-col pt-1 md:pt-0'>
                        <span>📍 [Event Location]</span>
                        <span>📅 March 15, 2025 | 7:00 PM</span>
                    </div>
                    </div>
                </div>
                <div className='text-white-3 md:text-secondary-2 text-[7px] md:text-sm pl-4 md:pt-0'>Ticket for 1 entry only</div>
            </div>
            <div className=' border border-secondary-4 col-span-2'></div>
        </div>
    </div>
  )
}

export default FormStepThree