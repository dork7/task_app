import React from "react";
import PropTypes from "prop-types"; // to add validation

const Header = (props) => {
  return <div>{props.title}</div>;
};
Header.defaultProps = {
  title: "Hello",
};
Header.propTypes = {
  title: PropTypes.string.isRequired, // to add validation
};

export default Header;
