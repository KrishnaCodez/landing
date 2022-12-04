import React from "react";
import styles from "../styles/news.module.css";
import { useEffect } from "react";

const New = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
    <div>
      <div className={styles.nav}>Navbar</div>

      <div>
        <div className={styles.landingcontainer}>
          <div className={styles.laptop}>
            <img
              className={styles.backgroundShapeIcon}
              alt=""
              src="../background-shape@2x.png"
              data-animate-on-scroll
            />
            <img
              className={styles.backgroundShapeIcon1}
              alt=""
              src="../background-shape1@2x.png"
              data-animate-on-scroll
            />
            <img
              className={styles.backgroundShapeIcon2}
              alt=""
              src="../background-shape2@2x.png"
              data-animate-on-scroll
            />
            <img
              className={styles.backgroundShapeIcon3}
              alt=""
              src="../background-shape3@2x.png"
              data-animate-on-scroll
            />
          </div>

          <div className={styles.mobile}>
            <img
              className={styles.backgroundShapeIcon4}
              alt=""
              src="../background-shape4@2x.png"
              data-animate-on-scroll
            />
            <img
              className={styles.backgroundShapeIcon5}
              alt=""
              src="../background-shape5@2x.png"
              data-animate-on-scroll
            />
            <img
              className={styles.backgroundShapeIcon6}
              alt=""
              src="../background-shape6@2x.png"
              data-animate-on-scroll
            />
            <img
              className={styles.backgroundShapeIcon7}
              alt=""
              src="../background-shape7@2x.png"
              data-animate-on-scroll
            />
          </div>
          <div className={styles.hero}>
            <div className={styles.bg}> </div>
            <div className={styles.textdiv}>
              <b className={styles.landingPageTemplate}>
                Landing page template
              </b>
              <div className={styles.paragraphDiv}>
                <div className={styles.velitOdioBibendumEuViver}>
                  He wants to, hate to drink football, be a cartoon to put the
                  laoreet. As Put the chocolate dough in the refrigerator. To
                  adorn the lacinia of life at disease outbreak Feugiat will
                  take care of his free will pillow An element.
                </div>
              </div>
              <button className={styles.letsSellB}>Lets Explore</button>
            </div>
          </div>
        </div>

        <div className={styles.logosLineDiv}>
          <img
            className={styles.logoipsum28}
            alt=""
            src="../logoipsum--28.svg"
          />
          <img
            className={styles.logoipsum28}
            alt=""
            src="../logoipsum--01.svg"
          />
          <div className={styles.gap}>
            <img
              className={styles.logoipsum28}
              alt=""
              src="../logoipsum--04.svg"
            />
          </div>
          <img className={styles.logoIcon1} alt="" src="../logo1.svg" />
          <img
            className={styles.logoipsum28}
            alt=""
            src="../logoipsum--27.svg"
          />
          <div className={styles.gap}>
            <img
              className={styles.logoipsum28}
              alt=""
              src="../logoipsum--02.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
