'use client'
import React, { useRef, useState } from 'react'
import { Movie } from 'typings'
import Thumbnail from './Thumbnail'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

interface Props {
  movies: Movie[]
  title: string
}
function Row({movies, title}: Props) {
  const rowRef = useRef<HTMLDivElement>(null)
  const [isMoved, setIsMoved] = useState(false)

  const handleClick = (direction: string) => {
    setIsMoved(true)
    if(rowRef.current){
      const {scrollLeft, clientWidth} = rowRef.current
      const scrollTo = 
      direction === 'left' 
      ? scrollLeft - clientWidth 
      : scrollLeft + clientWidth

      rowRef.current.scrollTo({left: scrollTo, behavior: 'smooth'})
    }
  }
  return (
    <>
    <div className='ml-4'>
      <h1 className='text-white  text-lg font-medium'>{title}</h1>
<div className='relative group w-72 sm:w-auto'>

      <ChevronLeftIcon  className={` chevronIcon left-2 ${!isMoved && 'hidden'}`}
      onClick={() => handleClick("left")}/>
    <div ref={rowRef} className='flex overflow-x-scroll px-1 scrollbar-hide h-40'>
      {movies?.map((movie : Movie) => (
        <div key={movie.id}>
          <Thumbnail movie={movie}/>
        </div>
      ))}
    </div>
      <ChevronRightIcon className='chevronIcon right-2'
      onClick={() => handleClick("right")}/>
    </div>
      </div>
      </>
  )
}

export default Row