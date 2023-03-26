import React from 'react'
import Card from '../components/card/Card'
import Favourite from '../components/favourite/Favourite'
import Hero from '../components/hero/Hero'
import Navbar from '../components/navbar/Navbar'
import { useGlobalContext } from '../context/globalContext'

const Home = () => {

  const { active } = useGlobalContext()
  return (
    <>
      <Navbar/>
      <Hero/>
      { active ? <Favourite/> : <Card/> }
    </>
  )
}

export default Home
