import React from 'react';

const Drone = (props) => {
  const { name, price } = props;

  return (
    <li>
      <p>{name} - ${price}</p>
    </li>
  );
};

export default Drone;
