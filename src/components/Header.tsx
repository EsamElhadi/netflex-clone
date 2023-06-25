'use client'
import Image from 'next/image'
import {BellIcon, MagnifyingGlassIcon} from '@heroicons/react/20/solid'
import logo from '../../public/Netflix_logo.svg'
import accountLogo from '../../public/account-logo.png'


import Link from 'next/link'
import { useEffect, useState } from 'react'
import useAuth from '@/hooks/useAuth'
import BesicMenu from './BesicMenu'

export const Header = () => {
  const {logout} = useAuth() 
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handelScroll = () => {
      if(window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handelScroll)

    return () => {
      window.removeEventListener('scroll', handelScroll)
    }
  }, [])
  return (
    <>
    <header className={` header ${isScrolled && "bg-black"}`}>
        <div className='flex justify-between items-center gap-3'>
          <Image src={logo} alt='netflix' width={90} height={70}/>

          <BesicMenu/>
          <ul className='hidden md:flex space-x-4'>
            <li className='headerLink'>Home</li>
            <li className='headerLink'>TV Show</li>
            <li className='headerLink'>Movise</li>
            <li className='headerLink'>New & Popular</li>
            <li className='headerLink'>My List</li>
          </ul>
        </div>

        <div className='flex items-center space-x-4 text-sm font-light'>
          <MagnifyingGlassIcon className='hidden sm:inline w-6 h-6 headerLink'/>
          <span className='hidden lg:inline headerLink'>Kids</span>
          <BellIcon className='w-6 h-6 headerLink'/>
        {/* <Link href="/account"> */}
          <Image
          onClick={() => logout()}
            src={accountLogo}
            alt="my account logo"
            className="cursor-pointer rounded"
          />
        {/* </Link> */}
        </div>
    </header>
    </>
  )
}
