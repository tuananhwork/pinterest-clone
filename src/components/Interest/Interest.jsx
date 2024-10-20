import "./Interest.css";

const line1Imgs = [
  {
    name: "Picture 1",
    url: "https://example.com/picture1.jpg",
  },
  {
    name: "Picture 2",
    url: "https://example.com/picture2.jpg",
  },
  {
    name: "Picture 3",
    url: "https://example.com/picture3.jpg",
  },
  {
    name: "Picture 4",
    url: "https://example.com/picture4.jpg",
  },
  {
    name: "Picture 5",
    url: "https://example.com/picture5.jpg",
  },
];

const Content = ({ title, imgs }) => {
  return (
    <div className="content">
      <h2>{title}</h2>
      <div className="item">
        {imgs.map((img, index) => (
          <div key={index}>
            <h3>{img.name}</h3>
            <img src={img.url} alt={img.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

const Interest = () => {
  return (
    <div className="interest">
      <h1>Browse by Interest</h1>
      <div className="container">
        <Content title="Header 1" imgs={line1Imgs} />
        <Content title="Header 2" imgs={line1Imgs} />
      </div>
    </div>
  );
};

export default Interest;
