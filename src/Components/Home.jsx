import React from "react";
import "../Css/Home.css";
import Navbar from "../Allsimilar/Navbar";
import Footer from "../Allsimilar/Footer";
const Home = () => {
  return (
    <>
      <Navbar />

      <div className="firstbanner">
        <div id="firstbannerone">
          <div>WOMEN</div>
        </div>
        <div id="firstbannertwo">
          <p>25% OFF SELECTED STYLES!*</p>
          <p>With code: TREATYASELF</p>
        </div>
        <div id="firstbannerthree">
          <div>MEN</div>
        </div>
      </div>

      <div className="secondbanner">
        <div className="secondpone">This is ASOS</div>
        <div className="secondptwo">ASOS DESIGN and 850+ brands</div>
        <div className="buttondiv">
          <div className="buttondivchild">SHOP WOMEN</div>
          <div className="buttondivchild">SHOP MEN</div>
        </div>
      </div>

      <div className="thirdbanner">
        <div className="thirdbannerdiv">
          <p>EASY WORLDWIDE DELIVERY</p>
          <p>*minimum spends apply</p>
        </div>
        <div className="thirdbannerdiv">
          <p>ASOS DESIGN and 850+</p>
          <p id="differ">brands</p>
        </div>
      </div>

     

      <Footer />
    </>
  );
};

export default Home;
