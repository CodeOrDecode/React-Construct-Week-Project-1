import React from "react";
import "../Css/Men.css";
import Navbar from "../Allsimilar/Navbar";
import ReactPlayer from "react-player";

const Men = () => {
  return (
    <>
      <Navbar />

      <div className="mendivmainisthis">
        <div className="menbannerone">
          <div className="menbenonepart">
            <p className="menbenonepartin">25% OFF SELECTED STYLES!*</p>
            <p className="menbentwopartin">With code: TREATYASELF</p>
          </div>
          <div className="menbentwopart">
            <p className="menbentwopartend">FREE WORLDWIDE DELIVERY</p>
          </div>
        </div>

        <div className="menbenafterone">
          <div className="menbenafteroneinone">
            <div className="payday">PAYDAY SALE</div>
            <p className="twentyfive"> 25% OFF SELECTED STYLES!</p>
            <div className="withcode">
              <p>With code: </p>
              <div>TREATYASELF</div>
            </div>
            <p className="afterwithcode">
              See website banner for Ts&amp;Cs. Selected marked products
              excluded from promo.
            </p>
          </div>
        </div>

        <div className="videoset">
          <ReactPlayer
            url="https://video.asos-media.com/Navigation/_content_MW_ASOS_FNS_Homepage_Desktop_Global_1258x600_Cinemagraph_V3_OW_Flash9_1440xAuto_2000K.mp4"
            width="1252px"
            height=""
            playing={true}
            loop={true}
            controls={true}
            volume="0"
            muted={true}
          />
        </div>

        <div className="absoluteone">
          <p>New trend: Streetwear</p>
          <p>staples</p>
        </div>

        <div className="aftervideoplayer">
          <div className="aftervideoinside">
            <img
              src="https://content.asos-media.com/-/media/homepages/mw/2024/february/19-gbl/mw_denim_hp_hero_870x1110_app_plain_240215114919.png"
              alt=""
            />
          </div>
          <div className="aftervideoinside">
            <img
              src="https://content.asos-media.com/-/media/homepages/mw/2024/february/19-gbl/mw_global_bohemian_summer_moment_870x1110.jpg"
              alt=""
            />
          </div>
          <div className="aftervideoinside">
            <img
              src="https://content.asos-media.com/-/media/homepages/mw/2024/february/19-gbl/mw_global_tommy_jeans_moment_870x1110.jpg"
              alt=""
            />
          </div>
          <div className="aftervideoinside">
            <img
              src="https://content.asos-media.com/-/media/homepages/mw/2024/february/19-gbl/mw_global_quiet_luxury_moment_870x1110.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Men;
