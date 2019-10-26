import React from "react";
import PropTypes from "prop-types";
import { PrivatePageTemplate } from "../../templates/privat-page";

const PrivatePagePreview = ({ entry, widgetFor }) => (
  <PrivatePageTemplate
    title={entry.getIn(["data", "title"])}
    content={widgetFor("body")}
  />
);

PrivatePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default PrivatePagePreview;
