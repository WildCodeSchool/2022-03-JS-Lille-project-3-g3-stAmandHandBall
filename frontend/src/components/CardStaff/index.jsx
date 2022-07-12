import PropTypes from "prop-types";

import SCardStaff from "@components/CardStaff/style";

export default function CardStaff({ name, img, role }) {
  return (
    <SCardStaff>
      <div className="name">
        <p>{name}</p>
      </div>
      <div className="image">
        <img src={img} alt="staff" />
      </div>
      <h4>{role}</h4>

      <div className="picto" />
    </SCardStaff>
  );
}

CardStaff.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
};
