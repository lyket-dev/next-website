export default function LandingHeader({ title, h1 }) {
  return (
    <div className="header__wrapper">
      <div className="page__section--gradient" />
      <div className="docs__title__container">
        <h1 className="page__kicker">{h1}</h1>
        <h2 className="docs__title">{title}</h2>
      </div>
    </div>
  );
}
