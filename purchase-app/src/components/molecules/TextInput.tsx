"use client"
import { useState } from "react";

interface ITextInputProps {
  onChange: (value: string) => void,
}

const TextInput = ({ onChange }: ITextInputProps) => {
  const [inputState, setInputState] = useState<string>("");

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value: string = e.target.value
    setInputState(value.toLocaleLowerCase());
  }

  const handlePushEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit()
    }
  }

  const handleSubmit = () => {
    setInputState("")
    onChange(inputState)
  };

  return ( 
    <div className="flex-grow flex items-center justify-center">
      <input
        className="border border-gray-300 p-2 rounded-full w-full max-w-md"
        onChange={handleChangeInput}
        onKeyDown={handlePushEnter}
        type="text"
        placeholder="Search product"
        name="text input"
        required
      />
      <button
        className="bg-black-btn text-white px-4 py-2 rounded-full ml-2 cursor-pointer"
        onClick={handleSubmit}
        disabled={!inputState}
      >
        Search
      </button>
    </div>
  );
}

export default TextInput;