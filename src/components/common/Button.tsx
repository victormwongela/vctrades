import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  type = "button",
  onClick,
  disabled = false,
  className = "",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        w-full
        bg-blue-600
        hover:bg-blue-700
        text-white
        font-semibold
        py-3
        px-4
        rounded-lg
        transition
        duration-300
        disabled:opacity-50
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;