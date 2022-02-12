import React, { useContext } from "react";
import classnames from "classnames";
import { FormContext } from "./Form";

export default function FormField({ label, type, validation, width }) {
  const classes = classnames({});
  const { register, errors } = useContext(FormContext);
  const error = errors[label];

  return (
    <div className="py-7 relative w-full">
      <label
        htmlFor={label}
        className="text-sm font-bold absolute top-1 left-0"
      >
        {label}
      </label>
      <input
        type={type}
        name={label}
        id={label}
        className={`rounded-md border-2 border-silver focus:border-orange  h-14 pl-2 shadow appearance-none  focus:outline-none focus:shadow-outline w-full`}
        {...register(`${label}`, validation)}
      />
      <span className="sm"></span>
    </div>
  );
}
