import PropTypes from "prop-types";

import SCardProduct from "@components/CardProduct/style";

export default function CardProduct({ img1, img2, img3, price }) {
  return (
    <SCardProduct>
      <div className="image">
        <img src={img1} alt="product" />
      </div>
      <div className="details">
        <img className="detail" src={img2} alt="product-detail1" />
        <img className="detail" src={img3} alt="product-detail2" />
        <div className="detail price">{price}€</div>
      </div>
    </SCardProduct>
  );
}

CardProduct.propTypes = {
  img1: PropTypes.string.isRequired,
  img2: PropTypes.string.isRequired,
  img3: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
