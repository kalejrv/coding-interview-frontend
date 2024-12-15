import { ChangeEvent, useState } from "react";

const initialValue: string = "";

export const useInputForm = () => {
  const [inputFormValue, setInputFormValue] = useState<string>(initialValue);

  const handleInputFormChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputFormValue(e.target.value);
  };

  const resetInputFormValue = (): void => {
    setInputFormValue(initialValue);
  };

  return {
    inputFormValue,
    handleInputFormChange,
    resetInputFormValue,
  };
};
