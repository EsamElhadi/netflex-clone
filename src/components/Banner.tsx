'use client'

import { baseUrl } from '../constans/movies'
import {PlayIcon, InformationCircleIcon} from '@heroicons/react/20/solid'
import React, { useCallback, useEffect, useState } from 'react'
import { Movie } from 'typings'
import useInfoModalStore from '@/hooks/useInfoModalStore'
interface Props{
  netflixOriginals: Movie[]
}
const Banner = ({netflixOriginals}: Props) => {
  const [movie, setMovie] = useState<Movie | null>(null)
  const { openModal } = useInfoModalStore()

  const handleOpenModal = useCallback(() => {
    openModal(movie);
  }, [openModal, movie])
  useEffect(() => {
    setMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
    )
  }, [netflixOriginals])
  return (
    <div className='h-[100vh] md:h-[70vh] relative space-y-2 py-16 md:space-y-4 '>
      <div className="absolute top-0 left-0 h-[100vh] -z-10 w-full">
            <img src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`} alt="" 
            className='object-cover w-full absolute h-full md:h-auto'
            />
        </div>
        <div className='h-4/5 flex justify-start items-center absolute max-w-full'>
          <div className='text-white w-full px-5 text-shadow-lg max-h-60'>
            <h1 className='text-3xl md:text-4xl font-bold'>{movie?.title || movie?.name}</h1>
            <p className='my-3 font-medium text-shadow-lg text-sm md:max-w-lg lg:max-w-2x1 lg:text-base md:text-lg max-w-xs'>{movie?.overview}</p>
            <div className="flex space-x-3">
            <button className='bannerButton text-black bg-white '>
            <PlayIcon className="h-5 w-5 text-black "/>
              Play
            </button>
            <button className='bannerButton bg-[gray]/60 text-white' onClick={handleOpenModal}>
              <InformationCircleIcon  className="h-6 w-6"/>
              More Info</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Banner

