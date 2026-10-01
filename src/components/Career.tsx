import "./styles/Career.css";

const Career = () => {
  return (
    <section className="career-section" id="career">
      <h2>
        My <span>journey & experience</span>
      </h2>

      <div className="career-info">

        <div className="career-info-box">
          <div className="career-info-left">
            <h3>VIDEO EDITOR</h3>
            <p>2+ YEARS EXPERIENCE</p>
          </div>

          <h4>01</h4>

          <p className="career-description">
            Over 2 years of hands-on experience creating engaging videos,
            reels, documentaries, commercials and social media content.
          </p>
        </div>

        <div className="career-info-box">
          <div className="career-info-left">
            <h3>CREATIVE DESIGNER</h3>
            <p>DESIGN &amp; CONTENT</p>
          </div>

          <h4>02</h4>

          <p className="career-description">
            I combine video editing, graphic design, motion graphics and
            storytelling to create polished visual content for brands and
            creators.
          </p>
        </div>

        <div className="career-info-box">
          <div className="career-info-left">
            <h3>AI VIDEO CREATOR</h3>
            <p>AI-POWERED PRODUCTION</p>
          </div>

          <h4>03</h4>

          <p className="career-description">
            I use modern AI tools to create AI-generated visuals, UGC-style
            content, creative concepts and complete video productions.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Career;