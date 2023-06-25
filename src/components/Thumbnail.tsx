import useInfoModalStore from '@/hooks/useInfoModalStore'
import React, { useCallback } from 'react'
import { Movie } from 'typings'

interface Props {
  movie: Movie
}

function Thumbnail({movie} : Props) {
  const { openModal } = useInfoModalStore()

  const handleOpenModal = useCallback(() => {
    openModal(movie);
  }, [openModal, movie])

  return (
    <>
    <div className='mx-1 mt-1 h-36 w-56 md:hover:scale-105 transition duration-100' onClick={handleOpenModal}>
      <img
        src={`https://image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.poster_path
        }`}
        className="rounded-sm object-cover md:rounded h-32"
        alt='Poster Image'
        />
        </div>
    </>
  )
}

export default Thumbnail