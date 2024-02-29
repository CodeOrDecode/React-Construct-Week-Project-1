import React from "react";
import "../Css/Signup.css";
import { MdRadioButtonChecked } from "react-icons/md";

const Signup = () => {
  return (
    <>
      <div className="signupimg">
        <img
          src="https://my.asos.com/Content/images/asos-logo-2022-93x28.png"
          alt=""
        />
      </div>

      <div className="mainsignupcon">
        <div className="signuptwolinks">
          <div className="twolinkone">JOIN</div>
          <div className="twolinkone">SIGN IN</div>
        </div>
        <div className="ruller"></div>

        <div className="formsection">
          <div className="firstform">
            <label>EMAIL ADDRESS : </label>
            <input type="email" />
          </div>
          <div className="secondform">
            <label>LAST NAME : </label>
            <input type="text" />
          </div>
          <div className="thirdform">
            <label>PASSWORD : </label>
            <input type="Password" />
          </div>

          <div className="buttondivsignup">JOIN ASOS</div>
          <p className="forgetone">Forgot password?</p>
          <div className="privacyone">
            <span>Privacy Policy</span>
            <span>Terms and Conditions</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
