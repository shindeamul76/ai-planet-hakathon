import React from 'react'
import { useNavigate } from 'react-router-dom'
import './card.css'

const Card = () => {

    const navigate = useNavigate()
    const handleCard = () => {
        navigate('/details')
    }
  return (
    <>
    <div className="card__container">
        <section className="card__container_small scale-up-center" onClick={handleCard} >
            <article>
                <h1></h1>
                <span>InterviewMe</span>
            </article>
            <p>Built with GPT-3, React, and Flask. Practice interviews with AI and ace your next interview.</p>
            <h5>uploaded 6 days ago</h5>
        </section>
        <section className="card__container_small">
            <article>
                <h1></h1>
                <span>InterviewMe</span>
            </article>
            <p>Built with GPT-3, React, and Flask. Practice interviews with AI and ace your next interview.</p>
            <h5>uploaded 6 days ago</h5>
        </section>
        <section className="card__container_small">
            <article>
                <h1></h1>
                <span>InterviewMe</span>
            </article>
            <p>Built with GPT-3, React, and Flask. Practice interviews with AI and ace your next interview.</p>
            <h5>uploaded 6 days ago</h5>
        </section>
        <section className="card__container_small">
            <article>
                <h1></h1>
                <span>InterviewMe</span>
            </article>
            <p>Built with GPT-3, React, and Flask. Practice interviews with AI and ace your next interview.</p>
            <h5>uploaded 6 days ago</h5>
        </section>
        <section className="card__container_small">
            <article>
                <h1></h1>
                <span>InterviewMe</span>
            </article>
            <p>Built with GPT-3, React, and Flask. Practice interviews with AI and ace your next interview.</p>
            <h5>uploaded 6 days ago</h5>
        </section>
        <section className="card__container_small">
            <article>
                <h1></h1>
                <span>InterviewMe</span>
            </article>
            <p>Built with GPT-3, React, and Flask. Practice interviews with AI and ace your next interview.</p>
            <h5>uploaded 6 days ago</h5>
        </section>
        <section className="card__container_small">
            <article>
                <h1></h1>
                <span>InterviewMe</span>
            </article>
            <p>Built with GPT-3, React, and Flask. Practice interviews with AI and ace your next interview.</p>
            <h5>uploaded 6 days ago</h5>
        </section>
    </div>
      
    </>
  )
}

export default Card
