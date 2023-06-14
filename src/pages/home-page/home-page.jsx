import { Discover } from "./discover/discover.jsx";
import { Services } from "./services/services.jsx";
import { Products } from "./products/products.jsx";
import { Questions } from "./questions/questions.jsx";
import { Cosmetics } from "./cosmetics/cosmetics.jsx";
import { About } from "./about/about.jsx";
import { Footer } from "../../components/footer/footer.jsx";
export const HomePage = ({ aboutItems, questions }) => {
  return (
    <>
      <Discover />
      <Services />
      <Products />
      <Questions questions={questions} />
      <Cosmetics />
      <About aboutItems={aboutItems} />
      <Footer />
    </>
  );
};
