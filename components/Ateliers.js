import React from "react";
import styles from "../styles/Ateliers.module.css";
import { AiOutlineMessage } from "react-icons/ai";

function Ateliers() {
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
      {/*formulaire*/}
      <div></div>
      {/*inscription fixe*/}
      <div className={styles.inscriptionButtonContainer}>
        <div className={styles.inscriptionButton}>
  
          <p >
            M'inscrire
          </p>
          <AiOutlineMessage
             
          >
            M'inscrire AiOutlineMessage
          </AiOutlineMessage>
        </div>
      </div>
    </div>
  );
}

export default Ateliers;
