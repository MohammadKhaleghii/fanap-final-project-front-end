import {cva} from "class-variance-authority";
import {FC} from "react";

import {cn} from "@/utilities/tailwind-merge";
import {ButtonProps} from "./button.interface";
import LoadingSpinner from "../loading-spinner";

const buttonVariant = cva(
  "flex gap-x-3 items-center font-bold whitespace-nowrap rounded-lg transition hover:duration-75 ease-in-out",
  {
    variants: {
      variant: {
        primary: "bg-primary text-white",
        secondary: "bg-white text-primary border-2 border-primary",
        tertiary: "bg-gray text-black",
      },
      size: {
        small: "px-10 py-2",
        large: "px-[93px] py-3",
      },
    },
    defaultVariants: {
      size: "large",
      variant: "primary",
    },
  }
);

const iconVariant = cva("", {
  variants: {
    variant: {
      primary: "fa-regular fa-cart-shopping text-white",
      secondary: "fa-regular fa-cart-shopping text-primary",
      tertiary: "fa-regular fa-cart-shopping text-black",
    },
  },
});

const Button: FC<ButtonProps> = ({
  children,
  className,
  variant,
  size,
  loading,
  ...buttonProps
}) => {
  return (
    <button
      disabled={loading}
      className={cn(buttonVariant({variant, size, className}))}
      {...buttonProps}
    >
      {loading ? (
        <LoadingSpinner variant="primary" />
      ) : (
        <>
          <span>{children}</span>
          {size === "large" && (
            <i className={cn(iconVariant({variant, className}))}></i>
          )}
        </>
      )}
    </button>
  );
};

export default Button;
export {buttonVariant, iconVariant};
