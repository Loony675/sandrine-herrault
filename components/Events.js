import React, { useEffect, useState } from "react";
import styles from "../styles/Events.module.css";
import Expositions from "./Expositions";
import Stages from "./Stages";

function Events() {
  const [isMobile, setIsMobile] = useState(false);
  const [styleComposantVisible, setStyleComposantVisible] = useState('stages')
  const [componentVisible, setComponentVisible] = useState(<Stages />);
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
        <button className={styleComposantVisible==='stages' ? styles.buttonNavComponentActive : styles.buttonNavComponent} onClick={(composant) => {goToComponents(<Stages />); setStyleComposantVisible('stages')}}>
          Stages
        </button>
        <button className={styleComposantVisible==='expositions' ? styles.buttonNavComponentActive : styles.buttonNavComponent} onClick={(composant) => {goToComponents(<Expositions />); setStyleComposantVisible('expositions')}}>
          Expositions
        </button>

      </div>
      {componentVisible}
    </div>
  );
}

export default Events;
