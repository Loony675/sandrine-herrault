import React from "react";
import styles from "../styles/Expositions.module.css";

function Expositions() {
  return (
    <div className={styles.mainContainer}>
      <img
        src="gallery.webp"
        style={{ height: "400px", maxWidth: "800px", objectFit: "contain", opacity:"0.6"}}
      />
      <div className={styles.textImg}>
        <p>Japon National Art Center Tokyo aout 2020</p>
        <p>Paris Salon d’Automne 2020 2022</p>
        <p>Galerie Thuillier 2020</p>
        <p>Salon souvenir de Corot Viroflay 2022 2021 2020 2019 2018</p>
        <p>Salon de printemps de Dourdan 2022 2018 2017</p>
        <p>Salon art expo de Ballancourt 2018 2017</p>
      </div>
    </div>
  );
}

export default Expositions;
