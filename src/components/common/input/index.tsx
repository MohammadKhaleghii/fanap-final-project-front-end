import {FC} from "react";
import {InputProps} from "./input.interface";
import {cva} from "class-variance-authority";
import {cn} from "@/utilities/tailwind-merge";

const inputVariant = cva(
  "px-2 py-3 rounded-sm h-10 w-full text-black bg-white",
  {
    variants: {
      variants: {
        primary: "border border-primary outline-none",
        secondary:
          "border border-gray outline-primary placeholder:text-[#616161]",
      },
    },
    defaultVariants: {
      variants: "secondary",
    },
  }
);

const Input: FC<InputProps> = ({
  variants,
  className,
  children,
  ...inputProps
}) => {
  return (
    <>
      <input
        className={cn(inputVariant({variants, className}))}
        {...inputProps}
      />
      {children}
    </>
  );
};

export default Input;
export {inputVariant};
