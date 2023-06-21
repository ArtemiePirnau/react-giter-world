import { Form } from "./form/form.jsx";
import { useTranslation } from "react-i18next";
import { Footer } from "../../components/footer/footer.jsx";
export const Contacts = () => {
  const { t } = useTranslation();
  return (
    <div className="contacts">
      <h3 className="special-title">{t("contactstitle")}</h3>
      <h2 className="special-subtitle services__subtitle">
        {t("contactssubtitle")}
      </h2>
      <p className="contacts__text">{t("contactstext")}</p>
      <Form />
      <Footer />
    </div>
  );
};
