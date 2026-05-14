import React, { useState } from 'react'
import './Home.css'
import Card from '../card/Card'
import { propertyData } from '../../utils/data'
import Nav from '../NavBar/Nav'


const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState('Trending')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredProduct = propertyData.filter((item) => {
    const matchesCategory = item.category === selectedCategory;
    const matchesSearch = item.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  })
  return (
    <div className='home'>
      <Nav
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery} 
      />
      <main className='main-container'>
        <div className="property-grid">
          {filteredProduct.length > 0 ? (filteredProduct.map((property) => (
            <Card key={property.id} item={property} />
          ))) : (
            <div className="no-results">
              <h2>No properties found in {selectedCategory}</h2>
              <button onClick={() => {
                setSelectedCategory("Trending");
                setSearchQuery("");
              }}>
                View Trending
              </button>
            </div>
          )}
        </div>
      </main>
      <footer className="footer">
        <p>© 2026 Private Property Rental. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Home
