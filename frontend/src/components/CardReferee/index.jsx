import PropTypes from "prop-types";
import SCardReferee from "@components/CardReferee/style";

export default function CardReferee({ name, img, role }) {
  return (
    <SCardReferee>
      <div className="name">
        <p>{name}</p>
      </div>
      <div className="image">
        <img src={img} alt="staff" />
      </div>
      <h4>{role}</h4>
      <div className="picto" />
    </SCardReferee>
  );
}

CardReferee.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string,
  img: PropTypes.string.isRequired,
};

CardReferee.defaultProps = {
  role: "",
};
