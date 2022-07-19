import BigTitle from "@components/Archi/BigTitle";
import BigPicture from "@components/Archi/BigPicture";
import Title from "@components/Archi/Title";
import Subtitle from "@components/Archi/Subtile";
import Arrow from "@components/Archi/Arrow";
import CardProduct from "@components/CardProduct";
import CardProduct2 from "@components/CardProduct2";
import SShop from "./style";

export default function Shop() {
  const products = [
    {
      id: 1,
      name: "name-1",
      img1: "./src/assets/images/cards/products/bracelet.png",
      img2: "./src/assets/images/cards/products/bracelet.png",
      img3: "./src/assets/images/cards/products/bracelet.png",
      price: 10,
    },
    {
      id: 2,
      name: "name-2",
      img1: "./src/assets/images/cards/products/scarf.png",
      img2: "./src/assets/images/cards/products/scarf.png",
      img3: "./src/assets/images/cards/products/scarf.png",
      price: 11,
    },
    {
      id: 3,
      name: "name-3",
      img1: "./src/assets/images/cards/products/bag.png",
      img2: "./src/assets/images/cards/products/bag.png",
      img3: "./src/assets/images/cards/products/bag.png",
      price: 12,
    },
    {
      id: 4,
      name: "name-4",
      img1: "./src/assets/images/cards/products/bag.png",
      img2: "./src/assets/images/cards/products/bag.png",
      img3: "./src/assets/images/cards/products/bag.png",
      price: 13,
    },
    {
      id: 5,
      name: "name-5",
      img1: "./src/assets/images/cards/products/bracelet.png",
      img2: "./src/assets/images/cards/products/bracelet.png",
      img3: "./src/assets/images/cards/products/bracelet.png",
      price: 14,
    },
    {
      id: 6,
      name: "name-6",
      img1: "./src/assets/images/cards/products/scarf.png",
      img2: "./src/assets/images/cards/products/scarf.png",
      img3: "./src/assets/images/cards/products/scarf.png",
      price: 15,
    },
  ];
  const jerseys = [
    {
      id: 1,
      name: "name-1",
      title1: "Avec flocage",
      img1: "./src/assets/images/cards/products/jersey.png",
      img2: "./src/assets/images/cards/products/jersey.png",
      img3: "./src/assets/images/cards/products/jersey.png",
      img4: "./src/assets/images/cards/products/jersey.png",
      size1: "XS",
      size2: "S",
      size3: "M",
      size4: "L",
      size5: "XL",
    },
    {
      id: 2,
      name: "name-2",
      title1: "Sans flocage",
      img1: "./src/assets/images/cards/products/jersey.png",
      img2: "./src/assets/images/cards/products/jersey.png",
      img3: "./src/assets/images/cards/products/jersey.png",
      img4: "./src/assets/images/cards/products/jersey.png",
      size1: "8A",
      size2: "10A",
      size3: "12A",
      size4: "14A",
      size5: "16A",
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
        <Title title="MAILLOT OFFICIEL" />
        <article className="card1">
          {jerseys.map((jersey) => {
            return (
              <CardProduct2
                key={jersey.id}
                name={jersey.name}
                img1={jersey.img1}
                title1={jersey.title1}
                img2={jersey.img2}
                img3={jersey.img3}
                img4={jersey.img4}
                size1={jersey.size1}
                size2={jersey.size2}
                size3={jersey.size3}
                size4={jersey.size4}
                size5={jersey.size5}
              />
            );
          })}
        </article>
        <Arrow />
        <Title title="KIT SUPPORTER" />
        <article className="cards2and3">
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
        </article>
        <article className="packPrice">
          <Subtitle title="LE PACK ENTIER:" />
          <Subtitle title="..€ au lieu de ..€" />
        </article>
        <Arrow />
        <Title title="EQUIPEMENTS SPORTIFS" />
        <article className="cards2and3">
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
        </article>
        <Title title="COMMANDEZ ICI :" />
      </SShop>
    </>
  );
}
