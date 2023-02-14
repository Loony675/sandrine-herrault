import React, { useEffect, useState } from "react";
import styles from "../styles/Stages.module.css";
import { urlFor } from "@/sanity";
import { useForm } from "react-hook-form";
import { AiOutlineMessage } from "react-icons/ai";
import { ImCross } from "react-icons/im";


function Stages() {
  const [stagesRetrieved, setStagesRetrieved] = useState([]);
  const [contactForm, setContactForm] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) =>
  (window.location.href = `mailto:theo.loussot@gmail.com?subject=${data.subject}&body=Bonjour,  ${data.name}. ${data.message} (${data.email}) ${data.atelier})`);



  const clickForm = () => {
    !contactForm ? setContactForm(true) : setContactForm(false);
  };

  let QUERY = '*[_type == "stages"]';
  let DATASET = process.env.NEXT_PUBLIC_SANITY_DATASET;
  let PROJECT_ID = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  let URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then(({ result }) => {
        const mapStages = result.map((data, i) => {
          console.log(data);
          return {
            key: i,
            titre: data.titre,
            description: data.description,
            photo: data.photo,
            lieu: data.lieu,
            type: data.type,
          };
        });
        setStagesRetrieved(mapStages);
      });
  }, []);

  const stages = stagesRetrieved.map((data, i) => {
    return (
      <div key={i} className={styles.stageContainer}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            fontWeight: 400,
          }}
        >
          Thème:<div style={{ fontWeight: 200 }}>{data.description}</div>
        </div>
        <img src={urlFor(data.photo).url()} />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            fontWeight: 400,
          }}
        >
          Lieu:<div style={{ fontWeight: 200 }}>{data.lieu}</div>
        </div>
      </div>
    );
  });
  return (
    <div className={styles.mainContainer}>
      <div className={styles.actualStages}>
        <div className={styles.titleEventsPeriod}>
          Stage vacances de Février 2023
        </div>
        <div className={styles.descriptionService}>
          Ce que je propose à vos enfants: se créer une vie tellement plus riche
          grâce à l'art !
        </div>
        <div className={styles.stagesContainer}>{stages}</div>
      </div>
    <button className={styles.inscriptionButton} onClick={() => clickForm()}>M'inscrire à un stage</button>
    {contactForm && (
        <div className={styles.contactFormOpen}>
          <ImCross className={styles.closeForm} onClick={() => clickForm()} />
          <div className={styles.formulaireContact}>
            <div>Formulaire d&apos;inscription aux cours</div>
            <div
              style={{
                fontStyle: "italic",
                fontWeight: "100",
                fontSize: "12px",
              }}
            >
              je vous prierai de bien vouloir remplir ce formulaire. Je
              reviendrai ensuite vers vous.
            </div>
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
                    required
                  />
                  <input
                    {...register("firstname")}
                    placeholder="Prénom"
                    className={styles.contactInput}
                    type="text"
                    required
                  />
                </div>
                <div>
                  <input
                    {...register("birth")}
                    placeholder="Date de naissance"
                    className={styles.contactInput}
                    type="date"
                    required
                  />
                </div>
                <div>
                  <input
                    {...register("address")}
                    placeholder="Adresse"
                    className={styles.contactInput}
                    type="text"
                    required
                  />
                  <input
                    {...register("postalCode")}
                    placeholder="Code postal"
                    className={styles.contactInput}
                    type="text"
                    required
                  />
                  <input
                    {...register("city")}
                    placeholder="Ville"
                    className={styles.contactInput}
                    type="text"
                    required
                  />
                </div>
                <div>
                  <input
                    {...register("phone")}
                    placeholder="N° de téléphone"
                    className={styles.contactInput}
                    type="tel"
                    pattern="[0]{1}[1-9]{1}[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{2}"
                    required
                  />

                  <input
                    {...register("email")}
                    placeholder="Email"
                    className={styles.contactInput}
                    type="email"
                    required
                  />
                </div>

                <textarea
                  {...register("message")}
                  placeholder="Message"
                  className={styles.contactInput}
                  style={{ height: "70px", width: "300px" }}
                />
                <div>
                  <button
                    className={styles.submitBtn}
                    type="submit"
                  >
                    Envoyer
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      <div
        className={styles.inscriptionButtonContainer}
        onClick={() => clickForm()}
      >
      </div>
      <div className={styles.pastStages}>stages passés</div>
    </div>
  );
}

export default Stages;
