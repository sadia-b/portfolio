import Typewriter from "typewriter-effect";
import "./Hero.scss";

export default function Hero() {
  return (
    <div className="hero">
      <h1 className="hero__title">Software Engineer</h1>
      <Typewriter
        options={{
          strings: [
            "Hi there! I am a full stack developer.",
            "Take a look at my portfolio.",
          ],
          autoStart: true,
          loop: true,
        }}
      />
      <svg
        className="hero__img"
        fill="#000000"
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        width="200px"
        height="200px"
        viewBox="0 0 70 70"
      >
        <g>
          <path
            d="M62.817,2.583H6.026c-2.209,0-3.443,2.06-3.443,4.269v57c0,2.209,1.234,2.731,3.443,2.731h57
		c2.209,0,3.557-0.522,3.557-2.731v-58C66.583,3.643,65.026,2.583,62.817,2.583z M62.583,6.583v9h-56v-9H62.583z M6.583,62.583v-45
		h56v45H6.583z"
          />
          <path d="M10.417,12.583h2c0.553,0,1-0.447,1-1s-0.447-1-1-1h-2c-0.553,0-1,0.447-1,1S9.864,12.583,10.417,12.583z" />
          <path d="M16.417,12.583h2c0.553,0,1-0.447,1-1s-0.447-1-1-1h-2c-0.553,0-1,0.447-1,1S15.864,12.583,16.417,12.583z" />
          <path d="M22.417,12.583h2c0.553,0,1-0.447,1-1s-0.447-1-1-1h-2c-0.553,0-1,0.447-1,1S21.864,12.583,22.417,12.583z" />
          <path
            d="M26.109,33.077c-0.429-0.35-1.058-0.285-1.406,0.143l-5.944,7.283c-0.293,0.357-0.302,0.87-0.021,1.238l5.944,7.801
		c0.196,0.258,0.494,0.394,0.796,0.394c0.211,0,0.424-0.066,0.605-0.205c0.438-0.334,0.523-0.962,0.188-1.401l-5.466-7.173
		l5.445-6.673C26.602,34.056,26.538,33.426,26.109,33.077z"
          />
          <path
            d="M44.328,33.245c-0.333-0.438-0.96-0.525-1.401-0.188c-0.439,0.334-0.523,0.962-0.188,1.401l5.466,7.172l-5.445,6.674
		c-0.35,0.428-0.286,1.058,0.143,1.406c0.186,0.152,0.409,0.226,0.631,0.226c0.29,0,0.578-0.126,0.775-0.368l5.944-7.284
		c0.293-0.358,0.302-0.87,0.021-1.238L44.328,33.245z"
          />
          <path
            d="M31.241,31.734c-0.205-0.514-0.786-0.762-1.299-0.561c-0.514,0.204-0.764,0.786-0.561,1.299l7.916,19.918
		c0.156,0.393,0.532,0.631,0.93,0.631c0.123,0,0.248-0.022,0.369-0.07c0.514-0.204,0.764-0.786,0.561-1.299L31.241,31.734z"
          />
        </g>
      </svg>
    </div>
  );
}
