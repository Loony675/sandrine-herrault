import Image from "next/image";
import React from "react";
import { useForm } from "react-hook-form";

import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";

export default function Home() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) =>
    (window.location.href = `mailto:theo.loussot@gmail.com?subject=${data.subject}&body=Bonjour,  ${data.name}. ${data.message} (${data.email})`);
  return (
    <div className={styles.homeContainer}>
      <div className={styles.bannerContainer}>
        <img className={styles.banner} src="/banner.webp" alt="banner pic" />
      </div>
      <div className={styles.bioContainer}>
        <div className={styles.bio}>Biographie</div>
        <div className={styles.bioBlock}>
          <img
            className={styles.profilPic}
            src="/picProfil.webp"
            alt="profil pic"
          />
          <div className={styles.bioDescription}>
            <p>
              Je fais une peinture figurative qui prend naissance dans mon
              atelier de Gambais, le plus souvent d&apos;après nature ou en extérieur
              sur le motif.
            </p>
            <br />
            <p>
              Pour moi, la peinture est un prétexte où les couleurs et les
              formes créent un monde inspiré à la fois du réel et de mon
              intériorité. C’est aussi un moyen pour moi de donner à voir ma
              beauté du monde.
            </p>
            <br />
            <p>
              Membre de la société Taylor, j&apos;expose régulièrement dans
              différents salons de la région parisienne.{" "}
            </p>
            <br />
            <p>
              Il vous est possible de commander des œuvres, de venir voir mes
              tableaux à mon atelier ou lors de mes expositions, de vous
              inscrire à mes cours.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.citationContainer}>
        <img
          className={styles.citationImg}
          src="citationPic.webp"
          alt="outils de peintre"
        />
        <div className={styles.textImg}>
          <div style={{ background: "none" }}>
            {" "}
            &#34;La créativité demande du courage.&#34;
          </div>
          <br />
          <div style={{ background: "none" }}>Henri Matisse</div>
        </div>
      </div>
      <div className={styles.contactSection}>
        <div className={styles.formTitle}>Contactez-moi</div>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.formSectionG}>
          <div className={styles.formSection1}>
            <input
              {...register("name")}
              placeholder="Nom"
              className={styles.contactInput} style={{marginRight:'5px'}}
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className={styles.contactInput} 
              type="email"
            />
            </div>
              <input
                {...register("subject")}
                placeholder="Objet"
                className={styles.contactInput}
                type="text"
              />
              <textarea
                {...register("message")}
                placeholder="Message"
                className={styles.contactInput}
                />
              <button className={styles.contactInput} type="submit">
                Envoyer
              </button>
            
        </form>
        
      </div>
    </div>
  );
}
