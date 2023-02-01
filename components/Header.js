import React, { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
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
  const [contactMe, setContactMe] = useState(false);
  const [activeComponent, setActiveComponent] = useState("accueil");
  //choose the screen size
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
  const clickHamburger = () => {
    navBurger ? setNavBurger(false) : setNavBurger(true);
  };
  const clickContactHeader = () => {
    contactMe ? setContactMe(false) : setContactMe(true);
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) =>
    (window.location.href = `mailto:theo.loussot@gmail.com?subject=${data.subject}&body=Bonjour,  ${data.name}. ${data.message} (${data.email})`);

  const navBar = (
    <>
      <Link
        href="/"
        className={
          activeComponent === "accueil" ? styles.navLinkActive : styles.navLink
        }
        onClick={() => setActiveComponent("accueil")}
      >
        Accueil
      </Link>
      <Link
        href="/creations"
        className={
          activeComponent === "créations"
            ? styles.navLinkActive
            : styles.navLink
        }
        onClick={() => setActiveComponent("créations")}
      >
        Créations
      </Link>
      <Link
        href="/expositions"
        className={
          activeComponent === "expositions"
            ? styles.navLinkActive
            : styles.navLink
        }
        onClick={() => setActiveComponent("expositions")}
      >
        Expositions
      </Link>
      <Link
        href="/ateliers"
        className={
          activeComponent === "ateliers" ? styles.navLinkActive : styles.navLink
        }
        onClick={() => setActiveComponent("ateliers")}
      >
        Ateliers
      </Link>
      <Link
        href="/stages"
        className={
          activeComponent === "stages" ? styles.navLinkActive : styles.navLink
        }
        onClick={() => setActiveComponent("stages")}
      >
        Stages
      </Link>
      <Link
        href="/albumsJeunesse"
        className={
          activeComponent === "albumsJeunesse" ? styles.navLinkActive : styles.navLink
        }
        onClick={() => setActiveComponent("albumsJeunesse")}
      >
        Albums Jeunesse
      </Link>
      <Link
        href="/about"
        className={
          activeComponent === "about" ? styles.navLinkActive : styles.navLink
        }
        onClick={() => setActiveComponent("about")}
      >
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
        {!isMobile &&
          
          
          <div className={styles.navContent}>{navBar}</div>
        }
      </div>
      <div className={styles.rightContainer}>
        <SocialIcon
          network="email"
          fgColor="#C5C6C7"
          onClick={() => clickContactHeader()}
          style={{ height: "30px", width: "30px" }}
          className={styles.buttonHeader}
        />
        {contactMe && (
          <div className={styles.contactMeHeader}>
            <button
              onClick={() => setContactMe(false)}
              style={{
                border: "none",
                display: "flex",
                marginLeft: "20px",
                backgroundColor: "transparent",
              }}
            >
              <ImCross className={styles.logoCross} />
            </button>
            <div className={styles.contactSection}>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className={styles.formSectionG}
                initial={{ x: 100, y: 0, opacity: 0 }}
                whileInView={{ x: 0, y: 0, opacity: 1 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
              >
                <div className={styles.formSection1}>
                  <input
                    {...register("name")}
                    placeholder="Nom"
                    className={styles.contactInput}
                    style={{ marginRight: "5px" }}
                    type="text"
                  />
                  <input
                    {...register("email")}
                    placeholder="Email"
                    className={styles.contactInput}
                    style={{}}
                    type="email"
                  />
                </div>
                <input
                  {...register("subject")}
                  placeholder="Objet"
                  className={styles.contactInput}
                  type="text"
                />
                <textarea
                  {...register("message")}
                  placeholder="Message"
                  className={styles.contactInput}
                  style={{ height: "100px" }}
                />
                <button className={styles.submitBtn} type="submit">
                  Envoyer
                </button>
              </form>
            </div>
          </div>
        )}
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
