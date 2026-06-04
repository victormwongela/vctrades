interface InputProps {
  label: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
}

const Input = ({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
}: InputProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-medium">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="
          border
          border-gray-300
          rounded-lg
          px-4
          py-3
          outline-none
          focus:ring-2
          focus:ring-blue-500
        "
      />
    </div>
  );
};

export default Input;