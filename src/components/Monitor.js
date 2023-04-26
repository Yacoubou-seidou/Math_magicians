import React from 'react';

const Monitor = (prop) => {
  const { value } = prop;
  return (
    <section className="monitor">
      <p>
        {value.total}
        {value.operation}
        {value.next}
      </p>
    </section>
  );
};

export default Monitor;
