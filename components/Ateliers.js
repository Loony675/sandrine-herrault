import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "../styles/Ateliers.module.css";
import { AiOutlineMessage } from "react-icons/ai";
import { ImCross } from "react-icons/im";

function Ateliers() {
  const [contactForm, setContactForm] = useState(false);
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

  return (
    <div className={styles.mainContainer}>
      <div className={styles.titleContainer}>
        Cours de dessin et de peinture
      </div>
      <div className={styles.presentationContainer}>
        <p>Apprenez avec moi</p>
        <p>
          En plus de travailler sur mes propres projets, j’aime partager mes
          connaissances à travers les différents cours et ateliers que je
          propose chaque semaine.
          <p>
            J’aime enseigner à mes élèves comment exprimer leur talent et
            sensibilité artistique.
          </p>
          <p>
            Que vous soyez un enfant ou un adulte, artiste débutant ou confirmé,
            venez participer à l'un de mes cours et découvrez mes secrets pour
            créer de merveilleuses œuvres d'art !
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
                initial={{ x: 100, y: 0, opacity: 0 }}
                whileInView={{ x: 0, y: 0, opacity: 1 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
              >
                <div className={styles.formSection1}>
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
                  <input
                    {...register("birth")}
                    placeholder="Birth"
                    className={styles.contactInput}
                    type="date"
                  />

                  <input
                    {...register("email")}
                    placeholder="Email"
                    className={styles.contactInput}
                    type="email"
                  />
                </div>
                <div>
                  Choix d'atelier
                  <select {...register('atelier')}>
                    <option value="Atelier enfant-ado">Atelier enfant-ado</option>
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
                <button className={styles.submitBtn} type="submit">
                  Envoyer
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      <div
        className={styles.inscriptionButtonContainer}
        onClick={() => clickForm()}
      >
        <div className={styles.inscriptionButton}>
          <AiOutlineMessage>M'inscrire AiOutlineMessage</AiOutlineMessage>
          <div>M'inscrire</div>
        </div>
      </div>
    </div>
  );
}

export default Ateliers;
