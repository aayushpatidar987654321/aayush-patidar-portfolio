import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <div className="landing-section" id="landingDiv">
      <div className="landing-container">

        <div className="landing-intro">
          <h2>Hello! I'm</h2>

          <h1>
            AAYUSH
            <br />
            <span>PATIDAR</span>
          </h1>
        </div>

        <div className="landing-info">
          <h3>A Creative</h3>

          <h2 className="landing-info-h2">
            <div className="landing-h2-1">VIDEO EDITOR</div>
            <div className="landing-h2-2">CREATIVE DESIGNER</div>
          </h2>

          <h2 className="landing-h2-info">
            <div className="landing-h2-info-1">EDITOR</div>
            <div className="landing-h2-info-2">STORYTELLER</div>
          </h2>
        </div>

        {children}

      </div>
    </div>
  );
};

export default Landing;