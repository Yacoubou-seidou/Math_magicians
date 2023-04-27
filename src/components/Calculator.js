import React, { useState } from 'react';
import Monitor from './Monitor';
import calculate from '../logic/calculate';
import Quote from './Quote';

const Calculator = () => {
  const [value, setValue] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const eventHandler = (e) => {
    setValue((value) => ({
      ...value,
      ...calculate(value, e.target.name),
    }));
  };
  return (
    <div className="main">
      <Quote />
      <div className="calculator">
        <Monitor value={value} />
        <section className="calcbtnContainer">
          <button onClick={eventHandler} type="button" name="AC">AC</button>
          <button type="button" onClick={eventHandler} className="twosigne" name="+/-">-/+</button>
          <button type="button" onClick={eventHandler} className="pourcent" name="%">%</button>
          <button type="button" onClick={eventHandler} className="orange" name="÷">&#247;</button>
          <button type="button" onClick={eventHandler} name="7">7</button>
          <button type="button" onClick={eventHandler} name="8">8</button>
          <button type="button" onClick={eventHandler} name="9">9</button>
          <button type="button" className="orange" onClick={eventHandler} name="x">&#215;</button>
          <button type="button" onClick={eventHandler} name="4">4</button>
          <button type="button" onClick={eventHandler} name="5">5</button>
          <button type="button" onClick={eventHandler} name="6">6</button>
          <button type="button" className="orange" onClick={eventHandler} name="-">-</button>
          <button type="button" onClick={eventHandler} name="1">1</button>
          <button type="button" onClick={eventHandler} name="2">2</button>
          <button type="button" onClick={eventHandler} name="3">3</button>
          <button type="button" className="orange" onClick={eventHandler} name="+">+</button>
          <button type="button" className="zero" onClick={eventHandler} name="0">0</button>
          <button type="button" onClick={eventHandler} name=".">.</button>
          <button type="button" className="orange" onClick={eventHandler} name="=">=</button>
        </section>
      </div>
    </div>
  );
};
export default Calculator;
