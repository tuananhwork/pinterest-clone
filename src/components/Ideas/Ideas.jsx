import { Header } from '../Layout';
import './Ideas.css';

const exploreData = [
  {
    imgUrl: '/images/ideas/explore/explore1.jpg',
    title: 'Mindless musings',
    desc: 'Reamy window views',
  },
  {
    imgUrl: '/images/ideas/explore/explore2.jpg',
    title: 'Puffed perfectio',
    desc: 'Inflated wallpapers',
  },
  {
    imgUrl: '/images/ideas/explore/explore3.jpg',
    title: 'Playful acceSsone',
    desc: 'Bag charms are the cutest trend to try',
  },
];

const interests = [
  {
    imgUrl: '/images/ideas/interests/interests1.jpg',
    title: 'Halloween decor',
  },
  {
    imgUrl: '/images/ideas/interests/interests2.jpg',
    title: 'Halloween recipe',
  },
  {
    imgUrl: '/images/ideas/interests/interests3.jpg',
    title: 'Halloween costume',
  },
  {
    imgUrl: '/images/ideas/interests/interests4.jpg',
    title: 'Halloween costumes for pet',
  },
  {
    imgUrl: '/images/ideas/interests/interests5.jpg',
    title: 'Halloween costumes for baby',
  },
];

const whatnews = [
  {
    url: '/images/ideas/category/category07.jpg',
    title: 'Cozy Corners',
    desc: 'Create your perfect reading nook',
  },
  {
    url: '/images/ideas/category/category09.jpg',
    title: 'Foodie Finds',
    desc: 'Discover hidden culinary gems',
  },
  {
    url: '/images/ideas/category/category04.jpg',
    title: 'Wellness Journey',
    desc: 'Holistic approaches to health',
  },
  {
    url: '/images/ideas/category/category03.jpg',
    title: 'Culinary Delights',
    desc: 'Explore new recipes and flavors',
  },
  {
    url: '/images/ideas/category/category10.jpg',
    title: 'Urban Jungle',
    desc: 'Bring nature indoors with houseplants',
  },
  {
    url: '/images/ideas/category/category02.jpg',
    title: 'Wanderlust',
    desc: 'Dream destinations for your next trip',
  },
  {
    url: '/images/ideas/category/category04.jpg',
    title: 'Wellness Journey',
    desc: 'Holistic approaches to health',
  },
  {
    url: '/images/ideas/category/category01.jpg',
    title: 'Fashion Forward',
    desc: 'Stay on trend with these looks',
  },
  {
    url: '/images/ideas/category/category09.jpg',
    title: 'Tech Trends',
    desc: 'The latest in gadgets and innovation',
  },
  {
    url: '/images/ideas/category/category08.jpg',
    title: 'Fitness Goals',
    desc: 'Workout ideas for every level',
  },
  {
    url: '/images/ideas/category/category05.jpg',
    title: 'DIY Projects',
    desc: 'Craft your way to a unique home',
  },
  {
    url: '/images/ideas/category/category10.jpg',
    title: 'Urban Jungle',
    desc: 'Bring nature indoors with houseplants',
  },
  {
    url: '/images/ideas/category/category02.jpg',
    title: 'Wanderlust',
    desc: 'Dream destinations for your next trip',
  },
  {
    url: '/images/ideas/category/category04.jpg',
    title: 'Wellness Journey',
    desc: 'Holistic approaches to health',
  },
  {
    url: '/images/ideas/category/category09.jpg',
    title: 'Foodie Finds',
    desc: 'Discover hidden culinary gems',
  },
  {
    url: '/images/ideas/category/category04.jpg',
    title: 'Wellness Journey',
    desc: 'Holistic approaches to health',
  },
  {
    url: '/images/ideas/category/category01.jpg',
    title: 'Fashion Forward',
    desc: 'Stay on trend with these looks',
  },
  {
    url: '/images/ideas/category/category09.jpg',
    title: 'Tech Trends',
    desc: 'The latest in gadgets and innovation',
  },
  {
    url: '/images/ideas/category/category04.jpg',
    title: 'Mindful Moments',
    desc: 'Find peace with meditation tips',
  },
  {
    url: '/images/ideas/category/category08.jpg',
    title: 'Wellness Journey',
    desc: 'Holistic approaches to health',
  },
  {
    url: '/images/ideas/category/category01.jpg',
    title: 'Fashion Forward',
    desc: 'Stay on trend with these looks',
  },
  {
    url: '/images/ideas/category/category09.jpg',
    title: 'Tech Trends',
    desc: 'The latest in gadgets and innovation',
  },
  {
    url: '/images/ideas/category/category06.jpg',
    title: 'Art Inspiration',
    desc: 'Unleash your creativity',
  },
  {
    url: '/images/ideas/category/category03.jpg',
    title: 'Sustainable Living',
    desc: 'Eco-friendly ideas for everyday life',
  },
  {
    url: '/images/ideas/category/category08.jpg',
    title: 'Pet Paradise',
    desc: 'Spoil your furry friends',
  },
  {
    url: '/images/ideas/category/category09.jpg',
    title: 'Foodie Finds',
    desc: 'Discover hidden culinary gems',
  },
  {
    url: '/images/ideas/category/category04.jpg',
    title: 'Wellness Journey',
    desc: 'Holistic approaches to health',
  },
  {
    url: '/images/ideas/category/category02.jpg',
    title: "Bookworm's Haven",
    desc: 'Must-read books for every genre',
  },
  {
    url: '/images/ideas/category/category10.jpg',
    title: 'Garden Oasis',
    desc: 'Transform your outdoor space',
  },
  {
    url: '/images/ideas/category/category05.jpg',
    title: 'Minimalist Living',
    desc: 'Simplify your life and space',
  },
  {
    url: '/images/ideas/category/category07.jpg',
    title: 'Vintage Vibes',
    desc: 'Retro-inspired decor and fashion',
  },
  {
    url: '/images/ideas/category/category01.jpg',
    title: 'Adrenaline Rush',
    desc: 'Extreme sports and adventures',
  },
  {
    url: '/images/ideas/category/category09.jpg',
    title: 'Foodie Finds',
    desc: 'Discover hidden culinary gems',
  },
  {
    url: '/images/ideas/category/category04.jpg',
    title: 'Wellness Journey',
    desc: 'Holistic approaches to health',
  },
  {
    url: '/images/ideas/category/category06.jpg',
    title: 'Movie Magic',
    desc: 'Behind-the-scenes film trivia',
  },
];

