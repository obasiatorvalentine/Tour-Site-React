import React from "react";
export default function TourTextInfo(props) {
  const myProps = props.props;
  console.log(props)
  const [full, setFull] = React.useState(false);
  return (
    <div className="tour-card-component" id={myProps.index} key={myProps.id}>
      <div className="image-container">
        <img src={myProps.image} alt="" />
        <span>${myProps.price}</span>
      </div>
      <div className="image-content">
        <h4>{myProps.name}</h4>
        <p>
          {full ? myProps.info : myProps.info.substring(0, 200)+'...'}
          <button className="text-button" onClick={() => setFull(!full)}>
            {full ? "show less" : "read more"}
          </button>
        </p>
        <button className="not-interested" onClick={(event) => props.handleRemove(event)}>
          Not Interested
        </button>
      </div>
    </div>
  );
}
