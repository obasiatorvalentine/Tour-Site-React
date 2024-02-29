import React from "react";
import TourTextInfo from "./TourTextInfo";
export default function TourCard(props) {
  //console.log(props);
  return<>
    {props.tourData.map((item, index, array) => (
      <TourTextInfo 
      props={props.tourData[index]}
      handleRemove={props.handleRemove}
      />
    ))}
  </>;
}
