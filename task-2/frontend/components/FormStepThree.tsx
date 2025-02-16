"use client"

import React, { useEffect, useState } from 'react'
import FormHead from './FormHead'
import { Alatsi, Road_Rage } from 'next/font/google'
import Image from 'next/image'
import { Button } from './ui/button'
import html2canvas from "html2canvas";

const alatsi = Alatsi({subsets: ['latin'], weight: ['400']})
const roadRage = Road_Rage({ subsets: ['latin'], weight: ['400'], style: ['normal'] })

const FormStepThree = ({step}: {step: number}) => {
    const [formData, setFormData] = useState<{username: string, email: string, imageUrl: string, ticketType: string, numberOfTicket: number, request: string}>({
        username: '',
        email: '',
        imageUrl: '',
        ticketType: '',
        numberOfTicket: 0,
        request: ''
    })

    const sectionRef = React.createRef<HTMLDivElement>()

    useEffect(() => {
        const local = localStorage.getItem('formData')
        const data = JSON.parse(local || '{}')
        if (data) {
            setFormData({...data})
        }
    }, [])

    const handleBookAnotherTicket = () => {
        localStorage.removeItem('formData')
        localStorage.removeItem('step')
        window.location.reload()
    }

    const captureScreenshot = async () => {
        if (sectionRef.current) {
          const canvas = await html2canvas(sectionRef.current, 
            {
                useCORS: true, // Enable CORS to capture external images
                logging: true,
                scale: 2,
            }
          );
          const image = canvas.toDataURL("image/png");
    
          // Download the image
          const link = document.createElement("a");
          link.href = image;
          link.download = "screenshot.png";
          link.click();
        }
      };
    

  return (
    <div className='flex flex-col p-6 border w-full border-secondary-2 md:border-transparent rounded-3xl bg-primary-4 md:bg-transparent gap-y-8'>
        <FormHead className='flex md:hidden' step={step} />

        <div className='flex flex-col gap-y-4'>
            <h1 className={`${alatsi.className} text-2xl md:text-[32px] text-center text-white-3` }>Your Ticket is Booked!</h1>
            <p className='text-white-2 font-bold text-base text-center'>Check your email for a copy or you can download</p>
        </div>

        <div id='areaToPrint ' ref={sectionRef}  className='flex items-center justify-center h-full md:h-[664px] w-full bg-inherit'>
            <div className='w-[300px] h-[600px] ticket-bg-image'>
                <div className='flex-1 h-[calc(100%-114px)] p-5'>
                    <div className='w-full h-full rounded-2xl border border-secondary-4 p-5 gap-y-5 flex items-center justify-start flex-col'>
                        <div className='text-white-3 flex flex-col items-center gap-y-2'>
                            <h1 className={`${roadRage.className} text-4xl font-Road_Rage text-center`}>Techember Fest "25</h1>
                            <span className='text-xs'>📍04 Rumens road, Ikoyi, Lagos</span>
                            <span className='text-xs'>📅 March 15, 2025 | 7:00 PM</span>
                        </div>
                        <div className='w-[140px] h-[140px] rounded-xl border-[4px] border-[#24A0B580] bg-cover bg-center' style={{backgroundImage: `url("${formData.imageUrl}")`}}></div>
                        <div className='w-full h-[165px] border border-[#133D44] rounded-lg p-1 bg-[#08343C] grid grid-cols-2 grid-rows-3 text-[#527d84]' >
                            <div className=' col-span-1 flex flex-col items-start gap-y-1 p-1'>
                                <p className='text-[10px] leading-4'>Enter your name</p>
                                <p className='text-xs text-white-3 font-bold truncate w-[95px]'>{`${formData.username}`}</p>
                            </div>
                            <div className='border border-r-0 border-b-0 border-t-0 border-[#12464E] col-span-1 flex flex-col items-start gap-y-1 p-1'>
                            <p className='text-[10px] leading-4'>Enter your email *</p>
                            <p className='text-xs text-white-3 font-bold truncate w-[95px]'>{`${formData.email}`}</p>
                            </div>
                            <div className='border border-l-0 border-r-0 border-b-0  border-[#12464E] col-span-1 flex flex-col items-start gap-y-1 p-1'>
                            <p className='text-[10px] leading-4'>Ticket Type:</p>
                            <p className='text-xs text-white-3 font-light uppercase'>{`${formData.ticketType}`}</p>
                            </div>
                            <div className='border border-r-0 border-b-0 border-[#12464E] col-span-1 flex flex-col items-start gap-y-1 p-1'>
                            <p className='text-[10px] leading-4'>Ticket For:</p>
                            <p className='text-[10px] text-white-3 font-light'>{`${formData.numberOfTicket}`}</p>
                            </div>
                            <div className='border border-b-0 border-r-0 border-l-0 border-[#12464E] col-span-2 flex flex-col items-start gap-y-[2px] p-2'>
                            <p className='text-[10px] leading-4'>Special request?</p>
                            <p className='text-[10px] text-white-2 leading-3 text-wrap'>{`${formData.request}`}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='h-[114px] px-8 py-5'>
                    <Image src={'/bar-code.svg'} alt='bar code' width={236} height={68} />
                </div>
            </div>
        </div>

        <div className='flex flex-col-reverse md:flex-row items-center justify-center gap-8 gap-y-6'>
          <Button className='w-full' onClick={handleBookAnotherTicket} variant="outline" size="lg">Book Another Ticket</Button>
          <Button className='w-full' size="lg" onClick={captureScreenshot}>Download Ticket</Button>
        </div>
    </div>
  )
}

export default FormStepThree