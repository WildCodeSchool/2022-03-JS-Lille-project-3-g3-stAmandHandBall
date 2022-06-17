import PropTypes from "prop-types";
import STitleLink from "./style";

export default function TitleLink({ title, link }) {
  return (
    <STitleLink>
      <div className="title">
        <div className="arrow" />
        <h3>{title}</h3>
      </div>
      <div className="link">
        <div className="arrow2" />
        <a href={link} target="_blank" rel="noreferrer noopener">
          <p>{link}</p>
        </a>
      </div>
    </STitleLink>
  );
}

TitleLink.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
