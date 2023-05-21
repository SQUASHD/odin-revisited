import "./landing.css";
export default function LandingPage() {
  return (
    <>
      <div className="top-background">
        <div className="top-body">
          <div className="header-container">
            <div className="header-logo">Header Logo</div>
            <ul>
              <li>
                <a
                  className="header"
                  href="app/(projects)/projects/landing-page/old#"
                >
                  header link one
                </a>
              </li>
              <li>
                <a
                  className="header"
                  href="app/(projects)/projects/landing-page/old#"
                >
                  header link two
                </a>
              </li>
              <li>
                <a
                  className="header"
                  href="app/(projects)/projects/landing-page/old#"
                >
                  header link three
                </a>
              </li>
            </ul>
          </div>
          <div className="top-content-container">
            <div className="left-top-content">
              <div className="hero-main-text">This website is awesome</div>
              <div className="hero-secondary-text">
                This website has some subtext that goes here under the main
                title. It&apos;s a smaller font and the color is lower contrast
              </div>
              <div className="sign-up-button">
                <a
                  className="sign-up-text"
                  href="app/(projects)/projects/landing-page/old#"
                >
                  Sign up
                </a>
              </div>
            </div>
            <div className="right-top-content">
              this is a placeholder for an image
            </div>
          </div>
        </div>
      </div>
      <div className="first-white-background">
        <div className="first-white-body">
          <div className="first-white-header">Some random information</div>
          <div className="first-white-box-container">
            <div className="white-info-box">
              <div className="round-box"></div>
              <div className="round-box-text">
                this is some subtext under an illustration or image
              </div>
            </div>
            <div className="white-info-box">
              <div className="round-box"></div>
              <div className="round-box-text">
                this is some subtext under an illustration or image
              </div>
            </div>
            <div className="white-info-box">
              <div className="round-box"></div>
              <div className="round-box-text">
                this is some subtext under an illustration or image
              </div>
            </div>
            <div className="white-info-box">
              <div className="round-box"></div>
              <div className="round-box-text">
                this is some subtext under an illustration or image
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="gray-background">
        <div className="quote-container">
          <div className="quote-text">
            This is an inspiring quote, or a testimonial from a customer. Maybe
            it&apos;s just filling up space, or maybe people will actually read
            it. Who knows? All I know is that it looks nice.
          </div>
          <div className="quotee">-Thor, God of Thunder</div>
        </div>
      </div>
      <div className="second-white-background">
        <div className="blue-call-to-action-container">
          <div className="blue-call-to-action-text">
            <div className="blue-call-to-action-text-header">
              Call to action! It&apos;s time!
            </div>
            <div className="blue-call-to-action-text-body">
              Sign up for our product by clicking that button right over there!
            </div>
          </div>
          <div className="sign-up-button white-border">
            <a
              className="sign-up-text"
              href="app/(projects)/projects/landing-page/old#"
            >
              Sign up
            </a>
          </div>
        </div>
      </div>
      <div className="footer-container">
        <div className="footer-text">Copyright © The Odin Project 2021</div>
      </div>
    </>
  );
}
