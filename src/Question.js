import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({ title, info }) => {
  const [showQuestion, setShowQuestion] = useState(false);
  return (
    <article className='question'>
      <header>
        <h4>{title}</h4>
        <button
          className='btn'
          onMouseDown={() => setShowQuestion(!showQuestion)}
        >
          {showQuestion ? (
            <AiOutlineMinus></AiOutlineMinus>
          ) : (
            <AiOutlinePlus></AiOutlinePlus>
          )}
        </button>
      </header>
      {showQuestion && <p>{info}</p>}
    </article>
  );
};

export default Question;
