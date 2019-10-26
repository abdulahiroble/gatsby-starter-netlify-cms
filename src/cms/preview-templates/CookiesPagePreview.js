import React from "react";
import PropTypes from "prop-types";
import { CookiesPageTemplate } from "../../templates/cookies-page";

const CookiesPagePreview = ({ entry, widgetFor }) => (
  <CookiesPageTemplate
    title={entry.getIn(["data", "title"])}
    content={widgetFor("body")}
  />
);

CookiesPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default CookiesPagePreview;
