import "./FilterPanel.scss";

export default function FilterPanel() {
  return (
    <div className="filter">
      <ul className="filter__list">
        <li className="filter__list-item">About</li>
        <li className="filter__list-item">Projects</li>
        <li className="filter__list-item">Contact Me</li>
      </ul>
    </div>
  );
}
