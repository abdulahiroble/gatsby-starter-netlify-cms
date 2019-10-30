import React from "react";
import { Link } from "gatsby";
import CookieConsent from "react-cookie-consent";

import logo from "../img/logo5.png";
const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          <img
            src={logo}
            alt="bedstegamerlaptop.dk"
            style={{ width: "20em", height: "2em" }}
          />
        </div>
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Hjem
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/omos">
                        Om os
                      </Link>
                    </li>
                    {/* <li>
                      <a
                        className="navbar-item"
                        href="/admin/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Admin
                      </a>
                    </li> */}
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/blog">
                        Seneste artikler
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/kontakt">
                        Kontakt
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/privatpolitik">
                        Privat Politik
                      </Link>
                      <Link className="navbar-item" to="/disclaimer">
                        Disclaimer
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4 social"></div>
            </div>
          </div>
        </div>
        <CookieConsent
          location="bottom"
          buttonText="Accepter cookies"
          cookieName="myAwesomeCookieName2"
          style={{ background: "#2B373B" }}
          buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
          expires={150}
        >
          Vi bruger cookies til, at få vores hjemmeside til at virke ordentligt,
          personalisere indhold og reklamer, tilbyde funktioner i forhold til
          sociale medier og analysere vores traffik. Vi deler også information
          vedrørende din brug af vores hjemmeside med analytiske
          samarbejdspartnere.
          <Link
            to="/cookies"
            style={{ textDecoration: "none", color: "yellow" }}
          >
            {" "}
            Læs mere om cookies
          </Link>
        </CookieConsent>
        <div className="has-text-centered">
          Icons made by{" "}
          <a
            href="https://www.flaticon.com/authors/good-ware"
            title="Good Ware"
          >
            Good Ware
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </div>
      </footer>
    );
  }
};

export default Footer;
