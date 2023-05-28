import { useState } from "react";

export const Accordion = ({ id, text, title }) => {
  const [isActive, setActive] = useState(false);

  return (
    <div className="question__item" key={id}>
      <div className="question__item-info" onClick={() => setActive(!isActive)}>
        <div
          className={
            isActive ? "question__item-title active" : "question__item-title"
          }
        >
          {title}
        </div>
        <p className="question__item-symbol">
          {isActive ? (
            <svg
              className={
                isActive ? "question_item-arrow active" : "question_item-arrow"
              }
              width="12"
              height="7"
              viewBox="0 0 12 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L6 6L11 1"
                stroke="#EA4949"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              className={
                isActive ? "question_item-arrow active" : "question_item-arrow"
              }
              width="12"
              height="7"
              viewBox="0 0 12 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L6 6L11 1"
                stroke="#EA4949"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </p>
      </div>
      {isActive && (
        <div
          className={
            isActive ? "question__item-text active" : "question__item-text"
          }
        >
          {text}
        </div>
      )}
    </div>
  );
};
