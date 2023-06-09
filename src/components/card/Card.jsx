import React from 'react'
import { useNavigate } from 'react-router-dom'
import './card.css'

import { useGlobalContext } from '../../context/globalContext'
import moment from 'moment'



const Card = () => {

    const { data, searchTerm } = useGlobalContext()
    const navigate = useNavigate()

    const handleCard = (itemId) => {
        navigate(`/details/${itemId}`);
    };

  return (
    <>
    <div className="card__container">
        {
            data && data.filter((searchquery)=> {
                
                if(searchTerm === '') {
                    return searchquery
                }else if (searchquery.first_name && searchquery.first_name.toUpperCase().includes(searchTerm.toUpperCase())){
                    console.log(searchTerm)
                    return searchquery;
                }
                return null

            }).map((item) =>{
                return (
            <section className="card__container_small scale-up-center" onClick={() => handleCard(item.id) } key={item.id}>
                <article>
                    <h1>
                        <img src={item.name.imgUrl} alt="interview" />
                    </h1>
                    <span>{item.name.title}</span>
                </article>
                    <p>{item.name.summary}</p>
                    <h5>{moment().startOf(`${item.name.startDate}`).fromNow()}</h5>
            </section>
                )
        })
    }
       
    </div>
      
    </>
  )
}

export default Card
