"use client"

import Image from 'next/image'
import React, { createRef, useEffect, useState } from 'react'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'
import { toast } from '@/hooks/use-toast'
import FormHead from './FormHead'
import { formSchemaTwo } from '@/schemas/formSchema'
import { Noto_Serif } from 'next/font/google'

const notoSerif = Noto_Serif({
  weight: ['400'],
  subsets: ['latin'],
})

const FormStepTwo = ({step, setStep}: {step: number, setStep: (step: number) => void}) => {
    const [dragging, setDragging] = useState<boolean>(false)
    const [showClickArea, setShowClickArea] = useState<boolean>(false)
    const fileInputRef = createRef<HTMLInputElement>()

    const [formDataTwo, setFormDataTwo] = useState<{imageUrl: string, email: string, username: string, request: string}>({
        imageUrl: '',
        email: '',
        username: '',
        request: ''
      })
      const [errors, setErrors] = useState<Record<string, string>>({})

      useEffect(() => {
        if (typeof window !== "undefined") {
          const local = localStorage.getItem('formData')
          const data = JSON.parse(local || '{}')
          if (data.imageUrl || data.email || data.username || data.request) {
            setFormDataTwo({imageUrl: data?.imageUrl, email: data?.email, username: data?.username, request: data?.request})
          }else{
            localStorage.setItem('formData', JSON.stringify({...data, imageUrl: '', email: '', username: '', request: ''}))
          }
        }
        }, [])

    const handleUpload = async (file: File) => {
    
        if (!file) return  toast({
            title: "Error",
            description: "Enter a valid image Url",
          })

        const formData = new FormData();
        formData.append("file", file);
        if (process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET) {
            formData.append("upload_preset", process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET);
        } else {
            toast({
                title: "Error",
                description: "Cloudinary upload preset is not defined",
            });
            return;
        }
        formData.append("api_key", process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY || "");
    
        try {

          const response = await fetch(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`, {
            method: 'POST',
            body: formData,
          });

          if (response.ok) {
              const data = await response.json();
              handleChange({name: 'imageUrl', value: data.url})
              toast({
                  title: "Success",
                  description: "Image Uploaded successfully",
                })
          } else {
            toast({
                title: "Error",
                description: "Image Upload failed",
              })
          }
        } catch (error: any) {
          console.error("Error uploading image:", error);
          toast({
            title: "Error",
            description: error?.message,
          })
        }
      };
    
    const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
            e.preventDefault()
            e.stopPropagation()
            setDragging(false)
    }
        
    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
            e.preventDefault()
            e.stopPropagation()
            setDragging(true)
    }

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        e.stopPropagation()
        setDragging(false)
        const file = e.dataTransfer.files[0]
        // handleFile(file)
        handleUpload(file)
    }

    // const handleFile = (file: any) => {
    //     const reader = new FileReader();
    //     reader.onload = (e: any) => setFile(e.target.result);
    //     reader.readAsDataURL(file);
    //   };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0]
            // handleFile(file)
            // console.log(file)
            handleUpload(file)
        }
    }

    const handleFileClick = () => {
       fileInputRef.current?.click()

    }

    const handleChange = ({name, value}: {name: string, value: string | number}) => {
      const local = localStorage.getItem('formData')
      const data = JSON.parse(local || '{}')
      setFormDataTwo({ ...formDataTwo, [name]: value });
      if (typeof window !== "undefined") {
      localStorage.setItem('formData', JSON.stringify({...data, [name]: value}));
      }
    };

    const handleCheckFormData = () => {
        const result = formSchemaTwo.safeParse(formDataTwo);
        if (!result.success) {
          const fieldErrors = result.error.format();
          if (!formDataTwo?.imageUrl){
            toast({
              title: "Error",
              description: "Image is required",
            })
            return
          }
          setErrors({
            imageUrl: fieldErrors.imageUrl?._errors[0] || "",
            email: fieldErrors.email?._errors[0] || "",
            username: fieldErrors.username?._errors[0] || "",
            request: fieldErrors.request?._errors[0] || "",
          });
          setTimeout(() => {
            setErrors({});
          }, 3000);
        } else {
          setErrors({});
          setStep(3)
        }
      }


  return (
    <div className='flex flex-col p-6 border border-secondary-2 rounded-3xl bg-primary-4 gap-y-8'>
      <FormHead className='flex md:hidden' step={step}  />
        <div className='flex flex-col gap-y-3 p-6 bg-primary-2 rounded-3xl border border-secondary-2'>
            <p className='text-[#fafafa] text-base'>Select Ticket Type:</p>
            <div className='bg-[#00000033] flex items-center justify-center' 
                onDrop={handleDrop}
                onDragLeave={handleDragLeave}
                onDragOver={handleDragOver}
            >
                {!formDataTwo?.imageUrl ? (
                    <ClickArea className={`relative trasition-all duration-200 ${dragging && "shadow-xl shadow-secondary-2"}`} handleFileClick={handleFileClick} handleFileChange={handleFileChange} fileInputRef={fileInputRef} />
                ) : (
                <div onMouseOver={() => setShowClickArea(true)} onMouseLeave={() => setShowClickArea(false)}  className='relative w-[240px] h-[240px] rounded-[32px] overflow-hidden object-cover border-[4px] border-[#24A0B580]'>
                    <Image src={formDataTwo?.imageUrl} alt='uploaded image' className='w-full h-full block' width={240} height={240} />
                    {showClickArea && (
                            <ClickArea className={`absolute top-0 left-0 transition-all duration-300 bg-transparent ${dragging && "shadow-xl shadow-secondary-2"}`} handleFileClick={handleFileClick} handleFileChange={handleFileChange} fileInputRef={fileInputRef} />
                    )}
                </div>
                )}
                
            </div>
        </div>

        <div className='block w-full h-1 bg-secondary-1'></div>

        <div className='flex flex-col gap-y-3'>
            <Label className='text-[#fafafa] text-base w-full' htmlFor="username">Enter your name</Label>
            <Input className='w-full' value={formDataTwo?.username} onChange={(e) => handleChange({name: e.target?.name, value: e.target?.value})} name='username' type="text" id="username" />
            {errors.username && <p className='text-red-500 text-sm'>{errors.username}</p>}
        </div>

        <div className='flex flex-col gap-y-3'>
            <Label className='text-[#fafafa] text-base w-full' htmlFor="email">Enter your email*</Label>
            <Input className='w-full input-with-icon' value={formDataTwo?.email} onChange={(e) => handleChange({name: e.target?.name, value: e.target?.value})} name='email' type="text" id="email" placeholder=' hello@avioflagos.io' />
            {errors.email && <p className='text-red-500 text-sm'>{errors.email}</p>}
        </div>

        <div className='flex flex-col gap-y-3'>
            <Label className='text-[#fafafa] text-base w-full' htmlFor="request">About the project</Label>
            <Textarea className='w-full' value={formDataTwo?.request} onChange={(e) => handleChange({name: e.target?.name, value: e.target?.value})} name='request' id="request" placeholder='Textarea' />
            {errors.request && <p className='text-red-500 text-sm'>{errors.request}</p>}
        </div>

        <div className='flex flex-col-reverse md:flex-row items-center justify-center gap-8 gap-y-6'>
          <Button className='w-full' onClick={() => setStep(1)} variant="outline" size="lg" style={notoSerif.style}>Back</Button>
          <Button className='w-full' onClick={handleCheckFormData} size="lg" style={notoSerif.style}>Get My Free Ticket</Button>
        </div>

    </div>
  )
}

const ClickArea = ({handleFileClick, handleFileChange, fileInputRef, className}: { handleFileClick: () => void, handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void, fileInputRef: React.RefObject<HTMLInputElement | null>, className: string }) => {
    return (
            <div onClick={handleFileClick}  className={`${className} p-6 flex items-center gap-y-3 flex-col justify-center w-[240px] h-[240px] rounded-[32px] bg-secondary-2`}>
                <Image src="/cloud-download.png" alt='cloud download image' width={32} height={32} />
                <Input ref={fileInputRef} onChange={handleFileChange} type="file" className='hidden' />
                <p className='text-white-3 text-base text-center'>Drag and drop or click to upload</p>
            </div>
    )
}

export default FormStepTwo