import address from "../../../../public/images/address.svg";
import phone from "../../../../public/images/phone.svg";
import email from "../../../../public/images/email.svg";

export const Form = () => {
  return (
    <form className="form section">
      <div className="form__inputs">
        <input
          className="form__input form__name"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="form__input form__email"
          type="text"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="form__area"
          name="message"
          placeholder="Message"
        ></textarea>
        <button className="form__btn">Send Message</button>
      </div>
      <div className="form__info">
        <div className="form__info-item">
          <img className="form__info-img" src={address} alt="address" />
          <div className="form__info-details">
            <h6 className="form__info-title">Address</h6>
            <a className="form__info-link" href="#">
              *the address should be here.
            </a>
          </div>
        </div>
        <div className="form__info-item">
          <img className="form__info-img" src={phone} alt="phone" />
          <div className="form__info-details">
            <h6 className="form__info-title">Phone</h6>
            <a className="form__info-link" href="tel:(99) 99-99-99">
              (99) 99-99-99
            </a>
          </div>
        </div>
        <div className="form__info-item">
          <img className="form__info-img" src={email} alt="email" />
          <div className="form__info-details">
            <h6 className="form__info-title">E-Mail</h6>
            <a className="form__info-link" href="mailto:guter.world@gmail.com">
              guter.world@gmail.com
            </a>
          </div>
        </div>
      </div>
    </form>
  );
};
