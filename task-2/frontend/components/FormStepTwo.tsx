import Image from 'next/image'
import React from 'react'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'

const FormStepTwo = () => {
  return (
    <div className='flex flex-col p-6 border border-secondary-2 rounded-3xl bg-primary-4 gap-y-8'>
        <div className='flex flex-col gap-y-3 p-6 bg-primary-2 rounded-3xl border border-secondary-2'>
            <p className='text-[#fafafa] text-base'>Select Ticket Type:</p>
            <div className='bg-black flex items-center justify-center'>
                <div className='p-6 flex items-center gap-y-3 flex-col justify-center w-[240px] h-[240px] rounded-[32px] bg-secondary-2'>
                    <Image src="/cloud-download.png" alt='cloud download image' width={32} height={32} />
                    <p className='text-white-3 text-base text-center'>Drag and drop or click to upload</p>
                </div>

            </div>
        </div>

        <div className='block w-full h-1 bg-secondary-1'></div>

        <div className='flex flex-col gap-y-3'>
            <Label className='text-[#fafafa] text-base w-full' htmlFor="name">Enter your name</Label>
            <Input className='w-full' type="text" id="name" />
        </div>

        <div className='flex flex-col gap-y-3'>
            <Label className='text-[#fafafa] text-base w-full' htmlFor="email">Enter your email*</Label>
            <Input className='w-full input-with-icon' type="text" id="email" placeholder=' hello@avioflagos.io' />
        </div>

        <div className='flex flex-col gap-y-3'>
            <Label className='text-[#fafafa] text-base w-full' htmlFor="about">About the project</Label>
            <Textarea className='w-full' id="about" placeholder='Textarea' />
        </div>

        <div className='flex flex-col-reverse md:flex-row items-center justify-center gap-8 gap-y-6'>
          <Button className='w-full' variant="outline" size="lg">Back</Button>
          <Button className='w-full' size="lg">Get My Free Ticket</Button>
        </div>

    </div>
  )
}

export default FormStepTwo