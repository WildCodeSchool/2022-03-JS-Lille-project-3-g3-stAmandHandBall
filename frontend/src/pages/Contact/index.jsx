import ArrowVertical from "@components/Archi/ArrowVertical";
import Form from "@components/Form";
import Informations from "@components/Informations";
import SContact from "./style";

export default function Contact() {
  return (
    <SContact>
      <Form />
      <ArrowVertical mobileDisplay="none" />
      <Informations />
    </SContact>
  );
}
