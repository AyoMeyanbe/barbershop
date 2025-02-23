import React from "react";
import "./Team.css";
import Title from "../Title/Title";
import member_1 from "../../barber-assets/barber-1.jpg";
import member_2 from "../../barber-assets/barber-2.jpg";
import member_3 from "../../barber-assets/barber-3.jpg";

const Team = () => {
  const members = [
    {
      name: "Jack",
      image: member_1,
      text: "From sharp fades to classic cuts, Jack delivers top-tier grooming with skill and passion."
              
    },
    {
      name: "Jude",
      image: member_2,
      text: "From sharp fades to classic cuts, Jack delivers top-tier grooming with skill and passion."
              
    },
    {
      name: "Abraham",
      image: member_3,
      text: "From sharp fades to classic cuts, Jack delivers top-tier grooming with skill and passion."
              
    },
  ]
  return (
    <div className="team">
      <Title title="Our Staff" subTitle="Meet Our Team" type="secondary" />
      <div className="container team-display">
      {members.map((member, index) => (
          <div className="member ">
          <img src={member.image} alt="" />
          <div className="caption">
            <h2>{member.name}</h2>
            <h4>
              {member.text}
            </h4>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
