import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import { Button } from "@/components/ui/button"
import { Noto_Serif } from 'next/font/google'

const notoSerif = Noto_Serif({
  weight: ['400'],
  subsets: ['latin'],
})





const Navbar = () => {
  return (
    <div className='w-full flex items-center justify-between px-4 py-5 rounded-3xl border-2 border-secondary-3 mb-9'>
        <div><Image src={'/logo.png'} alt='logo' width={91} height={36} /></div>
        <div className='md:flex items-center gap-x-4 hidden' style={notoSerif.style} >
            <Link href="#" className='text-white-2 hover:text-white-1 px-2 p-1'>Events</Link>
            <Link href="#" className='text-white-1 hover:text-white-2 px-2 p-1'>My Tickets</Link>
            <Link href="#" className='text-white-1 hover:text-white-2 px-2 p-1'>About Project</Link>
        </div>
        <div>
          <Button size={'default'} className='bg-white-2 text-black hover:bg-secondary-4 hover:text-[#D9D9D9] rounded-xl' style={notoSerif.style}>
              MY TICKETS
              <IoIosArrowRoundForward className='w-11 block' style={{scale: "1.7"}} />
          </Button>
        </div>
    </div>
  )
}

export default Navbar