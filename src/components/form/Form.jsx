import React from 'react'
import './form.css'
import Navbar from '../navbar/Navbar'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const Form = () => {
  return (
    <>
      <div className="form__container_main">
        <Navbar/>
        <div className="form__container">
            <section className="form__container_header">
                <h1>New Hackathon Submission</h1>
            </section>
            <section className="form__container_title">
                <h4>Title</h4>
                <input type="text" placeholder='Title of your submission'/>
            </section>
            <section className="form__container_summary">
                <h4>Summary</h4>
                <input 
                type="text" 
                placeholder='A short summary of your submission (this will be visible with your submission)'
                />
            </section>
            <section className="form__container_description">
                <h4>Description</h4>
                <textarea
                placeholder='Write a long description of your project. You can describe your idea and approach here.'
                >
                </textarea> 
                <span>0/3,000 characters</span>
            </section>
            <section className="form__container_cover">
              <h4>Cover Image</h4>
              <span>Minimum resolution: 360px X 360px</span>
              <div>
                <span></span>
              </div>
            </section>

            <section className="form__container_haker-name">
              <h4>Hackathon Name</h4>
              <input 
              type="text" 
              placeholder='Enter the name of the hackathon'
              />
            </section>

            <section className="form__container_haker-date">
             <article className='form__container_haker-date_name'>
              <h4>Hackathon Start Date</h4>
              <DatePicker className='date'/>
             </article>
             <article className='form__container_haker-date_name'>
              <h4>Hackathon End Date</h4>
              <DatePicker className='date'/>
             </article>
            </section>
          <section className="form__container_github">
            <h4>GitHub Repository</h4>
            <input 
            type="text"
            placeholder='Enter your submission’s public GitHub repository link' 
            />
          </section>
          <section className="form__container_link">
            <h4>Other Links</h4>
            <input 
            type="text" 
            placeholder='You can upload a video demo or URL of you demo app here.'
            />
          </section>
          <section className="form__container_button">
            <button>Upload Submission</button>
          </section>
        </div>
      </div>
    </>
  )
}

export default Form
