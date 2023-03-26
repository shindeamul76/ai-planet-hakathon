import React, { useState } from "react";
import "./details.css";
import Navbar from "../navbar/Navbar";
import edit from "../../img/edit.png";
import deleteImg from "../../img/delete.png";
import star from "../../img/star.png";
import filledStar from "../../img/filledStar.png";
import calender from "../../img/calender.png";
import github from "../../img/github.png";
import link from "../../img/links.png";
import { useNavigate, useParams } from "react-router-dom";
import { useGlobalContext } from "../../context/globalContext";
import moment from 'moment'

const Details = () => {

  const { data, setData, setEditData, handleFavaroit, setEdit, fav } = useGlobalContext()



  const { id } = useParams();

  const selectedItem = data.find((item) => item.id === id);

  
  setEditData(selectedItem)
 
  const navigate = useNavigate()

  const handleEdit = () => {
    setEdit(true)
    navigate('/form')
  }

  const handleDelete = () => {
    const updatedItem = data.filter((element) => {
      return element.id !== selectedItem.id
    }) 

    setData(updatedItem);
    navigate('/')
  }

  
 
  return (
    <>
      <Navbar />
      <div className="deatil__container scale-up-center">
        <section className="details__container">
          <article>
            <h2>
              <img src={selectedItem.name.imgUrl} alt={selectedItem.name.title}/>
            </h2>
            <h1>{selectedItem.name.title}</h1>
            <div>
              <span className="details__container_btn">
                <img src={edit} alt="Edit" />
                <h3 onClick={handleEdit}>Edit</h3>
              </span>
              <span className="details__container_btn">
                <img src={deleteImg} alt="delete" />
                <h3 onClick={handleDelete}>Delete</h3>
              </span>
            </div>
          </article>
          <p>
          {selectedItem.name.summary}
          </p>
          <span className="details__container_calender">
            <img 
            src={fav ? filledStar : star} 
            alt="star" 
            onClick={() => handleFavaroit(selectedItem)}
            />
            <hr />
            <span className="details__container_calender-sub">
              <img 
              src={calender} 
              alt="calender" 
             
              />
              <h5>12 March</h5>
            </span>
          </span>
        </section>
      </div>

      <div className="details__subcontainer scale-up-center">
        <h1>Description</h1>
        <section className="details__subcontainer_desp">
        {selectedItem.name.description}
        </section>

        <section className="details__subcontainer_info">
          <h4>Hakathon</h4>
          <h1>{selectedItem.name.title}</h1>
          <article>
            <span></span>
            <h5>{`${(selectedItem.name.startDate)} - ${(selectedItem.name.endDate)}`}</h5>
          </article>
        </section>

        <section className="details__subcontainer_github">
        <article>
          <img src={github} alt="github" />
          <h3>GitHub Repository</h3>
        </article>
        <article>
          <img src={link} alt="links" />
          <h3>Other Links</h3>
        </article>
        </section>
      </div>
    </>
  );
};

export default Details;
