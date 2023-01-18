import React from "react";
import Link from "next/link";
import styles from "../styles/Header.module.css";
import { SocialIcon } from "react-social-icons";

const media = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/people/Sandrine-Herrault-peintre/100063483909932/",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/sandrineherrault/",
  },
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/sandrine-herrault-8576b966/?originalSubdomain=fr",
  },
];

const mapMedia = media.map((data, i) => {
  return (
    <SocialIcon
      key={i}
      url={data.url}
      style={{ marginRight: "6px", backgroundColor: "rgb(28, 28, 28)" }}
      className={styles.buttonHeader}
    />
  );
});
function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>{mapMedia}</div>

      <div className={styles.centerContainer}>
        <div className={styles.artist}>Sandrine Bourgoin Herrault</div>
        <div>Peintre Autrice Illustratrice</div>
        <div className={styles.navContent}>
          <Link href="/" className={styles.navLink}>
            Accueil
          </Link>
          <Link href="/paysages" className={styles.navLink}>
            Paysages
          </Link>
          <Link href="/portraits" className={styles.navLink}>
            Portraits
          </Link>
          <Link href="/compositions" className={styles.navLink}>
            Compositions
          </Link>
          <Link href="/expositions" className={styles.navLink}>
            Expositions
          </Link>
          <Link href="/ateliers" className={styles.navLink}>
            Ateliers
          </Link>
          <Link href="/stages" className={styles.navLink}>
            Stages
          </Link>
          <Link href="/albumsJeunesse" className={styles.navLink}>
            Albums Jeunesse
          </Link>
          <Link href="/about" className={styles.navLink}>
            A propos
          </Link>
        </div>
      </div>
      <div className={styles.rightContainer}>
        <SocialIcon
          network="email"
          fgColor="#C5C6C7"
          url="/"
          style={{ marginLeft: "6px" }}
          className={styles.buttonHeader}
        />
      </div>
    </div>
  );
}

export default Header;
