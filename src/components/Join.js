import React from "react";
import JoinSlack from "./JoinSlack";
import JoinDiscord from "./JoinDiscord";
import JoinMail from "./JoinMail";
import JoinTelegram from "./JoinTelegram";

function Join() {
  return (
    <>
      <div className="flex__row mb-5">
        <h2
          style={{     margin: "0 auto", marginBottom: "-25px" }}
          className="join-headline"
        >
          <p>
            Let's{" "}
            <span style={{ color: "rgb(15, 157, 88)" }}>Connect!</span>
          </p>
        </h2>
      </div>
      <div className="flex__row">
        <div className="row">
          <div className="col-md-6">
            <JoinSlack />
          </div>
          <div className="col-md-6">
            <JoinDiscord />
          </div>
        </div>
      </div>
      <div className="flex__row mb-5">
        <div className="row">
          <div className="col-md-6">
            <JoinTelegram />
          </div>
          <div className="col-md-6">
            <JoinMail />
          </div>
        </div>
      </div>
    </>
  );
}

export default Join;
