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
    <div className="w-full flex-1 items-start justify-start px-4 py-3 text-left sm:px-7">
      <label
        htmlFor={id}
        className="text-left text-xs font-medium text-gray-700 sm:text-sm"
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
          className="sm:text-md w-full truncate border-none bg-transparent text-sm font-bold text-black placeholder:font-normal focus:outline-none"
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
