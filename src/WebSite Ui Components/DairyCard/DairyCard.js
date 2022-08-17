import React from "react";
import Icon from "../../general/Icon";
import { PUBLIC_ASSETS_PATH } from "../../Utils/Constants";
import styles from "./DairyCard.css";
function DairyCard({ icon, header, desc, link, image }) {
  var flipCardContainer= document.getElementsByClassName(styles.flipCardContainer)
  var insidePage= document.getElementsByClassName(styles.insidePage);
  var card = document.getElementsByClassName(styles.card)

 

React.useEffect(()=>{
  
  function showAnimation(){
    for(let i = 0; i < 1; i++){
      card[i].style.boxShadow = "-0.1rem 1.7rem 6.6rem -3.2rem rgba(0, 0, 0, 0.75)";
      card[i].style.width = "40rem"
         flipCardContainer[i].style.transform ="rotateY(-180deg)";
        card[i].style.boxShadow = "inset 1rem 0px 5rem -2.5rem rgba(0, 0, 0, 0.1)";
        insidePage[i].style.boxShadow = "inset 1rem 0px 5rem -2.5rem rgba(0, 0, 0, 0.1)";
    }
   }

    setTimeout(showAnimation, 4000);
    function hideAnimation(){
      for(let i = 0; i < 1; i++){
        card[i].style.boxShadow = "";
        card[i].style.width = "20rem"
           card[i].style.transform ="";
           flipCardContainer[i].style.transform ="";
          card[i].style.boxShadow = "";
          insidePage[i].style.boxShadow = "";
      }
     }

     setTimeout(hideAnimation, 8000);
   
})
  
  

  return (
    <div>
      <div  className={styles.card} id="cardAshir">
        <div className={styles.flipCard}>
          <div className={styles.flipCardContainer} id="flipcardAshir">
            <div className={styles.cardFront}>
              <div
                className={styles.cardFrontTp + " " + styles.cardFrontTpCity}
              >
                <div className={styles.IconDiv}>
                  <Icon image={`${PUBLIC_ASSETS_PATH}/${icon}`} size={200} />
                </div>
              </div>

              <div className={styles.cardFrontBt}>
                <p
                  className={
                    styles.cardFrontTextView +
                    " " +
                    styles.cardFrontTextViewCity
                  }
                >
                  View me
                </p>
              </div>
            </div>
            <div className={styles.cardBack}>
              <div classNameName={styles.imgContainer}>
                <div className={styles.IconDiv}>
                  <Icon image={`${PUBLIC_ASSETS_PATH}/${image}`} size={200} />
                </div>
                <div className={styles.btnDiv}>
                  <a
                    href={link}
                    className={
                      styles.insidePageBtn + " " + styles.insidePageBtnCity
                    }
                  >
                    {header}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.insidePage} id="insidepageAshir">
          <div className={styles.insidePage__container}>
            <h3
              className={
                styles.insidePageHeading + " " + styles.insidePageHeadingCity
              }
            >
              {header}
              <hr className={styles.divider} />
            </h3>
            <p className={styles.insidePage__text}>{desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DairyCard;
