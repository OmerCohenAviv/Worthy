import React from "react";
import styles from "../diamond-calculator.module.scss";
import diamondOne from "../../../assets/diamond-1.jpg";

type DiamondSimilarProps = {
    price: number;
};

const DiamondSimilar = ({price}: DiamondSimilarProps) => {
    return (
        <div className={styles["similar-diamond"]}>
            <span> {price}$ </span>
            <img src={diamondOne}/>
        </div>
    );
};

export default DiamondSimilar;
