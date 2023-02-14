import React from "react";
import { useState, useEffect } from "react";
import { urlFor } from "@/sanity";
import styles from "../styles/Paysages.module.css";

function Paysages() {
  const [toilesRetrieved, setToilesRetrieved] = useState([]);
  const [isMobile, setIsMobile] = useState(false);
  const [hoverImg, setHoverImg] = useState(-1);

  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    }
    window.addEventListener("resize", handleResize);
  }, [isMobile]);
  let DATASET = process.env.NEXT_PUBLIC_SANITY_DATASET;
  let QUERY = '*[type == "paysage"]';
  let PROJECT_ID = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  let URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;
  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then(({ result }) => {
        const mapToiles = result.map((data, i) => {
          return {
            key: i,
            titre: data.titre,
            description: data.description,
            photo: data.photo,
          };
        });
        setToilesRetrieved(mapToiles);
      });
  }, []);
  const oeuvres = toilesRetrieved.map((data, i) => {
    return (
      <div key={i} className={styles.oeuvresContainer}>
        <img
          key={i}
          className={styles.oeuvreImg}
          src={urlFor(data.photo).url()}
          onMouseEnter={() => setHoverImg(i)}
          onMouseLeave={() => setHoverImg(-1)}
        />
        {hoverImg === i && (
          <div className={styles.textOeuvre}>
            <div style={{ background: "none" }}>{data.titre}</div>
            <div style={{ background: "none" }}>{data.description}</div>
          </div>
        )}
      </div>
    );
  });
  return (
    <div className={styles.mainContainer}>
      <div className={styles.mapOeuvresContainer}>{oeuvres}</div>
    </div>
  );
}

export default Paysages;
