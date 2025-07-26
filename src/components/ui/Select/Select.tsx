import cn from "@/utils/cn";
import { ChangeEvent, ReactNode } from "react";

interface Proptypes {
  defaultValue?: string;
  fullWidth?: boolean;
  label?: string;
  labelClassName?: string;
  name: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  options: { key: string; value: string }[];
  startContent?: ReactNode;
  variant?: "primary" | "white";
}

const Select = (props: Proptypes) => {
  const {
    defaultValue,
    fullWidth = false,
    label,
    labelClassName,
    name,
    onChange,
    options,
    startContent,
    variant,
  } = props;
  return (
    <div>
      <label
        htmlFor={name}
        className={cn("block mb-1.5 font-semibold text-sm", labelClassName)}
      >
        {label}
      </label>
      <div
        className={cn(
          "flex items-center gap-2 bg- bg-primary bg-secondary shadow px-3 py-2 border border-neutral-600 rounded w-max text-white",
          fullWidth && "w-full",
          variant === "white" && "bg-white text-black shadow border-black"
        )}
      >
        {startContent}
        <select
          className="focus:outline-none w-full cursor-pointer"
          defaultValue={defaultValue}
          id={name}
          name={name}
          onChange={onChange}
        >
          {options.map((item) => (
            <option
              key={`option-limit-${item.key}`}
              value={item.key}
              className={cn(
                "bg-secondary w-max text-white",
                variant === "white" && "bg-white text-black"
              )}
            >
              {item.value}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Select;
