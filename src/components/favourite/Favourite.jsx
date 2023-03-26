import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useGlobalContext } from '../../context/globalContext'
import moment from 'moment'



const Favourite = () => {

    const { data, favaroitData } = useGlobalContext()

    

    const navigate = useNavigate()

    const handleCard = (itemId) => {
        navigate(`/details/${itemId}`);
    };

  return (
    <>
    <div className="card__container">
        {
            data && favaroitData.map((item) =>{
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

export default Favourite
