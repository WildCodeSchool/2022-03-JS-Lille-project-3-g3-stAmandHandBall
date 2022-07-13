import axios from "axios";
import { toast } from "react-toastify";
import React, { useState } from "react";
import Title from "@components/Archi/Title";
import "react-toastify/dist/ReactToastify.css";
import SForm from "./style";

export default function Form() {
  const [formData, setFormData] = useState({
    message: "",
    name: "",
    object: "",
    email: "",
  });

  const hSubmit = (evt) => {
    evt.preventDefault();
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/contact`, formData)
      .then(() => {
        toast("Message envoyé!");
      })
      .catch(() => {
        toast.error(
          "Un problème est survenue, merci de réessayer ultérieurement "
        );
      });
  };

  const hChange = (evt) => {
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <SForm>
      <Title title="CONTACT" />
      <p>
        Pour toutes demandes d'informations, contactez-nous via notre formulaire
        ci-dessous. Nous vous apporterons une réponse rapidement.
      </p>
      <form action="" onSubmit={hSubmit}>
        <input
          type="text"
          placeholder="Nom Prénom"
          name="name"
          value={formData.name}
          onChange={hChange}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={hChange}
        />
        <input
          type="text"
          placeholder="Sujet"
          name="object"
          value={formData.object}
          onChange={hChange}
        />
        <textarea
          id="text"
          placeholder="Laissez-nous votre message ici."
          name="message"
          value={formData.message}
          onChange={hChange}
        />
        <input type="submit" value="Envoyez" />
      </form>
    </SForm>
  );
}
