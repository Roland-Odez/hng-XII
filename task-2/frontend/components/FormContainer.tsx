'use client'

import React, { useEffect, useState } from 'react'
import FormHead from './FormHead'
import FormStepOne from './FormStepOne'
import FormStepTwo from './FormStepTwo'
import FormStepThree from './FormStepThree'


const FormContainer = () => {

  const [step, setStep] = useState<number>(1);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedStep = localStorage.getItem("step");
      if (storedStep) {
        setStep(parseInt(storedStep));
      } else {
        localStorage.setItem("step", JSON.stringify(step));
      }
    }
  }, []);

  return (
    <div className='max-w-[700px] border border-secondary-2 mx-auto p-0 md:p-12 rounded-3xl flex flex-col gap-y-8 bg-primary-1'>

     <FormHead className='hidden md:flex'  step={step} />

      {step === 1 && <FormStepOne step={step} setStep={setStep} />}
      {step === 2 && <FormStepTwo step={step} setStep={setStep} />}
      {step === 3 && <FormStepThree step={step} />}
    </div>
  )
}

export default FormContainer