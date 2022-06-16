import CardNews from "@components/CardNews";
import SNewsList from "./style";

export default function NewsList() {
  const News = [
    {
      title: "News Mercato",
      text: "Lorem ipsum dolor sit amet. Qui minima eaque sed nobis ipsum in velit doloribus vel velit assumenda qui tenetur",
      img: "./src/assets/RectangleNews.png",
    },
    {
      title: "News Club",
      text: "Lorem ipsum dolor sit amet. Qui minima eaque sed nobis ipsum in velit doloribus vel velit assumenda qui tenetur",
      img: "./src/assets/RectangleNews.png",
    },
    {
      title: "News Ligue",
      text: "Lorem ipsum dolor sit amet. Qui minima eaque sed nobis ipsum in velit doloribus vel velit assumenda qui tenetur",
      img: "./src/assets/RectangleNews.png",
    },
    {
      title: "name-4",
      text: "Lorem ipsum dolor sit amet. Qui minima eaque sed nobis ipsum in velit doloribus vel velit assumenda qui tenetur",
      img: "./src/assets/RectangleNews.png",
    },
    {
      title: "name-5",
      text: "Lorem ipsum dolor sit amet. Qui minima eaque sed nobis ipsum in velit doloribus vel velit assumenda qui tenetur",
      img: "./src/assets/RectangleNews.png",
    },
    {
      title: "name-6",
      text: "Lorem ipsum dolor sit amet. Qui minima eaque sed nobis ipsum in velit doloribus vel velit assumenda qui tenetur",
      img: "./src/assets/RectangleNews.png",
    },
    {
      title: "name-7",
      text: "Lorem ipsum dolor sit amet. Qui minima eaque sed nobis ipsum in velit doloribus vel velit assumenda qui tenetur",
      img: "./src/assets/RectangleNews.png",
    },
    {
      title: "name-8",
      text: "Lorem ipsum dolor sit amet. Qui minima eaque sed nobis ipsum in velit doloribus vel velit assumenda qui tenetur",
      img: "./src/assets/RectangleNews.png",
    },
    {
      title: "name-9",
      text: "Lorem ipsum dolor sit amet. Qui minima eaque sed nobis ipsum in velit doloribus vel velit assumenda qui tenetur",
      img: "./src/assets/RectangleNews.png",
    },
    {
      title: "name-10",
      text: "Lorem ipsum dolor sit amet. Qui minima eaque sed nobis ipsum in velit doloribus vel velit assumenda qui tenetur",
      img: "./src/assets/RectangleNews.png",
    },
    {
      title: "name-11",
      text: "Lorem ipsum dolor sit amet. Qui minima eaque sed nobis ipsum in velit doloribus vel velit assumenda qui tenetur",
      img: "./src/assets/RectangleNews.png",
    },
    {
      title: "name-12",
      text: "Lorem ipsum dolor sit amet. Qui minima eaque sed nobis ipsum in velit doloribus vel velit assumenda qui tenetur",
      img: "./src/assets/RectangleNews.png",
    },
    {
      title: "name-13",
      text: "Lorem ipsum dolor sit amet. Qui minima eaque sed nobis ipsum in velit doloribus vel velit assumenda qui tenetur",
      img: "./src/assets/RectangleNews.png",
    },
  ];

  return (
    <SNewsList>
      {News.map((d) => {
        return (
          <CardNews key={d.title} title={d.title} img={d.img} text={d.text} />
        );
      })}
    </SNewsList>
  );
}
