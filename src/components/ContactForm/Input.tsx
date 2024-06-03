import { toKebabCase } from '@/utils/toKebabCase';
import styles from './ContactForm.module.css';
import type { Path, UseFormRegister, Validate } from 'react-hook-form';
import type { IForm } from './ContactForm';
import type { HTMLInputTypeAttribute } from 'react';

interface InputProps {
  label: Path<IForm>;
  register: UseFormRegister<IForm>;
  required?: boolean;
  type?: HTMLInputTypeAttribute;
  validate?: Validate<string, IForm> | Record<string, Validate<string, IForm>>;
}

export const Input = ({
  label,
  register,
  required,
  type,
  validate
}: InputProps) => {
  return (
    <div className={styles.inputGroup}>
      <label htmlFor={toKebabCase(label)}>{label}</label>
      {type === "select" ? (
        <select
          {...register(label, { validate, required })}
          name={label}
          id={toKebabCase(label)}
        >
          <option>I have a question</option>
          <option>How can I get involved?</option>
          <option>I&apos;d like to report a website issue</option>
          <option>General inquiry</option>
        </select>
      ): (
        <input
          {...register(label, { validate, required })}
          type={type}
          name={label}
          id={toKebabCase(label)}
        />
      )}
    </div>
  )
}
