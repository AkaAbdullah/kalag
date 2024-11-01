import { twMerge } from "tailwind-merge";

export const CustomInput = ({
  label,
  className,
  onChange,
  type,
  value,
  name,
  placeholder,
}) => {
  return (
    <div className="space-y-2">
      <label>{label}</label>
      <input
        onChange={onChange}
        type={type}
        value={value}
        name={name}
        placeholder={placeholder}
        className={twMerge(
          ` h-10 w-full md:w-40 lg:w-60   bg-transparent  border-2 p-3 focus:outline-none`,
          className
        )}
      />
    </div>
  );
};
