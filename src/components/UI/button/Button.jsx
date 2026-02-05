"use client";

import { Button as HeroButton } from "@heroui/react";
import styles from "./button.module.css";

const Button = ({
  children,
  className,
  type = "button",
  size = "sm",
  ...props
}) => {
  return (
    <HeroButton
      color="primary"
      radius="sm"
      variant="shadow"
      type={type}
      {...props}
      className={`${styles.button_main} text-main-white     w-[75%] lg:max-w-40 ${className}`}
      size={size}
    >
      {children}
    </HeroButton>
  );
};

export default Button;
