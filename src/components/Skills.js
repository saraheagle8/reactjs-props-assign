import React from 'react';

export default function Skills(props) {
  return (
    <div className="container">
      <div className="row">
        {props.images.map((i) => {
          return (
            <div className="col">
              <img src={i.image} width="75" height="75" />
              <h4>{i.name}</h4>
              <p>
                List skills technologies here. Aenean commodo ligula eget dolor.
                Aenean commodo ligula eget dolor. Aenean commodo ligula eget
                dolor.
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
