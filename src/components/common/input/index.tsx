import {FC} from "react";
import {InputProps} from "./input.interface";
import {cva} from "class-variance-authority";
import {cn} from "@/utilities/tailwind-merge";

const inputVariant = cva("px-2 py-3 rounded-sm h-10  text-black bg-white", {
  variants: {
    variants: {
      primary: "border border-primary outline-none",
      secondary:
        "border border-gray outline-primary placeholder:text-[#616161]",
    },
    inputSize: {
      small: "w-[140px]",
      medium: "w-[216px]",
      large: "w-[440px]",
    },
  },
  defaultVariants: {
    variants: "secondary",
    inputSize: "large",
  },
});

const Input: FC<InputProps> = ({
  variants,
  className,
  children,
  inputSize,
  ...inputProps
}) => {
  return (
    <>
      <input
        className={cn(inputVariant({variants, inputSize, className}))}
        {...inputProps}
      />
      {children}
    </>
  );
};

export default Input;
export {inputVariant};
