import { InputHTMLAttributes, ReactNode } from "react";

interface SearchInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  label: string;
  placeholder?: string;
  icon?: ReactNode;
  onChange?: (value: string) => void;
  value?: string;
  id: string;
}

export default function SearchInput({
  label,
  placeholder,
  icon,
  onChange,
  value,
  id,
  ...rest
}: SearchInputProps) {
  return (
    <div className="flex-1 items-start justify-start px-7 py-3 text-left">
      <label
        htmlFor={id}
        className="text-left text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <div className="flex">
        <input
          id={id}
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          className="text-md w-full border-none bg-transparent font-bold text-black placeholder:font-normal focus:outline-none"
          {...rest}
        />
        {icon && (
          <span className="flex items-center" aria-hidden="true">
            {icon}
          </span>
        )}
      </div>
    </div>
  );
}
