import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ title, info }) => {
  const [seeAnswers, setSeeAnswers] = useState(true);
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => setSeeAnswers(!seeAnswers)}>
          {seeAnswers ? <AiOutlinePlus /> : <AiOutlineMinus />}
        </button>
      </header>
      <p>{seeAnswers ? "" : `${info}`}</p>
    </article>
  );
};

export default Question;
