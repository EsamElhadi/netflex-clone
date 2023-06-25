import Image from 'next/image'
import { Header } from '@/components/Header'
import Banner from '@/components/Banner'
import Row from '@/components/Row'
import { Movie } from 'typings'
import Modal from '@/components/Modal'
import useInfoModalStore from '@/hooks/useInfoModalStore'

export interface Props  {
  trendingNow :      Movie[]
  netflixOriginals : Movie[]
  topRated :         Movie[]
  actionMovies :     Movie[]
  comedyMovies :     Movie[]
  horrorMovies :     Movie[]
  romanceMovies :    Movie[]
  documentarie :     Movie[]
}

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3'


async function getMovies() {
  const [
    trendingNow,
    netflixOriginals,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
  ] = await Promise.all([
    fetch(`${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`).then((res) => res.json()),
    fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_networks=213`).then((res) => res.json()),
    fetch(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`).then((res) => res.json()),
    fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`).then((res) => res.json()),
    fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`).then((res) => res.json()),
    fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=27`).then((res) => res.json()),
    fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10749`).then((res) => res.json()),
    fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=99`).then((res) => res.json()),
  ])
  return {
    trendingNow : trendingNow.results,
    netflixOriginals : netflixOriginals.results,
    topRated : topRated.results,
    actionMovies : actionMovies.results,
    comedyMovies : comedyMovies.results,
    horrorMovies : horrorMovies.results,
    romanceMovies : romanceMovies.results,
    documentaries : documentaries.results,
  }
}


async function Home(){

const {
  netflixOriginals,
  trendingNow,
  topRated,
  actionMovies,
  comedyMovies,
  horrorMovies,
  romanceMovies,
  documentaries,
} = await getMovies()


return (
    <>
    <div>
      <Header/>
    <main className='h-[300vh] bg-gradient-to-b to-slate-950 from-slate-500 z-20 relative'>
      {/* {Banner} */}
      
      <Banner netflixOriginals={netflixOriginals}/>
      <section className='py-10'>
        {/* Trending Now */}
        <Row movies={trendingNow} title="Trending Now"/>
        {/* Top Rated */}
        <Row movies={topRated} title='Top Rated'/>
        {/* Action Movies */}
        <Row movies={actionMovies} title='Action Movies'/>
        {/* Comedy Movies */}
        <Row movies={comedyMovies} title='Comedy Movies' />
        {/* Horror Movies */}
        <Row movies={horrorMovies} title='Horror Movies'/>
        {/* Romance Movies */}
        <Row movies={romanceMovies} title='Romance Movies'/>
        {/* Doumentaries */}
        <Row movies={documentaries} title='Documentaries' />

      </section>
    </main>
    {/* Modal */}
    <Modal/>
    </div>
    </>
  )
}

export default Home

