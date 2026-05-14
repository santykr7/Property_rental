import React from 'react';
import { useParams } from 'react-router-dom';
import { propertyData } from '../../utils/data';
import './PropertyDeatils.css'
import Nav from '../../components/NavBar/Nav';

const PropertyDetails = () => {
  const { id } = useParams(); 

  const property = propertyData.find((p) => p.id === parseInt(id));

  if (!property) return <h2>Property not found!</h2>;

  return (
    <div className="property-details">
      <Nav />
      <div className="details-container">
        <div className="title-section">
          <h1>{property.title}</h1>
          <div className="sub-header">
            <span>★ {property.rating}</span>
            <span>{property.location}</span>
          </div>
        </div>

        <div className="photo-grid-container">

          <div className="hero-image">
            <img src={property.images[0]} alt="Hero" />
          </div>

          <div className="side-grid">
            {property.images.slice(1, 5).map((img, i) => (
              <div key={i} className="side-img-wrapper">
                <img src={img} alt={`View ${i + 1}`} />
              </div>
            ))}
          </div>

          <button className="show-all-btn">Show all photos</button>
        </div>

        <div className="content-section">
          <div className="description">
            <h2>Hosted by Private Property</h2>
            <p>Experience luxury and comfort in this beautiful {property.category.toLowerCase()}.</p>
            <hr />
            <div className="amenities">
              <h3>What this place offers</h3>
              <ul>
                <li>WiFi</li>
                <li>Kitchen</li>
                <li>Free parking</li>
              </ul>
            </div>
          </div>
          <div className="booking-widget">
            <h3>₹{property.price} / month</h3>
            <button className="book-btn">Reserve Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;