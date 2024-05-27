const Home = () => {
  console.log("Homesmall");
  return (
    <div className="home-mobile">
      <div className="titles">
        <p className="main-mobile-titles">mobile</p>
        <p className="sec-mobile-title">
          <span className="special-word">cool</span>
          images
        </p>
        <p className="description">
          to create any grid by scaling and resizing
        </p>
        <div className="arrow-down">
          <i className="fa-solid fa-arrow-down"></i>
        </div>
      </div>
      <div className="gallery-mobile">
        <div className="gallery-1"></div>
        <div className="gallery-2"></div>
        <div className="gallery-3"></div>
        <div className="gallery-4"></div>
        <div className="gallery-5"></div>
        <div className="gallery-6"></div>
        <div className="gallery-7"></div>
        <div className="gallery-8">
          <button className="default-button">learn more</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
