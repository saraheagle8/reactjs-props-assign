import React from 'react';
var images = [
  'https://ctechhosting.com/images-354/java.png',
  'https://ctechhosting.com/images-354/python.png',
  'https://ctechhosting.com/images-354/react.png',
  'https://ctechhosting.com/images-354/sql.png',
];

export default function Skills(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          {/* <img src={images[0]} width="75" height="75" /> */}
          images.map((i) => {
            <img src={i} width="75" height="75" />;
          });
          <h4>{props.skillnames[1]}</h4>
          <p>
            List skills technologies here. Aenean commodo ligula eget dolor.
            Aenean commodo ligula eget dolor. Aenean commodo ligula eget dolor.
          </p>
        </div>
      </div>
    </div>
  );
}

function Image({ images }) {
  return images.map((i) => {
    <img src={i} width="75" height="75" />;
  });
}
