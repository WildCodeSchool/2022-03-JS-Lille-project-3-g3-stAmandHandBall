import BigTitle from "@components/Archi/BigTitle";
import BigPicture from "@components/Archi/BigPicture";
import ArrowVertical from "@components/Archi/ArrowVertical";
import Form from "@components/Form";
import Informations from "@components/Informations";
import SContact from "./style";

export default function Contact() {
  return (
    <>
      <BigPicture img="test" date="" hour="" club1="" club2="" text="" />
      <BigTitle title="CONTACTER LA MEUTE" />
      <SContact>
        <Form />
        <ArrowVertical mobileDisplay="none" />
        <Informations />
      </SContact>
    </>
  );
}
