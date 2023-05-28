export const AboutItem = ({ id, width, title }) => {
  return (
    <li className="about__item" key={id}>
      <div className="about__item-content">
        <p className="about__item-title">{title}</p>
      </div>
      <div className="about__item-line" style={{ width: `${width}px` }}></div>
    </li>
  );
};
