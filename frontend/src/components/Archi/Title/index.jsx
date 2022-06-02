import PropTypes from "prop-types";
import STitle from "./style";

export default function Title({ title }) {
  return (
    <STitle>
      <h1>{title}</h1>
    </STitle>
  );
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
};
