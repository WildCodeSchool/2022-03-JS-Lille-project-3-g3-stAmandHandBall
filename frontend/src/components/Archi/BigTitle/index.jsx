import PropTypes from "prop-types";
import SBigTitle from "./style";

export default function BigTitle({ title }) {
  return (
    <SBigTitle>
      <h1>{title}</h1>
    </SBigTitle>
  );
}

BigTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
