import React from 'react';

const Drone = (props) => {
  const { name, model, price, imageUrl } = props;

  return (
    <div>
      <img src={imageUrl} alt={name} style={{height:250, width:250}} />
      <h2>{name}</h2>
      <p>Modelo: {model}</p>
      <p>Precio: ${price}</p>
      <hr></hr>
    </div>
  );
};

export default Drone;
