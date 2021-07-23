import React from "react";
import LogIn from "../SignIn";
import SignUp from "../SignUp";
import StarRating from "./Rating";
import "./index.css";
import Image1 from "./home-img.jpg";
import Image2 from "./mentor.jpg";
import Image3 from "./mentor2.jpg";
import Image4 from "./pair.jpg";
import Image5 from "./buddies.jpg";
import Footer from "./Footer";

function HomePage() {
  return (
    <section id="home-page" data-testid="homepage">
      <div className="call-to-action">
        <h1> Learning a new language is never been so easy. </h1>
        <p>
          {" "}
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.{" "}
        </p>
        <>
          <LogIn></LogIn>
          <SignUp></SignUp>
        </>
      </div>
      <div className="about-us">
        <h1> What is Langastic?</h1>
        <p>
          {" "}
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.{" "}
        </p>
        <img src={Image1} alt="" />
      </div>
      <div className="get-tutors">
        <h1> Get expert tutors</h1>
        <p>
          {" "}
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.{" "}
        </p>
        <img src={Image2} alt="" />

        <p>
          {" "}
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.{" "}
        </p>
        <img src={Image3} alt="" />

        <p>
          {" "}
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.{" "}
        </p>
      </div>
      <div className="meet-buddies">
        <h1> Meet Lang-Buddies!</h1>
        <p>
          {" "}
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.{" "}
        </p>
        <img src={Image4} alt="" />

        <p>
          {" "}
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.{" "}
        </p>
        <img src={Image5} alt="" />
      </div>

      <div className="reviews">
        <h1> What people say about us</h1>
        <StarRating></StarRating>
      </div>
      <div className="footer">
        <Footer></Footer>
      </div>
    </section>
  );
}

export default HomePage;
