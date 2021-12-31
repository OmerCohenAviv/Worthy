import React from "react";
import styles from "./form.module.scss";
import ReactSelect from "react-select";
import { Controller, useFormContext } from "react-hook-form";

type SelectProps = {
  name: string;
  label: string;
  rules: object;
  options: { value: string; label: string }[];
};

const Select = ({ name, options, rules, label }: SelectProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <Controller
      name={name}
      rules={rules}
      control={control}
      render={({ field }) => (
        <>
          <label className={styles["input-label"]}>{label}</label>
          <ReactSelect
            {...field}
            options={options}
            className={styles["select"]}
          />
          {errors[name] && (
            <span className={styles["error-msg"]}>{errors[name].message}</span>
          )}
        </>
      )}
    />
  );
};

export default Select;
