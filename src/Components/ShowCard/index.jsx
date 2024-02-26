import React from "react";

const ShowCard = ({ show }) => {
  return (
    <div className="show-card">
      <div>
        <img src={show.image.medium} />
      </div>
      <div>
        <div>{show.rating.average}</div>
        <div>{show.name}</div>
        <em>{show.language}, {show.premiered}</em>
        <div dangerouslySetInnerHTML={{__html: show.summary}}></div>
      </div>
    </div>
  );
};

export default ShowCard;
