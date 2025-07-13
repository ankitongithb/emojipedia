import React from "react";

function Level(props) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label={props.head}>
          {props.emoji}
        </span>
        <span>{props.head}</span>
      </dt>
      <dd>{props.desc} </dd>
    </div>
  );
}
export default Level;
