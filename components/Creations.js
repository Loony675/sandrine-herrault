import React, { useEffect, useState } from "react";
import styles from "../styles/Creation.module.css";
import Portraits from "./Portraits";
import Paysages from "./Paysages";
import Compositions from "./Compositions";

function Creations() {
  const [componentVisible, setComponentVisible] = useState(<Portraits />);
  const goToComponents = (composant) => {
    console.log("value=", composant);
    setComponentVisible(composant);
    console.log(componentVisible);
  };

  useEffect(() => {
    console.log("re-render");
  }, [componentVisible]);
  return (
    <div className={styles.creationContainer}>
      <div className={styles.creationTitle}>Creations</div>
      <div className={styles.buttonNavComponentContainer}>
        <button className={styles.buttonNavComponent} onClick={(composant) => goToComponents(<Portraits />)}>
          Portrait
        </button>
        <button className={styles.buttonNavComponent} onClick={(composant) => goToComponents(<Paysages />)}>
          Paysages
        </button>
        <button className={styles.buttonNavComponent} onClick={(composant) => goToComponents(<Compositions />)}>
          Compositions
        </button>
      </div>
      {componentVisible}
    </div>
  );
}

export default Creations;
