import React from 'react'
import { Footer, Header } from '../Layout'
import 'reactjs-popup/dist/index.css';
import './Home.css'

const Home = () => {
  return (
    <div>
        <Header />
        <div className="container">
            <section id="top">
                <h1 className="title">Get your next</h1>
                <div className="slideshow-container">
                    <div className="mySlides fade">
                        <h2 className="slide-title">green thumb idea</h2>
                        <div className="image-container">
                            <img src="/images/top/top1.jpg" alt="" />
                            <img src="/images/top/top2.jpg" alt="" />
                            <div className="middle">
                                <div className="icon"></div>
                                <img src="/images/top/top3.jpg" alt="" />
                            </div>
                            <img src="/images/top/top4.jpg" alt="" />
                            <img src="/images/top/top5.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <div className="work">
                <div className="gradient"></div>
                <span>Here's how it works</span>
                <div>i</div>
            </div>
            <section id="search">
                <div className="section-img">
                    <img src="/images/search/search1.jpg" alt="" />
                    <img src="/images/search/search2.jpg" alt="" />
                    <img src="/images/search/search3.jpg" alt="" />
                    <img src="/images/search/search4.jpg" alt="" />
                    <div className='ecd'>
                        <i>S</i>
                        <span>easy chicken dinner</span>
                    </div>
                </div>
                <div className="section-text">
                    <h1>Search for an idea</h1>
                    <p>What do you want to try next? Think of something you’re into—like “easy chicken dinner”—and see what you find.</p>
                    <button>Explore</button>
                </div>
            </section>
            <section id="save">
                <div className="section-text">
                    <h1>Save ideas you like</h1>
                    <p>Collect your favourites so you can get back to them later.</p>
                    <button>Explore</button>
                </div>
                <div className="section-img">
                    <img src="/images/save/save1.jpg" alt="" />
                    {/* <div className="img-detail">
                        <span>Fern future home vibes</span>
                        <div className="img-detail-img">
                            <img src="/images/save/save6.jpg" alt="" />
                            <img src="/images/save/save7.jpg" alt="" />
                            <img src="/images/save/save8.jpg" alt="" />
                        </div>
                    </div> */}
                    <img src="/images/save/save2.jpg" alt="" />
                    <img src="/images/save/save3.jpg" alt="" />
                    <img src="/images/save/save4.jpg" alt="" />
                    <img src="/images/save/save5.jpg" alt="" />
                </div>
            </section>
            <section id="shop">
                <div className="section-img">
                    <img src="/images/shop/shop1.png" alt="" />
                    <img src="/images/shop/shop2.png" alt="" />
                    <img src="/images/shop/shop3.png" alt="" />
                </div>
                <div className="section-text">
                    <h1>See it, make it, try it, do it</h1>
                    <p>The best part of Pinterest is discovering new things and ideas from people around the world.</p>
                    <button>Explore</button>
                </div>
            </section>
            <section id="bottom"></section>
        </div>
        <Footer />
    </div>
  )
}

export default Home