import { Form } from "./form/form.jsx";
import { Footer } from "../../components/footer/footer.jsx";
export const Contacts = () => {
  return (
    <div className="contacts">
      <h3 className="special-title">Contacts</h3>
      <h2 className="special-subtitle services__subtitle">Write a message</h2>
      <p className="contacts__text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in mollis
        nibh. Fusce sit amet sem venenatis, pellentesque magna a, dapibus
        sapien. Curabitur bibendum elementum mollis. Nunc non blandit justo.
        Aenean accumsan vitae magna sed pulvinar. Aenean et metus ante. Aliquam
        accumsan hendrerit tincidunt.
      </p>
      <Form />
      <Footer />
    </div>
  );
};
