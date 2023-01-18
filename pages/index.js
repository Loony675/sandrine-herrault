import Image from "next/image";
import React from "react";

import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";

export default function Home() {
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
              atelier de Gambais, le plus souvent d'après nature ou en extérieur
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
              Membre de la société Taylor, j'expose régulièrement dans
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
          <div style={{background:'none'}}> "La créativité demande du courage."</div>
          <br />
          <div style={{background:'none'}}>Henri Matisse</div>
        </div>
      </div>
    </div>
  );
}
