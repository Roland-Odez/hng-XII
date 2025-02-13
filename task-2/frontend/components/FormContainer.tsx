import React from 'react'
import FormHead from './FormHead'
import FormStepOne from './FormStepOne'
import FormStepTwo from './FormStepTwo'
import FormStepThree from './FormStepThree'


const FormContainer = () => {
  return (
    <div className='max-w-[700px] border border-secondary-2 mx-auto p-0 md:p-12 rounded-3xl flex flex-col gap-y-8 bg-primary-1'>

     <FormHead className='hidden md:flex' />
      {/* <FormStepOne /> */}
      {/* <FormStepTwo /> */}
      <FormStepThree />
    </div>
  )
}

export default FormContainer