import React, { useRef } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import './card.css';
import house from '/properties/house.jpg'


const Card = ({ item }) => {
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
        <button className="nav-btn left" onClick={() => scroll('left')}><IoIosArrowBack /></button>
        <button className="nav-btn right" onClick={() => scroll('right')}><IoIosArrowForward /></button>

        <div className="image-container" ref={scrollRef}>
          {item.images.map((imgSrc, index) => (
            <img key={index} src={imgSrc} alt="property" loading='lazy' />
          ))}
        </div>
        <div className="wishlist-icons">❤️</div>
      </div>

      <div className="card-info">
        <div className="card-header">
          <h3 className="title">{item.title}</h3>
          <span className="rating">★ {item.rating}</span>
        </div>
        <p className="loaction">{item.location}</p>
        <p className="price"><strong>₹{item.price}</strong> / month</p>
      </div>
    </div>
  );
};
export default Card