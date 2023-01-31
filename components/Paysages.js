import React from "react";
import { useState, useEffect } from "react";
import { urlFor } from "@/sanity";
import styles from '../styles/Paysages.module.css'

// function Modal({ children, shown, close }) {
//   return shown ? (
//     <div
//       className={styles.modalBackdrop}
//       onClick={() => {
//         // close modal when outside of modal is clicked
//         close();
//       }}
//     >
//       <div
//         className={styles.modalContent}
//         onClick={(e) => {
//           // do not close modal if anything inside modal content is clicked
//           e.stopPropagation();
//         }}
//       >
//         <button onClick={close}>Close</button>
//         {children}
//       </div>
//     </div>
//   ) : null;
// }

function Portraits() {
  const [toilesRetrieved, setToilesRetrieved] = useState([]);
  // const [modalShown, toggleModal] = useState(false);
  let DATASET = process.env.NEXT_PUBLIC_SANITY_DATASET;
  // fetch all
  // let QUERY = '*[_type == "oeuvres"]';
  let QUERY = '*[type == "paysage"]';
  let PROJECT_ID = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;

  // let URL = `http://localhost:3000/api/*[_type == "oeuvres"]`;
  let URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;
  // console.log(URL);
  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then(({ result }) => {
        console.log(result);
        const mapToiles = result.map((data, i) => {
          return {
            key: i,
            titre: data.titre,
            description: data.description,
            photo: data.photo,
          };
        });
        // console.log('mapToiles', mapToiles[0]);
        setToilesRetrieved(mapToiles);
      });
  }, []);
  const oeuvres = toilesRetrieved.map((data, i) => {
    return (
      <div key={i}>
        <div>Titre: {data.titre}</div>
        <div>Description {data.description}</div>
        <div>Photo: </div>
        <img src={urlFor(data.photo).url()} />
      </div>
    );
  });
  return (
    <div>
      Page Paysages
      <div>{oeuvres}</div>
      {/* Modal test */}
      {/* <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <p>modalShown: {modalShown.toString()}</p>
        <button
          onClick={() => {
            toggleModal(!modalShown);
          }}
        >
          Toggle Modal
        </button>
        <Modal
          shown={modalShown}
          close={() => {
            toggleModal(false);
          }}
        >
          <h1>Look! I'm inside the modal!</h1>
        </Modal>
      </div> */}
    </div>
  );
}

export default Portraits;
