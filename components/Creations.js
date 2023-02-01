import React, { useEffect, useState } from "react";
import styles from "../styles/Creation.module.css";
import Portraits from "./Portraits";
import Paysages from "./Paysages";
import Compositions from "./Compositions";

function Creations() {
  const [isMobile, setIsMobile] = useState(false);
  const [styleComposantVisible, setStyleComposantVisible] = useState('portraits')
  const [componentVisible, setComponentVisible] = useState(<Portraits />);
  const goToComponents = (composant) => {
    setComponentVisible(composant);
  };
  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };
  useEffect(() => {
  }, [componentVisible, styleComposantVisible]);
  useEffect(() => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    }
    window.addEventListener("resize", handleResize);

  }, [isMobile]);


  
  return (
    <div className={styles.creationContainer}>
      {isMobile && <div className={styles.creationTitle}>Creations</div>}
      <div className={styles.buttonNavComponentContainer}>
        <button className={styleComposantVisible==='portraits' ? styles.buttonNavComponentActive : styles.buttonNavComponent} onClick={(composant) => {goToComponents(<Portraits />); setStyleComposantVisible('portraits')}}>
          Portraits
        </button>
        <button className={styleComposantVisible==='paysages' ? styles.buttonNavComponentActive : styles.buttonNavComponent} onClick={(composant) => {goToComponents(<Paysages />); setStyleComposantVisible('paysages')}}>
          Paysages
        </button>
        <button className={styleComposantVisible==='compositions' ? styles.buttonNavComponentActive : styles.buttonNavComponent} onClick={(composant) => {goToComponents(<Compositions />); setStyleComposantVisible('compositions')}}>
          Compositions
        </button>
      </div>
      {componentVisible}
    </div>
  );
}

export default Creations;
