import React, { useState } from "react";
import Title from "@components/Archi/Title";
import SForm from "./style";

export default function Form() {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [object, setObject] = useState("");
  const [email, setEmail] = useState("");

  return (
    <SForm>
      <Title title="CONTACT" />
      <p>
        Pour toutes demandes d’informations, contactez-nous via notre formulaire
        ci-dessous. Nous vous apporterons une réponse rapidement.
      </p>
      <form action="">
        <input
          type="text"
          placeholder="Nom Prénom"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="text"
          placeholder="Sujet"
          name="object"
          value={object}
          onChange={(event) => setObject(event.target.value)}
        />
        <textarea
          id="text"
          placeholder="Laissez-nous votre message ici."
          name="message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
        <input type="submit" value="ENVOYER LE MESSAGE" />
      </form>
    </SForm>
  );
}
