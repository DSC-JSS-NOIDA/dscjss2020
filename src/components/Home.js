import React from "react";
import Lottie from "react-lottie";
import TeamAnim from "../assets/animation/TeamAnim.json";
import codesandbox from "../assets/img/codesandbox.svg";
import Clubs from "./Clubs";
import Join from "./Join";
import NavbarDefault from "./NavbarDefault";
import Footer from "./Footer";
function Home() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: TeamAnim,
  };
  console.log("width",window.innerWidth)
  return (
    <>
    <NavbarDefault />
      <div className="flex__row">
        <div className="page__headline">
          {/* <span className="page__heading">GDSC JSS NOIDA</span> */}
          <span className="page__heading">{window.innerWidth>768?"GDSC JSS NOIDA": "GDSC JSSATEN"}</span>
          <span className="page__content">
            A community of
            <span style={{ color: "#0F9D58", fontWeight: "bolder" }}>
              {" "}
              Developers
            </span>
            ,
            <span style={{ color: "#DB4437", fontWeight: "bolder" }}>
              {" "}
              Designers
            </span>{" "}
            and
            <span style={{ color: "#4285F4", fontWeight: "bolder" }}>
              {" "}
              Programmers{" "}
            </span>
            who grow their knowledge in a peer-to-peer learning environment and
            build solutions for local businesses and their community.
          </span>
          <a
            href="https://dsc.community.dev/jss-academy-of-technical-education-noida/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button type="button" className="btn btn-primary join-us-btn">
              <img src={codesandbox} className="codesandbox" alt="icon"  style={{}}/>
              <p>Join Us</p>
            </button>
          </a>
        </div>
        <Lottie
          options={defaultOptions}
          // height={700}
          width={700}
          // style={{ margin: "0px", maxWidth: "100%", padding: "60px" }}
        />
      </div>
      <Clubs />
      <Join />
      <Footer />
    </>
  );
}

export default Home;
