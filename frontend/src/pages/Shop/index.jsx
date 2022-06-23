import BigTitle from "@components/Archi/BigTitle";
import BigPicture from "@components/Archi/BigPicture";
import CardProduct from "@components/CardProduct";

import SShop from "./style";

export default function Shop() {
  const products = [
    {
      id: 1,
      name: "name-1",
      img1: "./src/assets/images/cards/products/echarpe.png",
      img2: "./src/assets/images/cards/products/echarpe.png",
      img3: "./src/assets/images/cards/products/echarpe.png",
      price: 10,
    },
    {
      id: 2,
      name: "name-2",
      img1: "./src/assets/images/cards/products/echarpe.png",
      img2: "./src/assets/images/cards/products/echarpe.png",
      img3: "./src/assets/images/cards/products/echarpe.png",
      price: 11,
    },
    {
      id: 3,
      name: "name-3",
      img1: "./src/assets/images/cards/products/echarpe.png",
      img2: "./src/assets/images/cards/products/echarpe.png",
      img3: "./src/assets/images/cards/products/echarpe.png",
      price: 12,
    },
    {
      id: 4,
      name: "name-4",
      img1: "./src/assets/images/cards/products/echarpe.png",
      img2: "./src/assets/images/cards/products/echarpe.png",
      img3: "./src/assets/images/cards/products/echarpe.png",
      price: 13,
    },
    {
      id: 5,
      name: "name-5",
      img1: "./src/assets/images/cards/products/echarpe.png",
      img2: "./src/assets/images/cards/products/echarpe.png",
      img3: "./src/assets/images/cards/products/echarpe.png",
      price: 14,
    },
    {
      id: 6,
      name: "name-6",
      img1: "./src/assets/images/cards/products/echarpe.png",
      img2: "./src/assets/images/cards/products/echarpe.png",
      img3: "./src/assets/images/cards/products/echarpe.png",
      price: 15,
    },
  ];
  return (
    <>
      <BigPicture
        img="background-boutique"
        date=""
        hour=""
        club1=""
        club2=""
        text=""
      />
      <BigTitle title="LA BOUTIQUE DE LA MEUTE" />
      <SShop>
        {products.map((product) => {
          return (
            <CardProduct
              key={product.id}
              name={product.name}
              img1={product.img1}
              img2={product.img2}
              img3={product.img3}
              price={product.price}
            />
          );
        })}
      </SShop>
    </>
  );
}
