import PropTypes from "prop-types";
import SSubtitle from "./style";

export default function Subtitle({ title }) {
  return (
    <SSubtitle>
      <h1>{title}</h1>
    </SSubtitle>
  );
}

Subtitle.propTypes = {
  title: PropTypes.string.isRequired,
};
