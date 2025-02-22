import React from "react";
import "./Team.css";
import Title from "../Title/Title";
import member_1 from "../../barber-assets/barber-1.jpg";
import member_2 from "../../barber-assets/barber-2.jpg";
import member_3 from "../../barber-assets/barber-3.jpg";

const Team = () => {
  return (
    <div className="team">
      <Title title="Our Staff" subTitle="Meet Our Team" />
      <div className="container team-display">
        <div className="member ">
          <img src={member_1} alt="" />
          <div className="caption">
            <h2>Jack</h2>
            <h4>
              From sharp fades to classic cuts, Jack delivers top-tier grooming
              with skill and passion.
            </h4>
          </div>
        </div>
        <div className="member">
          <img src={member_2} alt="" />
          <div className="caption">
            <h2>Jude</h2>
            <h4>
              From sharp fades to classic cuts, Jude delivers top-tier grooming
              with skill and passion.
            </h4>
          </div>
        </div>
        <div className="member">
          <img src={member_3} alt="" />
          <div className="caption">
            <h2>Abraham</h2>
            <h4>
              From sharp fades to classic cuts, Abraham delivers top-tier grooming
              with skill and passion.
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
