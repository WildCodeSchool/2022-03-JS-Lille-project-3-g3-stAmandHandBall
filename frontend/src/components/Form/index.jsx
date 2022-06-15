import Title from "@components/Archi/Title";
import SForm from "./style";

export default function Form() {
  return (
    <SForm>
      <Title title="CONTACT" />
      <p>
        Pour toutes demandes d’informations, contactez-nous via notre formulaire
        ci-dessous. Nous vous apporterons une réponse rapidement.
      </p>
      <form action="">
        <input type="text" name="name" value="NOM :" />
        <input type="text" name="email" value="EMAIL :" />
        <input type="text" name="object" value="SUJET :" />
        <textarea id="text" name="message" value="MESSAGE :" />
        <input type="submit" value="ENVOYER LE MESSAGE" />
      </form>
    </SForm>
  );
}
