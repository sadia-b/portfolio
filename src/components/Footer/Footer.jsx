import "./Footer.scss";

export default function Footer() {
  return (
    <div className="footer">
      <h3 className="footer__title">Let's Connect!</h3>
      <div className="footer__flex">
        <p className="footer__p">
          Always happy to talk tech, skincare, or your favorite coffee spot!
          Reach out at any of the following links.
        </p>
        <ul className="footer__list">
          <li className="footer__list-item">
            <a
              className="footer__link"
              href="https://www.linkedin.com/in/sadia-bahadoor/"
            >
              LinkedIn
            </a>
          </li>
          <li className="footer__list-item">
            <a className="footer__link" href="https://github.com/sadia-b">
              GitHub
            </a>
          </li>
          <li className="footer__list-item">Resume</li>
        </ul>
        <button className="footer__button">
          <a className="footer__link" href="mailto:sadia.bahadoor@gmail.com">
            Send email
          </a>
        </button>
      </div>
    </div>
  );
}
