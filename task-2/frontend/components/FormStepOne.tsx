import React from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from './ui/button'
import FormHead from './FormHead'
import { Road_Rage } from 'next/font/google'

const roadRage = Road_Rage({ subsets: ['latin'], weight: ['400'], style: ['normal'] })


const FormStepOne = () => {
  return (
    <div className='flex flex-col p-6 border border-secondary-2 rounded-3xl bg-primary-4 gap-y-8'>
        <FormHead className='flex md:hidden' />
        <div className='ticket-head-gradient w-full max-h-[243px] md:max-h-[200px] h-full text-sm md:text-base rounded-3xl text-[#fafafa] flex flex-col items-center justify-center p-6 gap-y-4 md:gap-y-2'>
          <h1 className={`${roadRage.className} text-5xl md:text-6xl font-Road_Rage`}>Techember Fest "25</h1>
          <p className='text-center'>Join us for an unforgettable <br className='md:hidden' /> experience at <br className='hidden md:block' /> [Event Name]! Secure <br className='md:hidden' /> your spot now.</p>
          <div className='flex items-center justify-center gap-x-2 flex-col md:flex-row pt-3 md:pt-0'>
            <span>📍 [Event Location]</span>
            <span className='hidden md:block'>| |</span>
            <span>March 15, 2025 | 7:00 PM</span>
          </div>
        </div>

        <div className='block w-full h-1 bg-secondary-1'></div>

        <div className='flex flex-col gap-y-3'>
          <p className='text-[#fafafa] text-base'>Select Ticket Type:</p>
          <div className='grid grid-cols-1 md:grid-cols-2 grid-rows-3 md:grid-rows-2 p-4 bg-primary-2 border border-secondary-2 rounded-3xl gap-8 gap-y-6'>

            <div className='text-[#fafafa] flex items-start bg-primary-2 rounded-xl justify-between border border-secondary-2 p-2 cursor-pointer'>
              <div className='flex flex-col gap-y-2 '>
                <h1>REGULAR ACCESS</h1>
                <p>20 left!</p>
              </div>
              <div className='bg-secondary-2 rounded-lg p-2 text-end font-semibold text-xl w-20 border border-secondary-5'>Free</div>
            </div>

            <div className='text-[#fafafa] flex items-start justify-between border border-secondary-2 p-2 bg-primary-2 rounded-xl cursor-pointer'>
              <div className='flex flex-col gap-y-2 '>
                <h1>VIP ACCESS</h1>
                <p>20 left!</p>
              </div>
              <div className='bg-secondary-2 rounded-lg p-2 text-end font-semibold text-xl w-20 border border-secondary-5'>Free</div>
            </div>

            <div className='text-[#fafafa] flex items-start justify-between border border-secondary-2 p-2 bg-primary-2 rounded-xl cursor-pointer'>
              <div className='flex flex-col gap-y-2 '>
                <h1>VVIP ACCESS</h1>
                <p>20 left!</p>
              </div>
              <div className='bg-secondary-2 rounded-lg p-2 text-end font-semibold text-xl w-20 border border-secondary-5'>Free</div>
            </div>

          </div>

        </div>


        <div className='flex flex-col gap-y-3'>
          <p className='text-[#fafafa] text-base'>Select Ticket Type:</p>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="1" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1</SelectItem>
              <SelectItem value="2">2</SelectItem>
              <SelectItem value="3">3</SelectItem>
              <SelectItem value="4">4</SelectItem>
            </SelectContent>
          </Select>

        </div>

        <div className='flex flex-col-reverse md:flex-row items-center justify-center md:px-12 md:bg-primary-2 md:border border-secondary-2 rounded-3xl gap-8 gap-y-6'>
          <Button className='w-full' variant="outline" size="lg">Cancel</Button>
          <Button className='w-full' size="lg">Next</Button>
        </div>

      </div>
  )
}

export default FormStepOne