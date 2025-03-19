import { InputHTMLAttributes, ReactNode } from "react";

interface SearchInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  label: string;
  placeholder?: string;
  icon?: ReactNode;
  onChange?: (value: string) => void;
  value?: string;
  className?: string;
  labelClassName?: string;
  inputClassName?: string;
}

export default function SearchInput({
  label,
  placeholder,
  icon,
  onChange,
  value,
  className = "flex-1 px-12 py-4",
  labelClassName = "text-md font-bold text-black",
  inputClassName = "w-full border-none focus:outline-none text-sm bg-transparent text-black",
  ...rest
}: SearchInputProps) {
  return (
    <div className={className}>
      <label className={labelClassName}>{label}</label>
      <div className="flex items-center">
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          className={inputClassName}
          {...rest}
        />
        {icon}
      </div>
    </div>
  );
}
