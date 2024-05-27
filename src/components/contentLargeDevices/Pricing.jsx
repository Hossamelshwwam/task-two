const Pricing = () => {
  return (
    <div className="pricing">
      <div className="container">
        <div className="pricing-titles">
          <div className="main-title">Affordable pricing</div>
          <div className="sub-title">
            Bill me <span className="special">monthly</span>
            <span className="dot"></span> yearly
          </div>
        </div>
        <div className="pricing-plans">
          <div className="card">
            <div>
              <div className="title">
                <p>like a homeless</p>
              </div>
              <div className="price">
                Free<span>/ forever</span>
              </div>
              <div className="features">
                <div className="feature">
                  <div className="icon-container">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <p>componenets-driven system</p>
                </div>
                <div className="feature">
                  <div className="icon-container">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <p>sales-boosting landing pages</p>
                </div>
                <div className="feature">
                  <div className="icon-container">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <p>awesome feather icons pack</p>
                </div>
              </div>
            </div>
            <button>try it free</button>
          </div>
          <div className="card shadow">
            <div>
              <div className="title">
                <p>
                  <i className="fa-solid fa-user"></i> individual
                </p>
                <p className="label">best!</p>
              </div>
              <div className="price">
                Free<span>/ forever</span>
              </div>
              <div className="features">
                <div className="feature">
                  <div className="icon-container gold">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <p>componenets-driven system</p>
                </div>
                <div className="feature">
                  <div className="icon-container gold">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <p>sales-boosting landing pages</p>
                </div>
                <div className="feature">
                  <div className="icon-container gold">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <p>awesome feather icons pack</p>
                </div>
                <div className="feature">
                  <div className="icon-container gold">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <p>themed into 3 different styles</p>
                </div>
                <div className="feature">
                  <div className="icon-container gold">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <p>will help to learn figm</p>
                </div>
              </div>
            </div>
            <button className="best-seller">regular lincense</button>
          </div>
          <div className="card">
            <div>
              <div className="title">
                <p>
                  <i className="fa-solid fa-users"></i> corporate
                </p>
              </div>
              <div className="price">
                Free<span>/ forever</span>
              </div>
              <div className="features">
                <div className="feature">
                  <div className="icon-container green">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <p>componenets-driven system</p>
                </div>
                <div className="feature">
                  <div className="icon-container green">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <p>sales-boosting landing pages</p>
                </div>
                <div className="feature">
                  <div className="icon-container green">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <p>awesome feather icons pack</p>
                </div>
                <div className="feature">
                  <div className="icon-container green">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <p>themed into 3 different styles</p>
                </div>
              </div>
            </div>
            <button>extended lincense</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
