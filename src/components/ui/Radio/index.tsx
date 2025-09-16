import React from "react";
import styles from "./radio.module.css";
import { Check } from "lucide-react";

export interface RadioProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
}

const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ label, className, ...props }, ref) => {
    return (
      <label className={styles.radioLabel}>
        <input ref={ref} type="radio" className={styles.input} {...props} />
        <span className={`${styles.custom} ${className ?? ""}`}>
          <Check className={styles.checkIcon} size={14} />
        </span>
        {label && <span className={styles.text}>{label}</span>}
      </label>
    );
  }
);

Radio.displayName = "Radio";

export default Radio;
