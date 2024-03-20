import {ButtonHTMLAttributes} from "react";
import {VariantProps} from "class-variance-authority";
import {buttonVariant, iconVariant} from ".";

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariant>,
    VariantProps<typeof iconVariant> {}
