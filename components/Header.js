import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import styles from "../styles/Header.module.css";
import { SocialIcon } from "react-social-icons";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
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
      style={{
        backgroundColor: "transparent",
        height: 30,
        width: 30,
      }}
      className={styles.buttonHeader}
    />
  );
});

function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const [navBurger, setNavBurger] = useState(false);
  //choose the screen size
  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };
  
  // create an event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    if (window.innerWidth <=768) {
      setIsMobile(true)
    }
    console.log('isMobile',isMobile);
  },[isMobile]);
  const clickHamburger = () => {
    navBurger ? setNavBurger(false) : setNavBurger(true);
  };
  const navBar = (
    <>
      <Link href="/" className={styles.navLink}>
        Accueil
      </Link>
      <Link href="/creations" className={styles.navLink}>
        Créations
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
    </>
  );
  const navBarMobile = (
    <div className={styles.navContentMobile}>
      <Link
        href="/"
        className={styles.navLinkMobile}
        onClick={() => clickHamburger()}
      >
        Accueil
      </Link>
      <Link
        href="/creations"
        className={styles.navLinkMobile}
        onClick={() => clickHamburger()}
      >
        Créations
      </Link>
      <Link
        href="/expositions"
        className={styles.navLinkMobile}
        onClick={() => clickHamburger()}
      >
        Expositions
      </Link>
      <Link
        href="/ateliers"
        className={styles.navLinkMobile}
        onClick={() => clickHamburger()}
      >
        Ateliers
      </Link>
      <Link
        href="/stages"
        className={styles.navLinkMobile}
        onClick={() => clickHamburger()}
      >
        Stages
      </Link>
      <Link
        href="/albumsJeunesse"
        className={styles.navLinkMobile}
        onClick={() => clickHamburger()}
      >
        Albums Jeunesse
      </Link>
      <Link
        href="/about"
        className={styles.navLinkMobile}
        onClick={() => clickHamburger()}
      >
        A propos
      </Link>
    </div>
  );

  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>{mapMedia}</div>

      <div className={styles.centerContainer}>
        <div className={styles.artist}>Sandrine Bourgoin Herrault </div>
        <div className={styles.skills}>Peintre Autrice Illustratrice</div>
        {isMobile ? (
          console.log("Mobile device detect")
        ) : (
          <div className={styles.navContent}>{navBar}</div>
        )}
      </div>
      <div className={styles.rightContainer}>
        <SocialIcon
          network="email"
          fgColor="#C5C6C7"
          url="/"
          style={{ height: "30px", width: "30px" }}
          className={styles.buttonHeader}
        />
        {isMobile && (
          <button
            className={styles.hamburgerMenu}
            type="button"
            onClick={() => clickHamburger()}
          >
            {!navBurger ? (
              <GiHamburgerMenu className={styles.logoHamburger} />
            ) : (
              <ImCross className={styles.logoHamburger} />
            )}
          </button>
        )}
      </div>
      {navBurger && (
        <div className={styles.navBarOpen}>
          {navBarMobile}
          <button
            onClick={() => setNavBurger(false)}
            style={{
              border: "none",
              display: "flex",
              marginLeft: "20px",
              backgroundColor: "transparent",
            }}
          >
            <ImCross className={styles.logoHamburger} />
          </button>
        </div>
      )}
    </div>
  );
}

export default Header;
