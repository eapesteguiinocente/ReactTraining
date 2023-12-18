import React from 'react';

const Vehiculo = (props) => {
  const { name, model } = props;

  return (
    <li>
      <p>{name} - Es un vehículo {model}</p>
    </li>
  );
};

export default Vehiculo;
