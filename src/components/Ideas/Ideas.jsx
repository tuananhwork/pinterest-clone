import React from "react";
import { Header } from "../Layout";
import "./Ideas.css";

const exploreData = [
  {
    imgUrl: "",
    title: "Lorem",
    desc: "Lorem",
  },
  {
    imgUrl: "",
    title: "Lorem",
    desc: "Lorem",
  },
  {
    imgUrl: "",
    title: "Lorem",
    desc: "Lorem",
  },
];

const Interests = [
  {
    imgUrl: "/images/ideas/interests/interests1.jpg",
    title: "Halloween decor",
  },
  {
    imgUrl: "/images/ideas/interests/interests2.jpg",
    title: "Halloween recipe",
  },
  {
    imgUrl: "/images/ideas/interests/interests3.jpg",
    title: "Halloween costume",
  },
  {
    imgUrl: "/images/ideas/interests/interests4.jpg",
    title: "Halloween costumes for pet",
  },
  {
    imgUrl: "/images/ideas/interests/interests5.jpg",
    title: "Halloween costumes for baby",
  },
];
const items = [
  {
    url: "/images/ideas/explore/explore1.jpg",
    title: "Title 1",
    desc: "Lorem ipsum",
  },
  {
    url: "/images/ideas/explore/explore2.jpg",
    title: "Title 1",
    desc: "Lorem ipsum",
  },
  {
    url: "/images/ideas/explore/explore3.jpg",
    title: "Title 1",
    desc: "Lorem ipsum",
  },
  {
    url: "/images/ideas/explore/explore1.jpg",
    title: "Title 1",
    desc: "Lorem ipsum",
  },
  {
    url: "/images/ideas/explore/explore2.jpg",
    title: "Title 1",
    desc: "Lorem ipsum",
  },
  {
    url: "/images/ideas/explore/explore1.jpg",
    title: "Title 1",
    desc: "Lorem ipsum",
  },
  {
    url: "/images/ideas/explore/explore2.jpg",
    title: "Title 1",
    desc: "Lorem ipsum",
  },
  {
    url: "/images/ideas/explore/explore3.jpg",
    title: "Title 1",
    desc: "Lorem ipsum",
  },
  {
    url: "/images/ideas/explore/explore2.jpg",
    title: "Title 1",
    desc: "Lorem ipsum",
  },
  {
    url: "/images/ideas/explore/explore2.jpg",
    title: "Title 1",
    desc: "Lorem ipsum",
  },
];

const Explore = () => {
  return (
    <>
      <h1>Explore the best of Pinterest</h1>
      <div>
        {exploreData.map((item, index) => (
          <div className="explore-item" key={index}>
            <img src={item.imgUrl} alt={item.title} />
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
      <h2>Pinterests</h2>
      <div>
        {Interests.map((photo, index) => (
          <div className="interests-item" key={index}>
            <img src={photo.imgUrl} alt={photo.title} />
            <h2>{photo.title}</h2>
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
        <h1>What's new on Pinterest</h1>
        <div>
          {imgs.map((img, index) => (
            <div className="whatnews-img" key={index}>
              <img src={img.url} />
              <h1>{img.title}</h1>
              <p>{img.desc}</p>
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
        <WhatNews imgs={items} />
      </div>
    </div>
  );
};

export default Ideas;
