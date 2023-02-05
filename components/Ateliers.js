import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styles from "../styles/Ateliers.module.css";
import { AiOutlineMessage } from "react-icons/ai";
import { ImCross } from "react-icons/im";

function Ateliers() {
  const [contactForm, setContactForm] = useState(false);
  const [atelierChoice, setAtelierChoice] = useState("test");
  const clickForm = () => {
    !contactForm ? setContactForm(true) : setContactForm(false);
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) =>
    (window.location.href = `mailto:theo.loussot@gmail.com?subject=${data.subject}&body=Bonjour,  ${data.name}. ${data.message} (${data.email}) ${data.atelier})`);

  useEffect(() => {}, [atelierChoice]);
  console.log(atelierChoice);
  return (
    <div className={styles.mainContainer}>
      <div className={styles.titleContainer}>
        Cours de dessin et de peinture
      </div>
      <div className={styles.presentationContainer}>
        <p>Apprenez avec moi</p>
        <p>
          En plus de travailler sur mes propres projets, j&apos;aime partager
          mes connaissances à travers les différents cours et ateliers que je
          propose chaque semaine.
          <p>
            J&apos;aime enseigner à mes élèves comment exprimer leur talent et
            sensibilité artistique.
          </p>
          <p>
            Que vous soyez un enfant ou un adulte, artiste débutant ou confirmé,
            venez participer à l&apos;un de mes cours et découvrez mes secrets
            pour créer de merveilleuses œuvres d&apos;art !
          </p>
        </p>
      </div>
      {contactForm && (
        <div className={styles.contactFormOpen}>
          <ImCross onClick={() => clickForm()} />
          <div className={styles.formulaireContact}>
            <div>Formulaire inscription cours</div>
            <div>Description</div>
            <div>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className={styles.formSectionG}
              >
                <div className={styles.identitySection}>
                  <input
                    {...register("name")}
                    placeholder="Nom"
                    className={styles.contactInput}
                    type="text"
                  />
                  <input
                    {...register("firstname")}
                    placeholder="Prénom"
                    className={styles.contactInput}
                    type="text"
                  />
                </div>
                <div>
                  <input
                    {...register("birth")}
                    placeholder="Birth"
                    className={styles.contactInput}
                    type="date"
                  />
                </div>
                <div>
                  <input
                    {...register("address")}
                    placeholder="Adresse"
                    className={styles.contactInput}
                    type="text"
                  />
                  <input
                    {...register("postalCode")}
                    placeholder="Code postal"
                    className={styles.contactInput}
                    type="text"
                  />
                  <input
                    {...register("city")}
                    placeholder="Ville"
                    className={styles.contactInput}
                    type="text"
                  />
                </div>
                <div>
                  <input
                    {...register("phone")}
                    placeholder="N° de téléphone"
                    className={styles.contactInput}
                    type="tel"
                    pattern="[0]{1}[1-9]{1}[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{2}"
                  />

                  <input
                    {...register("email")}
                    placeholder="Email"
                    className={styles.contactInput}
                    type="email"
                  />
                </div>

                <div>
                  Choix d&apos;atelier
                  <select
                    {...register("atelier")}
                    onChange={(e) => setAtelierChoice(e.target.value)}
                  >
                    <option value="Atelier enfant-ado">
                      Atelier enfant-ado
                    </option>
                    <option value="Atelier dessin et peinture adulte">
                      Atelier dessin et peinture adulte
                    </option>
                    <option selected value="no-selection">
                      ...
                    </option>
                  </select>
                </div>
                <textarea
                  {...register("message")}
                  placeholder="Message"
                  className={styles.contactInput}
                  style={{ height: "100px" }}
                />
                <div>
                  <button className={styles.submitBtn} type="submit">
                    Envoyer
                  </button>
                </div>
              </form>
            </div>
          </div>
          {atelierChoice == "Atelier enfant-ado" && (
            <div style={{ color: "white" }}>Enfant-Ado</div>
          )}
          {atelierChoice == "Atelier dessin et peinture adulte" && (
            <div style={{ color: "white" }}>Adulte</div>
          )}
        </div>
      )}

      <div
        className={styles.inscriptionButtonContainer}
        onClick={() => clickForm()}
      >
        <div className={styles.inscriptionButton}>
          <AiOutlineMessage>M&apos;inscrire AiOutlineMessage</AiOutlineMessage>
          <div className={styles.inscriptionText}>M&apos;inscrire</div>
        </div>
      </div>
    </div>
  );
}

export default Ateliers;
