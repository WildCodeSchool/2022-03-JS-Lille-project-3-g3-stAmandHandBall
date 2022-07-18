import PropTypes from "prop-types";
import Title from "@components/Archi/Title";

import SCardProduct2 from "@components/CardProduct2/style";

export default function CardProduct2({
  img1,
  img2,
  img3,
  img4,
  size1,
  size2,
  size3,
  size4,
  size5,
  title1,
}) {
  return (
    <SCardProduct2>
      <div className="image">
        <img src={img1} alt="product" />
        <Title title={title1} />
      </div>
      <div className="details">
        <img className="detail" src={img2} alt="product-detail1" />
        <img className="detail" src={img3} alt="product-detail2" />
        <img className="detail" src={img4} alt="product-detail3" />
      </div>
      <div className="sizes">
        <div className="size"> {size1}</div>
        <div className="size"> {size2}</div>
        <div className="size"> {size3}</div>
        <div className="size"> {size4}</div>
        <div className="size"> {size5}</div>
      </div>
    </SCardProduct2>
  );
}

CardProduct2.propTypes = {
  img1: PropTypes.string.isRequired,
  img2: PropTypes.string.isRequired,
  img3: PropTypes.string.isRequired,
  img4: PropTypes.string.isRequired,
  size1: PropTypes.string.isRequired,
  size2: PropTypes.string.isRequired,
  size3: PropTypes.string.isRequired,
  size4: PropTypes.string.isRequired,
  size5: PropTypes.string.isRequired,
  title1: PropTypes.string.isRequired,
};
