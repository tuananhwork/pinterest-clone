import React from 'react'
import { Header } from '../Layout'
import './Video.css'
import FeaturedVideo from '../FeaturedVideo/FeaturedVideo'
import Interest from '../Interest/Interest'

const Videos = () => {
  return (
    <div>
        <Header />
        <section className="suggest">
          <div className='item'>
            <img src="/images/suggest/suggest1.jpg" alt="" />
            <div className="overlay"></div>
            <span>Fashion</span>
            <h1>Discover trending looks</h1>
            <button>See videos</button>
          </div>
          <div className='item'>
            <img src="/images/suggest/suggest2.jpg" alt="" />
            <div className="overlay"></div>
            <span>Beauty</span>
            <h1>Try the latest tips and tricks</h1>
            <button>See videos</button>
          </div>
          <div className='item'>
            <img src="/images/suggest/suggest3.jpg" alt="" />
            <div className="overlay"></div>
            <span>Home</span>
            <h1>Design your ideal space</h1>
            <button>See videos</button>
          </div>
          <div className='item'>
            <img src="/images/suggest/suggest4.jpg" alt="" />
            <div className="overlay"></div>
            <span>DIY</span>
            <h1>Start a new craft project</h1>
            <button>See videos</button>
          </div>
          <div className='item'>
            <img src="/images/suggest/suggest5.jpg" alt="" />
            <div className="overlay"></div>
            <span>Food & Drink</span>
            <h1>Find your inner chef</h1>
            <button>See videos</button>
          </div>
        </section>
        <FeaturedVideo />
        <Interest />
    </div>
  )
}

export default Videos