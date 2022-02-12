import React, { createContext } from "react";
export const FormContext = createContext();

export default function Form({ submit, register, errors, children }) {
  const formHandlers = { register, errors };
  return (
    <form
      className="bg-white w-full tablet:w-3/4 tablet:max-w-screen-md rounded-lg p-6 shadow-md"
      onSubmit={submit}
    >
      <FormContext.Provider value={formHandlers}>
        {children}
      </FormContext.Provider>
    </form>
  );
}
