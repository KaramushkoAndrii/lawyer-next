"use client";

import { Button as HeroButton } from "@heroui/react";
import styles from "./button.module.css";

const Button = ({
  children,
  className,
  type = "button",
  size = "sm",
  variant = "shadow",
  ...props
}) => {
  return (
    <HeroButton
      color="primary"
      radius="sm"
      variant={variant}
      type={type}
      {...props}
      className={`${styles.button_main} text-main-white  h-10 w-[75%] md:h-12 lg:h-13 lg:max-w-40 ${className}`}
      size={size}
    >
      {children}
    </HeroButton>
  );
};

export default Button;
