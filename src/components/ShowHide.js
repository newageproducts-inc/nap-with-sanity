import React, { useState } from "react";

import imgGray from "../assets/img/grey.jpg";
import imgRed from "../assets/img/red.jpg";
import imgWhite from "../assets/img/white.jpg";
import imgBlack from "../assets/img/black.jpg";

function ShowHide() {
  const professions = ["gray", "red", "white", "black"];
  const [myProfession, setMyProfession] = useState(professions[0]);

  return (
    <div class="showhide-container page-section">
      <div className="">
        <div className="col mb-3 col-12 text-center">
          <h2>Select the profession you like the most</h2>
          <br />
          <div className="btn-group" role="group" aria-label="Basic example">
            {professions.map(profession => (
              <button
                type="button"
                key={profession}
                className={"btn btn-light border-dark "}
                onClick={() => setMyProfession(profession)}
              >
                {profession.toLocaleUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <div className="col text-center">
          {/* <p class="image_name">{myProfession}</p> */}

          {myProfession === "gray" && <img src={imgWhite} alt="" />}
          {myProfession === "red" && <img src={imgRed} alt="" />}
          {myProfession === "white" && <img src={imgGray} alt="" />}
          {myProfession === "black" && <img src={imgBlack} alt="" />}
        </div>
      </div>
    </div>
  );
}

export default ShowHide;
