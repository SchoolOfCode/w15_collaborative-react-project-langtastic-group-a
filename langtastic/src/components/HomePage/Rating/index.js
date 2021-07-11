import React from "react";
import { FaStar } from 'react-icons/fa'
import "./index.css";


function StarRating(){
    return (
        <section> 
          <div>
            <FaStar className="star"></FaStar>
            <FaStar className="star"></FaStar>
            <FaStar className="star"></FaStar>
            <FaStar className="star"></FaStar>
            <FaStar className="star"></FaStar>
            <p> Amazing, they helped me improve my speaking skills and now I'm able to communicate with my mother-in-law!</p>
            <FaStar className="star"></FaStar>
            <FaStar className="star"></FaStar>
            <FaStar className="star"></FaStar>
            <FaStar className="star"></FaStar>
            <FaStar className="star"></FaStar>
            <p> It has been an incredible jorney, they connect you with native tutors that teach you the slang! I no longer feel anxious when travelling around.  </p>

          </div>

        </section>
    )


}

export default StarRating;