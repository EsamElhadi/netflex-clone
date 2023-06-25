'use client'
import Image from 'next/image'
import logo from '../../../public/Netflix_logo.svg'
import image from '../../../public/netflix-icon.jpg'
import { z, ZodType} from 'zod'
import React,{useState} from 'react'
import {zodResolver} from '@hookform/resolvers/zod'
import { useForm , SubmitHandler} from 'react-hook-form'
import useAuth from '@/hooks/useAuth'


interface FormType{
  email: string,
  password: string
}

const Page = () => {
  const [ login, setLogin ] = useState(false)
  const { signIn, signUp } = useAuth()


const schema: ZodType<FormType> = z.object({
  email: z.string().email(),
  password: z.string().min(4).max(60)
});

const { register, handleSubmit, formState: {errors}, } = useForm<FormType>({resolver: zodResolver(schema)})

const onSubmit: SubmitHandler<FormType> = async ({ email, password }) => {
  if (login) {
    await signIn(email, password)
  } else {
    console.log('IT Sign Up', email, password)
  }
}


  return (
    <div className='w-full h-screen relative bg-slate-900 bg-transparent'>

      <Image src={image} alt="" className='w-full h-full absolute -z-10 hidden md:flex' />

        <Image src={logo} alt='netflix' className="absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6" width={140} height={140} />

      <div className='h-full w-full max-w-3xl m-auto flex items-center justify-center'>
        <form action="" onSubmit={handleSubmit(onSubmit)} className='space-y-8 h-auto w-[450px] bg-black/90 rounded py-10 px-4 sm:px-6 mx-2 sm:mx-0'>
          <h1 className='text-white font-semibold text-4xl'>Sign In</h1>
              <div className="space-y-4">
                <label className='inline-block  w-full'>
                  <input type="email" placeholder='E-mail' id="" className='input' {...register('email', { required: true })}/>
                  {errors.email && (<p className="p-1 text-[13px] font-light  text-orange-500">
                    Please enter a valid email.
                  </p>)}
                </label>
                <label className='inline-block  w-full'>
              <input type="password" placeholder='Password' id="" className='input'{...register('password', { required: true })}/>
              {errors.password && (<p className="p-1 text-[13px] font-light  text-orange-500">
              Your password must contain between 4 and 60 characters.
              </p>)}
                </label>
              </div>
          
          <button className='rounded-sm h-11 bg-[#e50914] font-semibold cursor-pointer w-full' onClick={() => setLogin(true)}>Sign In</button>
          
          <div className="flex text-gray-500">
          New to Netflix?
          <button className='font-semibold text-white hover:underline ml-1' onClick={() => setLogin(false)}>Sign up now</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Page
