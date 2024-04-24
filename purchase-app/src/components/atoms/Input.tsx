import { useState } from "react";

interface ITextInputProps {
  onChange: (value: string) => void,
  placeholder: string;
  required: boolean;
  type?: string;
  title: string;
}

const Input = ({ 
  onChange,
  placeholder,
  required=false,
  type="text",
  title
}: ITextInputProps) => {
  const [inputState, setInputState] = useState<string>("");

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value: string = e.target.value
    setInputState(value)
    onChange(value)
  }

  return ( 
    <div className="flex-grow flex items-center justify-center">
      <input
        className="border border-gray-300 p-2 rounded-lg w-full max-w-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
        onChange={handleChangeInput}
        value={inputState}
        type={type}
        title={title}
        placeholder={placeholder}
        name={title}
        required={required}
      />
    </div>
  );
}

export default Input;