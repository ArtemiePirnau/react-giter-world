import { useTranslation } from "react-i18next";

import address from "../../../../public/images/address.svg";
import phone from "../../../../public/images/phone.svg";
import email from "../../../../public/images/email.svg";
export const Form = () => {
  const { t } = useTranslation();
  return (
    <form className="form section">
      <div className="form__inputs">
        <input
          className="form__input form__name"
          type="text"
          placeholder={`${t("contactsname")}`}
          name="name"
        />
        <input
          className="form__input form__email"
          type="text"
          placeholder={`${t("contactsemail")}`}
          name="email"
        />
        <textarea
          className="form__area"
          name="message"
          placeholder={`${t("contactsmessage")}`}
        ></textarea>
        <button className="form__btn">{t("contactsbtn")}</button>
      </div>
      <div className="form__info">
        <div className="form__info-item">
          <img className="form__info-img" src={address} alt="address" />
          <div className="form__info-details">
            <h6 className="form__info-title">{t("contactsaddress")}</h6>
            <a className="form__info-link" href="#">
              {t("contactsaddresslabel")}
            </a>
          </div>
        </div>
        <div className="form__info-item">
          <img className="form__info-img" src={phone} alt="phone" />
          <div className="form__info-details">
            <h6 className="form__info-title">{t("contactsphone")}</h6>
            <a className="form__info-link" href="tel:(99) 99-99-99">
              (99) 99-99-99
            </a>
          </div>
        </div>
        <div className="form__info-item">
          <img className="form__info-img" src={email} alt="email" />
          <div className="form__info-details">
            <h6 className="form__info-title">{t("contactsaddress")}</h6>
            <a className="form__info-link" href="mailto:guter.world@gmail.com">
              giter.world@gmail.com
            </a>
          </div>
        </div>
      </div>
    </form>
  );
};
