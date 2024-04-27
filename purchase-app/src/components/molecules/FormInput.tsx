import { FormInputProps } from "@/interfaces/data.interfaces";

const FormInput = ({ onChange, placeholder, required, title }: FormInputProps) => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex relative z-0 w-full txt-compact-medium">
      <input
        className="border border-gray-300 p-2 rounded-lg w-full max-w-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
        onChange={onChange}
        title={title}
        placeholder={placeholder}
        name={placeholder}
        required={required}
      />
      </div>
    </div>
  );
}

export default FormInput;