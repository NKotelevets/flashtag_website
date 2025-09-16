import React from "react";
import styles from "./textfield.module.css";

export interface TextFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  containerClassName?: string;
  error?: string;
}

const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  ({ label, containerClassName, className, error, ...inputProps }, ref) => {
    return (
      <label className={`${styles.field} ${containerClassName ?? ""}`}>
        {label && <span className={styles.label}>{label}</span>}
        <input
          ref={ref}
          className={`${styles.input} ${error ? styles.inputError : ""} ${
            className ?? ""
          }`}
          {...inputProps}
        />
        <span
          className={`${styles.helper} ${error ? styles.errorText : ""}`}
          aria-live="polite"
        >
          {error || ""}
        </span>
      </label>
    );
  }
);

TextField.displayName = "TextField";

export default TextField;
