import PropTypes from "prop-types";
import STitle from "./style";

export default function Title({ title }) {
  return (
    <STitle>
      <div className="little-title">
        <h2>{title}</h2>
      </div>
    </STitle>
  );
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
};
