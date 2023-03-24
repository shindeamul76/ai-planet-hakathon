import React, { useState } from 'react'
import './hero.css'
import vector from '../../img/Vector.png'
import { Link, useNavigate } from 'react-router-dom'

const Hero = () => {

  const [active, setActive] = useState(false)

  const navigate = useNavigate()

  const handleSubmission = () => {
    setActive(!active)
  }

  return (
    <>
      
      <div className='hero__subcontainer'>
        <section className="hero_subcontainer_submision">
            <button  style={active ? {borderBottom:'4px solid #44924C'} : {border:'none'}} onClick={handleSubmission}>All Submissions</button>
            <button style={active  ? {border:'none'} : {borderBottom:'4px solid #44924C'}} onClick={handleSubmission}>Favourite Submissions</button>
        </section>
        <section className="hero_subcontainer_search">
            <article className='hero__subcontainer_search-one'>
            <img src={vector} alt="search" />
            <input 
            type="text"
            placeholder='Search'
             />
            </article>
            <article className='hero__subcontainer_search-two'>
                <select>
                    <option value="new">Newest</option>
                    <option value="old">Oldest</option>
                </select>
            </article>
        </section>
      </div>

      <div className="hero__container">
        <section className="hero__container_header">
            <h1>Hackathon Submissions</h1>
            <p>Lorem ipsum dolor sit amet consectetur. Urna cursus amet pellentesque in parturient purus feugiat faucibus. Congue laoreet duis porta turpis eget suspendisse ac pharetra amet. Vel nisl tempus nec vitae. </p>
         <Link to={'/form'}><button >Upload Submission</button></Link>
        </section>
        <section className="hero__container_subhero">
        </section>
      </div>
    </>
  )
}

export default Hero
