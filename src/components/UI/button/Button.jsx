"use client";

import { Button as HeroButton } from "@heroui/react";
import styles from "./button.module.css";

const Button = ({ children, className, ...props }) => {
  return (
    <HeroButton
      color="primary"
      radius="sm"
      variant="shadow"
      {...props}
      className={`${styles.button_main} text-main-white     w-[75%] lg:max-w-40 ${className}`}
    >
      {children}
    </HeroButton>
  );
};

export default Button;
