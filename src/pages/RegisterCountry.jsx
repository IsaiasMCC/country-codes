import React from "react"
import FormCountryCode from "../components/FormCountryCode"
const RegisterCountry = () => {
  return (
    <div className='flex flex-col md:flex-row'>
      <div className='w-auto md:w-1/2'>
        {/* 1 half */}
      </div>
      <div className='w-auto md:w-1/2'>
        <FormCountryCode />
      </div>
    </div>
  )
}

export default RegisterCountry