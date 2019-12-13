import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import CookieConsent from "react-cookie-consent";

const Footer = props => {
  const { html, theme } = props;

  return (
    <React.Fragment>
      <footer className="footer" dangerouslySetInnerHTML={{ __html: html }} />
      <CookieConsent
        location="bottom"
        buttonText="Accepter cookies"
        cookieName="myAwesomeCookieName2"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
      >
        Vi bruger cookies til, at få vores hjemmeside til at virke ordentligt, personalisere indhold
        og reklamer, tilbyde funktioner i forhold til sociale medier og analysere vores traffik. Vi
        deler også information vedrørende din brug af vores hjemmeside med analytiske
        samarbejdspartnere.
        <Link to="/cookies" style={{ textDecoration: "none", color: "yellow" }}>
          {" "}
          Læs mere om cookies
        </Link>
      </CookieConsent>

      {/* --- STYLES --- */}
      <style jsx>{`
        .footer {
          background: ${theme.color.neutral.white};
          padding: ${theme.space.inset.default};
          padding-top: 0;
          padding-bottom: 120px;

          :global(ul) {
            list-style: none;
            text-align: center;
            padding: 0;

            :global(li) {
              color: ${theme.color.neutral.gray.g};
              font-size: ${theme.font.size.xxs};
              padding: ${theme.space.xxs} ${theme.space.s};
              position: relative;
              display: inline-block;

              &::after {
                content: "•";
                position: absolute;
                right: ${`calc(${theme.space.xs} * -1)`};
              }
              &:last-child::after {
                content: "";
              }
            }
          }
        }

        @from-width desktop {
          .footer {
            padding: 0 1em 1.5em;
          }
        }
      `}</style>
    </React.Fragment>
  );
};

Footer.propTypes = {
  html: PropTypes.string,
  theme: PropTypes.object.isRequired
};

export default Footer;
