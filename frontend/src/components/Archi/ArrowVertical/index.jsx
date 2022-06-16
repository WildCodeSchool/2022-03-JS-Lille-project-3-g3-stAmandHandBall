import PropTypes from "prop-types";
import SArrowVertical from "./style";

export default function ArrowVertical({ mobileDisplay }) {
  return (
    <SArrowVertical display={mobileDisplay}>
      <div className="top" />
      <div className="line" />
      <div className="bottom" />
    </SArrowVertical>
  );
}

ArrowVertical.propTypes = {
  mobileDisplay: PropTypes.string.isRequired,
};
