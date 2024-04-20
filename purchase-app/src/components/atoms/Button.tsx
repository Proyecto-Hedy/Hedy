interface IButtonProps {
  name: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

const Button = ({ name, onClick, className, disabled=false }: IButtonProps) => {
  return (
    <button
      type="submit"
      disabled={disabled}
      className={`w-full mb-8 mt-8 p-4 rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]
      ${disabled ? "bg-gray-bg-light text-white hover:bg-gray-bg-light cursor-not-allowed" : ""}
      ${className ? className : "bg-black-btn hover:bg-black-hover hover:text-white text-xl font-medium text-gray-bg-light"}
      `}
      onClick={onClick}
    >
      {name}
    </button>
  );
}

export default Button;