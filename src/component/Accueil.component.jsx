import React from "react";
import styles from "./Accueil.module.css";

function AccueilComponent() {
    return (
        <div className={styles.page}>
            <h1>Accueil</h1>
            <p>Bienvenue sur notre site !</p>
            <ul>
                <li>Section d'informations</li>
                <li>Dernières actualités</li>
                <li>Présentation des fonctionnalités</li>
            </ul>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.
                Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,
                ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula
                massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci
                nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit
                amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat
                in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero
                pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo
                in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue
                blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus
                et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed
                pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales
                hendrerit.
            </p>
        </div>
    );
}

export default AccueilComponent;
