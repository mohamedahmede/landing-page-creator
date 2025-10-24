import React from 'react';

type ButtonProps = {
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "danger" | "success" | "warning" | "outline" | "ghost";
    size?: "small" | "medium" | "large";
    fullWidth?: boolean;
    disabled?: boolean;
    onClick?: () => void;
};
declare const CustomButton: React.FC<ButtonProps>;

export { CustomButton };
