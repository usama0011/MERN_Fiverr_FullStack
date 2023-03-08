import React from "react";
import "./LogoMaker.scss";
const LogoMaker = () => {
  return (
    <div className="logo">
      <div className="container">
        <div className="absoulteDiv">
          <p className="logoMakder">
            <b>fiver</b>logo<pre>maker.</pre>
          </p>
          <h2>Make an incredible logo</h2>
          <pre>in minutes</pre>
          <div>
            <span>Pre-deisnged by top talent. Just add your touch</span>
          </div>
          <button>Try Fiverr Logo Maker</button>
        </div>
        <img
          src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_1160,dpr_1.0/v1/attachments/generic_asset/asset/b49b1963f5f9008f5ff88bd449ec18f7-1608035772453/logo-maker-banner-wide-desktop-1352-2x.png"
          alt=""
          className="logoImage"
        />
      </div>
    </div>
  );
};

export default LogoMaker;
