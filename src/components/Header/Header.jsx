import "./Header.scss";

export default function Header({ isFilterVisible, setIsFilterVisible }) {
  const handleClick = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  return (
    <div className="header">
      <div className="header__left">
        <h3 className="header__title">Sadia Bahadoor</h3>
      </div>
      <div className="header__right">
        <button className="header__button" onClick={handleClick}>
          <svg
            width="20px"
            height="20px"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3H16V1H0V3Z" fill="#000000" />
            <path d="M2 7H14V5H2V7Z" fill="#000000" />
            <path d="M4 11H12V9H4V11Z" fill="#000000" />
            <path d="M10 15H6V13H10V15Z" fill="#000000" />
          </svg>
        </button>
        <ul className="header__list">
          <li className="header__list-item">Home</li>
          <li className="header__list-item">About</li>
          <li className="header__list-item">Projects</li>
          <li className="header__list-item">Contact</li>
        </ul>
      </div>
    </div>
  );
}
