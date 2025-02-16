"use client"

import React, { useEffect, useState } from 'react'
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
import { formSchemaOne } from '@/schemas/formSchema'

const roadRage = Road_Rage({ subsets: ['latin'], weight: ['400'], style: ['normal'] })


const FormStepOne = ({step, setStep}: {step: number, setStep: (step: number) => void}) => {

  const [formDataOne, setFormDataOne] = useState<{ticketType: string, numberOfTicket: number}>({
    ticketType: '',
    numberOfTicket: 0})
  const [errors, setErrors] = useState<Record<string, string>>({})

  useEffect(() => {
    if (typeof window !== "undefined") {
    const local = localStorage.getItem('formData')
    const data = JSON.parse(local || '{}')
    if (data) {
      setFormDataOne({ticketType: data.ticketType, numberOfTicket: data.numberOfTicket})
    }else{
      localStorage.setItem('formData', JSON.stringify({...data, ticketType: '', numberOfTicket: 0}))
    }
  }
  }, [])


  const handleChange = ({name, value}: {name: string, value: string | number}) => {
    setFormDataOne({ ...formDataOne, [name]: value });
    localStorage.setItem('formData', JSON.stringify({...formDataOne, [name]: value}));
  };

  const checkFormData = ( ) => {
    
    const result = formSchemaOne.safeParse(formDataOne);
    if (!result.success) {
      
      const fieldErrors = result.error.format();
      setErrors({
        ticketType: fieldErrors.ticketType?._errors[0] || "",
        numberOfTicket: fieldErrors.numberOfTicket?._errors[0] || "",
      });
      setTimeout(() => {
        setErrors({});
      }, 3000);
    } else {
      setErrors({});
      setStep(2)
    }
  };


  return (
    <div className='flex flex-col p-6 border border-secondary-2 rounded-3xl bg-primary-4 gap-y-8'>
        <FormHead className='flex md:hidden' step={step} />
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
          <div className='grid grid-cols-1 md:grid-cols-3 grid-rows-3 md:grid-rows-1 p-4 bg-primary-2 border border-secondary-2 rounded-3xl gap-5'>

            <div style={{backgroundColor: formDataOne.ticketType === "free"? "#12464E": ""}} className='text-[#fafafa] flex flex-col items-start bg-primary-2 hover:bg-[#2C545B] transition-all duration-300 rounded-xl gap-y-3 border-2 border-secondary-2 p-3 cursor-pointer' 
              onClick={() => handleChange({name: 'ticketType', value: 'free'})}
            >
              <div className='text-white-3 font-semibold text-2xl md:text-xl w-20'>Free</div>
              <div className='flex flex-col gap-y-2 text-base font-normal text-[#fafafa]'>
                <h1>REGULAR ACCESS</h1>
                <p className='text-base text-white-2'>20/52</p>
              </div>
            </div>

            <div className='text-[#fafafa] flex flex-col items-start bg-primary-2 hover:bg-[#2C545B] transition-all duration-300 rounded-xl gap-y-3 border-2 border-secondary-2 p-3 cursor-pointer' 
            style={{backgroundColor: formDataOne.ticketType === "vip"? "#12464E": ""}}
              onClick={() => handleChange({name: 'ticketType', value: 'vip'})}
            >
              <div className='text-white-3 font-semibold text-2xl md:text-xl w-20'>$150</div>
              <div className='flex flex-col gap-y-2 text-base font-normal text-[#fafafa]'>
                <h1>VIP ACCESS</h1>
                <p className='text-base text-white-2'>20/52</p>
              </div>
            </div>

            <div className='text-[#fafafa] flex flex-col items-start bg-primary-2 hover:bg-[#2C545B] transition-all duration-300 rounded-xl gap-y-3 border-2 border-secondary-2 p-3 cursor-pointer' 
            style={{backgroundColor: formDataOne.ticketType === "vvip"? "#12464E": ""}}
              onClick={() => handleChange({name: 'ticketType', value: 'vvip'})}
            >
              <div className='text-white-3 font-semibold text-2xl md:text-xl w-20'>$150</div>
              <div className='flex flex-col gap-y-2 text-base font-normal text-[#fafafa]'>
                <h1>VVIP ACCESS</h1>
                <p className='text-base text-white-2'>20/52</p>
              </div>
            </div>

          </div>


        </div>
        {errors.ticketType && <p className='text-red-500 text-sm'>{errors.ticketType}</p>}


        <div className='flex flex-col gap-y-3'>
          <p className='text-[#fafafa] text-base' >Number of Tickets:</p>
          <Select
          value={formDataOne?.numberOfTicket?.toString()}
            onValueChange={(value: string) => handleChange({name: 'numberOfTicket', value: Number(value)})}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1</SelectItem>
              <SelectItem value="2">2</SelectItem>
              <SelectItem value="3">3</SelectItem>
              <SelectItem value="4">4</SelectItem>
            </SelectContent>
          </Select>

        </div>

        {errors.numberOfTicket && <p className='text-red-500 text-sm'>{errors.numberOfTicket}</p>}

        <div className='flex flex-col-reverse md:flex-row items-center justify-center md:px-12 md:bg-primary-2 md:border border-secondary-2 rounded-3xl gap-8 gap-y-6'>
          <Button className='w-full' variant="outline" size="lg">Cancel</Button>
          <Button className='w-full' size="lg" onClick={checkFormData}>Next</Button>
        </div>

      </div>
  )
}

export default FormStepOne