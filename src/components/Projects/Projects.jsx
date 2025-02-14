import "./Projects.scss";

export default function Projects() {
  return (
    <div className="projects">
      <div className="project">
        <h3 className="project__title">Fresh Rituals</h3>
        <div className="project__left">
          <img src="" alt="picture of the project" />
        </div>
        <div className="project__right">
          <p className="project__description">
            A web application that gives personalized skincare routines based
            off skin conerns.
          </p>
          <div className="project__toolkit"></div>
          <div className="project__button-section">
            <button className="project__button">
              <a
                className="project__github"
                href="https://github.com/sadia-b/capstone-frontend"
                target="_blank"
              >
                Frontend
              </a>
            </button>
            <button className="project__button">
              <img
                className="project__github-photo"
                src="src\assets\github.svg"
                alt="github photo"
              />
              <a
                className="project__github"
                href="https://github.com/sadia-b/capstone-backend"
                target="_blank"
              >
                Backend
              </a>
            </button>
            <button className="project__button">Demo</button>
          </div>
        </div>
      </div>
      <div className="project">
        <h3 className="project__title">GapDap</h3>
        <div className="project__left">
          <img src="" alt="picture of the project" />
        </div>
        <div className="project__right">
          <p className="project__description">
            A web application that retrieve real-time Bitcoin data using the
            CoinGecko API. This project was developed during a BrainStation
            hackathon as part of a pair programming 24-hour challenge, where I
            collaborated with a partner to build it.
          </p>
          <div className="project__toolkit"></div>
          <div className="project__button-section">
            <button className="project__button">
              <img
                className="project__github-photo"
                src="src\assets\github.svg"
                alt="github photo"
              />
              <a
                className="project__github"
                href="https://github.com/Gharsa-Amin/API-Hackaton-Latest-Version/tree/develop"
                target="_blank"
              >
                GitHub
              </a>
            </button>
            <button className="project__button">Demo</button>
          </div>
        </div>
      </div>
      <div className="project">
        <h3 className="project__title">ScotiaCrew Chatbot Industry Project</h3>
        <div className="project__left">
          <img src="" alt="picture of the project" />
        </div>
        <div className="project__right">
          <p className="project__description">
            A web application that serves as a chatbot that connects Scotiabank
            advisors with customers in real-time. This was built as part of a
            Scotiabank x Brainstation hackathon with a group of 5 members. I was
            part of the front-end of this application.
          </p>
          <div className="project__toolkit"></div>
          <div className="project__button-section">
            <button className="project__button">
              <img
                className="project__github-photo"
                src="src\assets\github.svg"
                alt="github photo"
              />
              <a
                className="project__github"
                href="https://github.com/brainstation-scotia-crew/scoitacrew-chat-frontend"
                target="_blank"
              >
                GitHub
              </a>
            </button>
            <button className="project__button">Demo</button>
          </div>
        </div>
      </div>
    </div>
  );
}
