import React from 'react';

const Monitor = (prop) => {
  const { value } = prop;
  return (
    <section className="monitor">
      <p>{value}</p>
    </section>
  );
};

export default Monitor;
