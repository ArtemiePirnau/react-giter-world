import { useSelector } from "react-redux";
import { Accordion } from "../accordion/accordion.jsx";
export const Questions = () => {
  const questions = useSelector((state) => state.questions.questions);
  return (
    <div className="question section">
      <h3 className="special-title">Frequently Asked </h3>
      <h2 className="special-subtitle question__subtitle">Questions</h2>
      <div className="question__list">
        {questions.map(({ id, text, title }) => {
          return <Accordion key={id} text={text} title={title} />;
        })}
      </div>
    </div>
  );
};