const Explore = () => {
  const style = {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  };
  const itemStyle = {
    width: '33.33%',
    boxSizing: 'border-box',
    padding: '10px',
  };
  const imgStyle = {
    width: '100%',
    aspectRatio: '1 / 1',
    objectFit: 'cover',
    height: '100%',
  };
  return (
    <>
      <h1 style={{ textAlign: 'center', fontSize: '28px', color: '#B60000' }}>Explore the best of Pinterest</h1>
      <div className="explore" style={style}>
        {exploreData.map((item, index) => (
          <div className="explore-item" key={index} style={itemStyle}>
            <img src={item.imgUrl} alt={item.title} style={imgStyle} />
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </>
  );
};

const Interest = () => {
  return (
    <>
      <h1 style={{ textAlign: 'center', fontSize: '28px', marginTop: '80px', color: '#B60000' }}>Pinterests</h1>
      <div className="interest-container" style={{ columnCount: 5, columnGap: '16px', padding: '20px' }}>
        {interests.map((photo, index) => (
          <div
            className="interest-item"
            key={index}
            style={{
              transition: 'transform 0.3s ease-in-out',
              '&:hover': {
                transform: 'scale(1.05)',
              },
              backgroundColor: 'white',
              borderRadius: '10px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              marginBottom: '16px',
              breakInside: 'avoid',
              overflow: 'hidden',
            }}
          >
            <img
              src={photo.imgUrl}
              alt={photo.title}
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
              }}
            />
            <div
              className="texts"
              style={{
                padding: '16px',
              }}
            >
              <h2>{photo.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

const WhatNews = ({ imgs }) => {
  return (
    <div>
      <>
        <h1 style={{ textAlign: 'center', fontSize: '28px', color: '#B60000' }}>What&apos;s new on Pinterest</h1>
        <div className="whatnews-container" style={{ columnCount: 5, columnGap: '16px', padding: '20px' }}>
          {imgs.map((img, index) => (
            <div
              className="whatnews-img"
              key={index}
              style={{
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
                backgroundColor: 'white',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                marginBottom: '16px',
                breakInside: 'avoid',
                overflow: 'hidden',
              }}
            >
              <img
                src={img.url}
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                }}
              />
              <div
                className="texts"
                style={{
                  padding: '16px',
                }}
              >
                <h1>{img.title}</h1>
                <p
                  style={{
                    color: '#666',
                    fontWeight: 400,
                  }}
                >
                  {img.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </>
    </div>
  );
};

const Ideas = () => {
  return (
    <div className="body">
      <Header />
      <div className="explore">
        <Explore />
        <Interest />
        <WhatNews imgs={whatnews} />
      </div>
    </div>
  );
};

export default Ideas;
