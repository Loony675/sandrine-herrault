import React from "react";
import { useState, useEffect } from "react";
import { urlFor } from "@/sanity";

function Portraits() {
  const [toilesRetrieved, setToilesRetrieved] = useState([]);
  let DATASET = "production";
    // fetch all
  // let QUERY = '*[_type == "oeuvres"]';
  let QUERY = '*[type == "portrait"]';
  let PROJECT_ID = "pyek8mhu";

  // let URL = `http://localhost:3000/api/*[_type == "oeuvres"]`;
  let URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;
  // console.log(URL);
  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then(({ result }) => {
        console.log(result);
        const mapToiles = result.map((data,i) => {
          return {
            key:i,
            titre: data.titre,
            description: data.description,
            photo: data.photo,
          };
        });
        // console.log('mapToiles', mapToiles[0]);
        setToilesRetrieved(mapToiles);
      });
  }, []);
  const oeuvres = toilesRetrieved.map((data,i) => {
    return (
      <div key={i}>
        <div>Titre: {data.titre}</div>
        <div>Description {data.description}</div>
        <div>Photo: </div>
        <img src={urlFor(data.photo).url()}/>
      </div>
    );
  });
  return (
    <div>
      Page Portraits
      <div>{oeuvres}</div>
    </div>
  );
}

export default Portraits;
