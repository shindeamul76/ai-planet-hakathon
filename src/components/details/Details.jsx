import React from "react";
import "./details.css";
import Navbar from "../navbar/Navbar";
import edit from "../../img/edit.png";
import deleteImg from "../../img/delete.png";
import star from "../../img/star.png";
import calender from "../../img/calender.png";
import github from "../../img/github.png";
import link from "../../img/links.png";

const Details = () => {
  return (
    <>
      <Navbar />
      <div className="deatil__container scale-up-center">
        <section className="details__container">
          <article>
            <h2></h2>
            <h1>InterviewMe</h1>
            <div>
              <span className="details__container_btn">
                <img src={edit} alt="Edit" />
                <h3>Edit</h3>
              </span>
              <span className="details__container_btn">
                <img src={deleteImg} alt="delete" />
                <h3>Delete</h3>
              </span>
            </div>
          </article>
          <p>
            Built with GPT-3, React, and Flask. Practice interviews with AI and
            ace your next interview.
          </p>
          <span className="details__container_calender">
            <img src={star} alt="star" />
            <hr />
            <span className="details__container_calender-sub">
              <img src={calender} alt="calender" />
              <h5>12 March</h5>
            </span>
          </span>
        </section>
      </div>

      <div className="details__subcontainer scale-up-center">
        <h1>Description</h1>
        <section className="details__subcontainer_desp">
          Lorem ipsum dolor sit amet consectetur. Lacus sit aliquam vivamus
          sodales a integer justo elit. Mattis urna non parturient est non
          faucibus pretium morbi. Mattis condimentum arcu sapien nunc semper in
          laoreet amet cursus. At purus consectetur orci morbi at. Gravida
          consectetur nunc in quis vitae egestas. Fermentum pellentesque
          ullamcorper nisl massa penatibus condimentum non imperdiet. Porttitor
          a hendrerit pellentesque enim mus congue. Vitae interdum fusce duis ac
          posuere in aliquam risus aenean. Mi aliquet viverra ipsum lacus
          condimentum tincidunt. In bibendum imperdiet nullam eget tincidunt. Ut
          lorem id enim interdum lobortis aliquam risus elementum aliquet.
          Placerat fusce proin diam sollicitudin netus tincidunt sit ultricies.
          Varius convallis ultrices fermentum in commodo ut posuere. Lacus
          luctus lacus consequat dolor. Lacus vulputate molestie mattis
          penatibus risus quam elit gravida auctor. Eget morbi maecenas nam in.
          Felis urna non id adipiscing sed cursus nec arcu. Egestas placerat
          blandit sed quis sed vitae. Porta at ac turpis gravida leo. Ipsum in
          laoreet facilisi arcu. Proin vulputate mi viverra dignissim
          sollicitudin interdum ultrices. Habitant eget dapibus pharetra blandit
          quis sagittis pulvinar fames vel. Sit gravida cursus ligula fames
          lacus. Bibendum lectus nunc dapibus dui lectus velit porta. Sit id
          elementum urna at ut lorem aliquet. Pharetra sit malesuada tellus eget
          urna ultrices lectus et cursus. Bibendum leo id consectetur vel lectus
          mi urna in diam. Egestas metus enim elementum turpis felis. Leo
          ultrices adipiscing viverra ac. Maecenas a odio ac velit in tortor
          faucibus quam quis. Ut sapien auctor lacus pretium nec eu sed sit.
          Nulla quis sed massa maecenas.
        </section>

        <section className="details__subcontainer_info">
          <h4>Hackathon</h4>
          <h1>Prestige Interview <br /> Challenge</h1>
          <article>
            <span></span>
            <h5>24 Feb 2023 - 24 March 2023</h5>
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
