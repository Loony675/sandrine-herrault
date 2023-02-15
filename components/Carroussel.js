import React, { useEffect, useState } from "react";
import styles from "../styles/Carrousel.module.css";
import { urlFor } from "@/sanity";
import Carousel from "framer-motion-carousel";

function Carroussel() {
  let QUERY = '*[_type == "ancienStage"]';
  let DATASET = process.env.NEXT_PUBLIC_SANITY_DATASET;
  let PROJECT_ID = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  let URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;

  const [projectsRetrieved, setProjetsRetrieved] = useState([]);
  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then(({ result }) => {
        const oldProjects = result.map((data, i) => {
          return {
            key: i,
            titre: data.titre,
            description: data.description,
            images: data.image,
          };
        });
        setProjetsRetrieved(oldProjects);
      });
  }, []);
  const map = projectsRetrieved.map((data, i) => {
    const listImages = data.images;
    const mapListImages = listImages.map((data, i) => {
      return (
        <img
          key={i}
          src={urlFor(data).url()}
          className={styles.carouselImage}
        />
      );
    });
    return mapListImages;
  });
  return (
    <div className={styles.mainContainer} autoPlay interval={2000}>
      <Carousel autoPlay interval={4000} infiniteLoop style={styles.test}>
        {map}
      </Carousel>
      <div className={styles.titleProjet}>{projectsRetrieved[0]?.titre}</div>
      <div className={styles.descriptionProjet}>{projectsRetrieved[0]?.description}</div>
    </div>
  );
}

export default Carroussel;
