import React, { useState } from "react";
import styles from "./diamond-calculator.module.scss";
import DiamondCalculatorHeader from "./diamondCalculator-components/DiamondCalculatorHeader";
import DiamondCalculatorForm from "./diamondCalculator-components/DiamondCalculatorForm";
import { useForm, FormProvider } from "react-hook-form";
import DiamondCalculatorResults from "./diamondCalculator-components/DiamondCalculatorResults";

type SelectOption = {
  label: string;
  value: string;
};
export type DiamondCalculatorFormInputs = {
  carat: number;
  cut: SelectOption;
  color: SelectOption;
  clarity: SelectOption;
};

const DiamondCalculator = () => {
  const { ...methods } = useForm<DiamondCalculatorFormInputs>();
  const [results, setResults] = useState(null);

  return (
    <div className={styles["diamond-calculator"]}>
      <DiamondCalculatorHeader />
      <FormProvider {...methods}>
        <DiamondCalculatorForm setResults={setResults} />
        {results && <DiamondCalculatorResults results={results} />}
      </FormProvider>
    </div>
  );
};

export default DiamondCalculator;
