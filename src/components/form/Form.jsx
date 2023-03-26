import React, { useState } from 'react'
import './form.css'
import Navbar from '../navbar/Navbar'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useGlobalContext } from '../../context/globalContext';
import {  useNavigate } from 'react-router-dom';

let inputFormData = {
  title: "",
  summary: "",
  description:"",
  imgUrl:"",
  hakathonName: "",
  startDate: "",
  endDate: "",
  githubUrl: "",
  otherLink: "",
}

const Form = () => {

  const { addData, editData, edit } = useGlobalContext()
  const [formData, setFormData] = useState( edit ? editData.name : inputFormData);
  const { title, summary, description, imgUrl, hakathonName, startDate,endDate, githubUrl, otherLink} = formData


const isValidDate = (dateString) => {
  const d = new Date(dateString);
  return d instanceof Date && !isNaN(d);
};



  
  const handleImageFile = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    
    reader.onload = () => {
      setFormData({...formData, imgUrl: reader.result});
    };
    
    reader.readAsDataURL(file);
  };

  const handleInput = name => e => {
    setFormData({...formData, [name]: e.target.value })
}

const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    addData(formData)
    inputFormData = {
      title: "",
      summary: "",
      description:"",
      imgUrl:"",
      hakathonName: "",
      startDate: "",
      endDate: "",
      githubUrl: "",
      otherLink: "",
    }
    
    if (edit){
      return navigate(`/details/${editData.id}`)
    }else{
      return navigate('/')
    }
  }

  
  return (
    <>
      <div className="form__container_main ">
        <Navbar/>
        <form onSubmit={handleSubmit}>
        <div className="form__container scale-up-center">
            <section className="form__container_header">
                <h1>New Hackathon Submission</h1>
            </section>
            <section className="form__container_title">
                <h4>Title</h4>
                <input 
                type="text"
                name="title" 
                value={title}
                placeholder='Title of your submission'
                onChange={handleInput('title')}
                />
            </section>
            <section className="form__container_summary">
                <h4>Summary</h4>
                <input 
                type="text"
                name="summary" 
                value={summary}
                placeholder='A short summary of your submission (this will be visible with your submission)'
                onChange={handleInput('summary')}
                />
            </section>
            <section className="form__container_description">
                <h4>Description</h4>
                <textarea
                placeholder='Write a long description of your project. You can describe your idea and approach here.'
                name='description'
                value={description}
                onChange={handleInput('description')}
                >
                </textarea> 
                <span>0/3,000 characters</span>
            </section>
            <section className="form__container_cover">
              <h4>Cover Image</h4>
              <span>Minimum resolution: 360px X 360px</span>
              <div>
                <input 
                type="file" 
                id='file'
                name='myFile'
                onChange={handleImageFile}
                />
                <label htmlFor="file"></label>
              </div>
            </section>

            <section className="form__container_haker-name">
              <h4>Hackathon Name</h4>
              <input 
              type="text"
              name="hakathonName" 
              value={hakathonName}
              placeholder='Enter the name of the hackathon'
              onChange={handleInput('hakathonName')}
              />
            </section>

            <section className="form__container_haker-date">
             <article className='form__container_haker-date_name'>
              <h4>Hackathon Start Date</h4>
              <DatePicker 
              className='date'
              id='startdate'
              selected={isValidDate(startDate) ? new Date(startDate) : null}
              placeholderText='Enter A Date'
              dateFormat="dd/MM/yyyy"
              onChange={(date) => {
                setFormData({...formData, startDate: date})
            }}
              />
             </article>
             <article className='form__container_haker-date_name'>
              <h4>Hackathon End Date</h4>
              <DatePicker 
              className='date'
              id='enddate'
              selected={isValidDate(endDate) ? new Date(endDate) : null}
              placeholderText='Enter A Date'
              dateFormat="dd/MM/yyyy"
              onChange={(date) => {
                setFormData({...formData, endDate: date})
            }}
              />
             </article>
            </section>
          <section className="form__container_github">
            <h4>GitHub Repository</h4>
            <input 
            type="text"
            name="githubUrl"
            value={githubUrl}
            placeholder='Enter your submission’s public GitHub repository link' 
            onChange={handleInput('githubUrl')}
            />
          </section>
          <section className="form__container_link">
            <h4>Other Links</h4>
            <input 
            type="text"
            name="otherLink"
            value={otherLink} 
            placeholder='You can upload a video demo or URL of you demo app here.'
            onChange={handleInput('otherLink')}
            />
          </section>
          <section className="form__container_button">
            <button type='submit'>{edit? "Upload Edit" : "Upload Submission"}</button>
          </section>
        </div>
        </form>
      </div>
    </>
  )
}

export default Form
