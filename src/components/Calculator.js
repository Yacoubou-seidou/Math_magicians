import React, { useState } from 'react';
import Monitor from './Monitor';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [value, setValue] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const clickHandle = (e) => {
    setValue((value) => ({
      ...value,
      ...calculate(value, e.target.name),
    }));
  };
  return (
    <>
      <div className="calculator">
        <Monitor value={value} />
        <section className="calcbtnContainer">
          <button onClick={clickHandle} type="button" name="AC">AC</button>
          <button type="button" onClick={clickHandle} className="twosigne" name="+/-">-/+</button>
          <button type="button" onClick={clickHandle} className="pourcent" name="%">%</button>
          <button type="button" onClick={clickHandle} className="orange" name="÷">&#247;</button>
          <button type="button" onClick={clickHandle} name="7">7</button>
          <button type="button" onClick={clickHandle} name="8">8</button>
          <button type="button" onClick={clickHandle} name="9">9</button>
          <button type="button" className="orange" onClick={clickHandle} name="x">&#215;</button>
          <button type="button" onClick={clickHandle} name="4">4</button>
          <button type="button" onClick={clickHandle} name="5">5</button>
          <button type="button" onClick={clickHandle} name="6">6</button>
          <button type="button" className="orange" onClick={clickHandle} name="-">-</button>
          <button type="button" onClick={clickHandle} name="1">1</button>
          <button type="button" onClick={clickHandle} name="2">2</button>
          <button type="button" onClick={clickHandle} name="3">3</button>
          <button type="button" className="orange" onClick={clickHandle} name="+">+</button>
          <button type="button" className="zero" onClick={clickHandle} name="0">0</button>
          <button type="button" onClick={clickHandle} name=".">.</button>
          <button type="button" className="orange" onClick={clickHandle} name="=">=</button>
        </section>
      </div>
    </>
  );
};
export default Calculator;
