import React, { useState } from 'react';
import data from './data';
import Question from './Question';

import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
function App() {
  const [questions, setQuestions] = useState(data);
  return (
    <main>
      <div className='container'>
        <h3>Questions and answers about login</h3>
        <section className='info'>
          {questions.map(question => {
            const { id } = question;
            return <Question key={id} {...question}></Question>;
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
