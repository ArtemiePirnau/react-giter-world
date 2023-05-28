import { AboutItem } from "../about-item/about-item.jsx";

export const About = ({ aboutItems }) => {
  return (
    <div className="about section">
      <h3 className="special-title">More Info</h3>
      <h2 className="special-subtitle about__subtitle">About Products</h2>
      <p className="about__text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis
        vulputate tortor. Donec lectus tortor, consectetur quis mattis eu,
        lacinia quis nibh. Nunc laoreet ex vel augue hendrerit cursus eleifend
        non ipsum. Praesent nec lacinia arcu.
      </p>
      <ul className="about__list">
        {aboutItems.map(({ id, title, width }) => {
          return <AboutItem key={id} title={title} width={width} />;
        })}
      </ul>
    </div>
  );
};
