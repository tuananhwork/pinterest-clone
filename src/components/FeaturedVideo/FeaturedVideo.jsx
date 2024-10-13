import React from 'react'
import './FeaturedVideo.css'

const FeaturedVideo = () => {
  return (
    <div className='featured-video'>
        <h1>Featured videos</h1>
        <div className="container">
          <div className="item">
            <div></div>
            <h5>make a flower chandelier...</h5>
            <span>DIY And Crafts</span>
          </div>
          <div className="item">
            <div></div>
            <h5>Is Exercise a Must to Ket...</h5>
          </div>
          <div className="item">
            <div></div>
            <h5>Crochet pattern for home...</h5>
            <span>DIY And Crafts</span>
          </div>
          <div className="item">
            <div></div>
            <h5>Instant Pot Popcorn</h5>
            <span>Food And Drink</span>
          </div>
          <div className="item">
            <div></div>
            <h5>Paper Plate Snail</h5>
            <span>DIY And Crafts</span>
          </div>
        </div>
    </div>
  )
}

export default FeaturedVideo