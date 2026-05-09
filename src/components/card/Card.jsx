import React, { useRef } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import './card.css';
import house from '../../assets/house.jpg'


const Card = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = direction === 'left' ? -clientWidth : clientWidth;
      
      scrollRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className='card'>
      <div className="image-wrapper">
        {/* Navigation Buttons */}
        <button className="nav-btn left" onClick={() => scroll('left')}>
          <IoIosArrowBack />
        </button>
        <button className="nav-btn right" onClick={() => scroll('right')}>
          <IoIosArrowForward />
        </button>

        <div className="images" ref={scrollRef}>
          <img src={house} alt="House view 1" />
          <img src={house} alt="House view 2" />
          <img src={house} alt="House view 3" />
        </div>
      </div>
      
      <div className="card-info">
        <span className='card-span1'>2BHK villa in Kerala</span>
        <span className='card-span1'>18000/month</span>
      </div>
    </div>
  );
};
export default Card