import React from 'react';
import Monitor from './Monitor';

const Calculator = () => {
  const value = 0;
  return (
    <>
      <div className="calculator">
        <Monitor value={value} />
        <section className="calcbtnContainer">
          <button type="button">AC</button>
          <button type="button" className="twosigne">-/+</button>
          <button type="button" className="pourcent">%</button>
          <button type="button" className="orange">&#247;</button>
          <button type="button">7</button>
          <button type="button">8</button>
          <button type="button">9</button>
          <button type="button" className="orange">&#215;</button>
          <button type="button">4</button>
          <button type="button">5</button>
          <button type="button">6</button>
          <button type="button" className="orange">-</button>
          <button type="button">1</button>
          <button type="button">2</button>
          <button type="button">3</button>
          <button type="button" className="orange">+</button>
          <button type="button" className="zero">0</button>
          <button type="button">.</button>
          <button type="button" className="orange">=</button>
        </section>
      </div>
    </>
  );
};
export default Calculator;
