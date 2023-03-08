import React, { useEffect, useState } from "react";
import "./Featured.scss";
import { useNavigate } from "react-router-dom";
import { FiverrImages } from "../../fiverData";
function Featured() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    // navigate(`/gigs?search=${input}`);
  };

  return (
    <div className="featured">
      <div className="container">
        <div className="fiverDiv">
          <img className="fiverImage" src={FiverrImages[1].img} alt="" />
          <div className="absoluteContainer">
            <h1>
              Find the perfect <i>freelance</i> services for your business
            </h1>
            <div className="searchContainer">
              <form action="">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  type="text"
                  placeholder="Try building mobile.app"
                />
                <button onSubmit={handleSubmit}>Search</button>
              </form>
            </div>
            <div className="servicesbuttons">
              <span>Polpular:</span>
              <button>Web Design</button>
              <button>WordPress</button>
              <button>Logo Desing</button>
              <button>AI Services</button>
            </div>
          </div>
          <div className="absolute">{FiverrImages[1].name}</div>
          <div className="smallIinput">
            <div className="innerContainer">
              <h1>Find the perfect freelance services for your business</h1>
              <input placeholder="Try Building mobile.app" type="text" />
              <button>Search</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
