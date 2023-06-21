import { useTranslation } from "react-i18next";
import { Accordion } from "../accordion/accordion.jsx";
export const Questions = () => {
  const { t } = useTranslation();
  const questions = [
    {
      id: 0,
      title: t("questionsitemtitle1"),
      text: t("questionsitemtext1"),
    },
    {
      id: 1,
      title: t("questionsitemtitle2"),
      text: t("questionsitemtext2"),
    },
  ];
  return (
    <div className="question section">
      <h3 className="special-title">{t("questionstitle")} </h3>
      <h2 className="special-subtitle question__subtitle">
        {t("questionssubtitle")}
      </h2>
      <div className="question__list">
        {questions.map(({ id, text, title }) => {
          return <Accordion key={id} text={text} title={title} />;
        })}
      </div>
    </div>
  );
};
