import React, { Dispatch } from "react";
import styles from "../diamond-calculator.module.scss";
import Input from "../../core/form/Input";
import Select from "../../core/form/Select";
import { useFormContext } from "react-hook-form";
import axios from "axios";
import { DiamondCalculatorFormInputs } from "../DiamondCalculator";

const cutOptions = [
  { value: "round", label: "Round" },
  { value: "princess", label: "Princess" },
];
const colorOptions = [
  { value: "d", label: "D" },
  { value: "e", label: "E" },
];
const clarityOptions = [
  { value: "fl", label: "Flawless" },
  { value: "if", label: "Internally Flawless" },
];

type DiamondCalculatorFormProps = {
  setResults: Dispatch<any>;
};

const DiamondCalculatorForm = ({ setResults }: DiamondCalculatorFormProps) => {
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = useFormContext();

  const onSubmit = async (formValues: DiamondCalculatorFormInputs) => {
    const { carat, cut, color, clarity } = formValues;
    const response = await axios.get(
      "http://localhost:3001/diamond/calculate",
      {
        params: {
          carat,
          cut: cut.value,
          color: color.value,
          clarity: clarity.value,
        },
      }
    );
    const { data } = response;
    setResults(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={styles["diamond-calculator__form"]}
    >
      <Input
        name="carat"
        label="Carat Weight"
        type="number"
        rules={{ required: "Required Field" }}
      />
      <Select
        name="cut"
        label="Cut"
        options={cutOptions}
        rules={{ required: "Required Field" }}
      />
      <Select
        name="color"
        label="Color"
        options={colorOptions}
        rules={{ required: "Required Field" }}
      />
      <Select
        name="clarity"
        label="Clarity"
        options={clarityOptions}
        rules={{ required: "Required Field" }}
      />
      <button
        className={styles["calculate-btn"]}
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Calculating..." : "Calculate Diamond Price"}
      </button>
    </form>
  );
};

export default DiamondCalculatorForm;
