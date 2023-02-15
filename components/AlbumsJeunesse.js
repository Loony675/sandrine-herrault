import React from "react";
import styles from "../styles/Albums.module.css";

function AlbumsJeunesse() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.imageLivre}>
        <img src="toraVerde.webp" style={{ maxHeight: "400px" }} />
      </div>
      <div className={styles.descriptionLivre}>
        <div>Conte initiatique</div>
        <div>
          pour petits et grands
          <p>
            Une tour étrange, des disparitions inexpliquées et trois jeunes
            soeurs aventurières ... Êtes-vous prêts à les suivre dans leur quête
            de vérité ?
          </p>
        </div>
        <div >
          <button
            className={styles.buttonLink}
            onClick={(e) => {
              e.preventDefault();
              window.location.href =
                "https://www.amazon.fr/Torra-Verde-Sandrine-Herrault/dp/B09DN1DXBS/ref=sr_1_1?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=la+torra+verde&qid=1634551103&sr=8-1";
            }}
          >
            Amazon
          </button>
          <button
            className={styles.buttonLink}
            onClick={(e) => {
              e.preventDefault();
              window.location.href =
                "https://livre.fnac.com/a16243253/Sandrine-Herrault-La-Torra-Verde#omnsearchpos=2";
            }}
            href="https://www.amazon.fr/Torra-Verde-Sandrine-Herrault/dp/B09DN1DXBS/ref=sr_1_1?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=la+torra+verde&qid=1634551103&sr=8-1"
          >
            Fnac
          </button>

        </div>
      </div>
    </div>
  );
}

export default AlbumsJeunesse;
