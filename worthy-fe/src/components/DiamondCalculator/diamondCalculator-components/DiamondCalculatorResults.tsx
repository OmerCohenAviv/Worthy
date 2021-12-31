import React from "react";
import styles from "../diamond-calculator.module.scss";
import DiamondSimilar from "./DiamondSimilar";

const DiamondCalculatorResults = ({ results }: any) => {
    const { price, similarDiamonds } = results;
    console.log(similarDiamonds);
    return (
        <div className={styles["diamond-results"]}>
            <h3>{`Your Diamond Worth - ${price}$`} </h3>
            <h4>
                {!similarDiamonds.length
                    ? "Wow, It seems you have a one of kind Diamond!"
                    : "Similar Diamonds"}
            </h4>
            <div className={styles["similar-diamonds"]}>
                {similarDiamonds.map((d: any) => (
                    <DiamondSimilar price={d.diamond.price} image="" />
                ))}
            </div>
        </div>
    );
};

export default DiamondCalculatorResults;
