import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styles from "../styles/Ateliers.module.css";
import { AiOutlineMessage } from "react-icons/ai";
import { ImCross } from "react-icons/im";
import { urlFor } from "@/sanity";
import { MotionConfig, motion } from "framer-motion";

function Ateliers() {
  const [contactForm, setContactForm] = useState(false);
  const [atelierChoice, setAtelierChoice] = useState("no-selection");
  const clickForm = () => {
    !contactForm ? setContactForm(true) : setContactForm(false);
  };
  const [validChoice, setValidChoice] = useState(true);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) =>
    (window.location.href = `mailto:theo.loussot@gmail.com?subject=${data.subject}&body=Bonjour,  ${data.name}. ${data.message} (${data.email}) ${data.atelier})`);

  useEffect(() => {
    if (atelierChoice !== "no-selection") {
      setValidChoice(false);
    } else {
      setValidChoice(true);
    }
  }, [atelierChoice, validChoice]);

  const [ateliersRetrieved, setAteliersRetrieved] = useState([]);
  let QUERY = '*[_type == "ateliers"]';
  let DATASET = process.env.NEXT_PUBLIC_SANITY_DATASET;
  let PROJECT_ID = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  let URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;
  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then(({ result }) => {
        const mapAteliers = result.map((data, i) => {
          return {
            key: i,
            titre: data.titre,
            description: data.description,
            photo: data.photo,
            type: data.type,
          };
        });
        setAteliersRetrieved(mapAteliers);
      });
  }, []);
  const enfant46 = ateliersRetrieved.filter((data, i) => data.type == "4-6ans");
  const enfant46map = enfant46.map((data, i) => {
    return (
      <img
        key={i}
        className={styles.atelierImg}
        src={urlFor(data.photo).url()}
      />
    );
  });
  const enfant7 = ateliersRetrieved.filter((data, i) => data.type == "7ans");
  const enfant7map = enfant7.map((data, i) => {
    return (
      <img
        key={i}
        className={styles.atelierImg}
        src={urlFor(data.photo).url()}
      />
    );
  });
  const enfant11 = ateliersRetrieved.filter((data, i) => data.type == "11ans");
  const enfant11map = enfant11.map((data, i) => {
    return (
      <img
        key={i}
        className={styles.atelierImg}
        src={urlFor(data.photo).url()}
      />
    );
  });
  const enfantAdo = ateliersRetrieved.filter((data, i) => data.type == "ado");
  const enfantAdoMap = enfantAdo.map((data, i) => {
    return (
      <img
        key={i}
        className={styles.atelierImg}
        src={urlFor(data.photo).url()}
      />
    );
  });
  const adulte = ateliersRetrieved.filter(
    (data, i) => data.type == "ado+adulte"
  );
  const adulteMap = adulte.map((data, i) => {
    return (
      <img
        key={i}
        className={styles.atelierImg}
        src={urlFor(data.photo).url()}
      />
    );
  });
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
      <div className={styles.talentContainer}>
        <div className={styles.titleContainer}>Mes élèves ont du talent !</div>
        <div>
          <motion.div
            onSubmit={handleSubmit(onSubmit)}
            initial={{ x: 0, y: 0, opacity: 0 }}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            transition={{ duration: 3.7 }}
            viewport={{ once: true }}
            className={styles.atelierContainer}
          >
            {" "}
            <div className={styles.titleAtelier}>
              Ateliers créatifs pour les 4-6 ans
              <br />
              <button onClick={() => clickForm()}>M'inscrire</button>
            </div>
            {enfant46map}
          </motion.div>
          <motion.div
            onSubmit={handleSubmit(onSubmit)}
            initial={{ x: 0, y: 0, opacity: 0 }}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            transition={{ duration: 3.7 }}
            viewport={{ once: true }}
            className={styles.atelierContainer}
          >
            <div className={styles.titleAtelier}>
              Ateliers dessin à partir de 7 ans
              <br />
              <button onClick={() => clickForm()}>M'inscrire</button>
            </div>
            {enfant7map}
          </motion.div>
          <motion.div
            onSubmit={handleSubmit(onSubmit)}
            initial={{ x: 0, y: 0, opacity: 0 }}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            transition={{ duration: 3.7 }}
            viewport={{ once: true }}
            className={styles.atelierContainer}
          >
            <div className={styles.titleAtelier}>
              Ateliers ado à partir de 11 ans
              <br />
              <button onClick={() => clickForm()}>M'inscrire</button>
            </div>
            {enfant11map}
          </motion.div>
          <motion.div
            onSubmit={handleSubmit(onSubmit)}
            initial={{ x: 0, y: 0, opacity: 0 }}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            transition={{ duration: 3.7 }}
            viewport={{ once: true }}
            className={styles.atelierContainer}
          >
            <div className={styles.titleAtelier}>
              {" "}
              Ateliers ado
              <br />
              <button onClick={() => clickForm()}>M'inscrire</button>
            </div>

            {enfantAdoMap}
          </motion.div>
          <motion.div
            onSubmit={handleSubmit(onSubmit)}
            initial={{ x: 0, y: 0, opacity: 0 }}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            transition={{ duration: 3.7 }}
            viewport={{ once: true }}
            className={styles.atelierContainer}
          >
            <div className={styles.titleAtelier}>
              Ateliers ado avancé et adulte
              <br />
              <button onClick={() => clickForm()}>M'inscrire</button>
            </div>
            {adulteMap}
          </motion.div>
        </div>
      </div>
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
                  style={{ height: "70px", width: "300px" }}
                />
                <div>
                  <button
                    disabled={validChoice}
                    className={styles.submitBtn}
                    type="submit"
                  >
                    Envoyer
                  </button>
                </div>
              </form>
            </div>
          </div>
          {atelierChoice == "Atelier enfant-ado" && (
            <div className={styles.descriptionContainer}>
              Enfant-Ado{" "}
              <div style={{ color: "white" }}>
                Atelier créatif à partir de 4 ans
                <br />
                Dessin et peinture à partir de 7 ans
                <br />
                Atelier ado débutant ou confirmé
              </div>
            </div>
          )}
          {atelierChoice == "Atelier dessin et peinture adulte" && (
            <div className={styles.descriptionContainer}>
              Adulte
              <div style={{ color: "white" }}>
                Toutes techniques dont l&apos;huile.
                <br />
                Tous niveaux
              </div>
            </div>
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
