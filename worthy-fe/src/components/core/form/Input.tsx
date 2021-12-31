import React from "react";
import styles from "./form.module.scss";
import { useFormContext } from "react-hook-form";

type InputProps = {
  name: string;
  rules: object;
  label: string;
  type?: "text" | "number" | "email";
};

const Input = ({ name, label, type = "text", rules }: InputProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <>
      <label htmlFor={name} className={styles["input-label"]}>
        {label}
      </label>
      <input
        type={type}
        className={styles["input"]}
        {...register(name, rules)}
      />
      {errors[name] && (
        <span className={styles["error-msg"]}>{errors[name].message}</span>
      )}
    </>
  );
};

export default Input;
