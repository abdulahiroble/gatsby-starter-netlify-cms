import React from "react";
import PropTypes from "prop-types";
import { DisclaimerPageTemplate } from "../../templates/cookies-page";

const DisclaimerPagePreview = ({ entry, widgetFor }) => (
  <DisclaimerPageTemplate
    title={entry.getIn(["data", "title"])}
    content={widgetFor("body")}
  />
);

DisclaimerPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default DisclaimerPagePreview;
