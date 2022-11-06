import React from "react";
import { CareerDigests as data } from "../../content/career";
import CareerCard from "../../components/CareerCard";
import { Typography } from "antd";


const { Title } = Typography;


const SectionCareer = () => {
  return (
    <div>
      <Title>Career</Title>
      <br/>
      <br/>

        {data.map((entry, idx) => (
            <CareerCard
            key={idx}
            digest={entry}
            style={{
              paddingBottom: "1em",
              margin: "auto"
            }}
            />
        ))}
    </div>
  );
};


export default SectionCareer;
