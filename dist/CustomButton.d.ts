import React, { ButtonHTMLAttributes } from "react";
import "../styles/customButton.css";
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: Variant;
    size?: Size;
    shape?: Shape;
    /** If true, skip all default styles and only use className (escape hatch) */
    unstyled?: boolean;
    className?: string;
    text: string;
    url?: string;
    blank?: boolean;
    onClick?: () => void;
}
type Variant = "black" | "white" | "red" | "gray" | "lime" | "transparent-black" | "transparent-white" | "transparent-red" | "transparent-gray" | "transparent-lime";
type Size = "sm" | "md" | "lg";
type Shape = "rounded" | "square";
declare const CustomButton: React.FC<ButtonProps>;
export default CustomButton;
