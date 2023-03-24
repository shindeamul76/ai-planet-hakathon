import React from 'react'
import './hero.css'
import vector from '../../img/Vector.png'

const Hero = () => {
  return (
    <>
      <div className="hero__container">
        <section className="hero__container_header">
            <h1>Hackathon Submissions</h1>
            <p>Lorem ipsum dolor sit amet consectetur. Urna cursus amet pellentesque in parturient purus feugiat faucibus. Congue laoreet duis porta turpis eget suspendisse ac pharetra amet. Vel nisl tempus nec vitae. </p>
            <button>Upload Submission</button>
        </section>
        <section className="hero__container_subhero">
        </section>
      </div>
      <div className='hero__subcontainer'>
        <section className="hero_subcontainer_submision">
            <button>All Submissions</button>
            <button>Favourite Submissions</button>
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
    </>
  )
}

export default Hero
