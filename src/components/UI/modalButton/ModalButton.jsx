"use client";

import { Button } from "@heroui/react";
import { useModalStore } from "@/store/useModalStore";

const ModalButton = ({
  children,
  className,
  type = "button",
  size = "sm",
  variant = "shadow",
  ...props
}) => {
  const { openModal } = useModalStore();

  const openHandler = () => {
    openModal();
  };
  return (
    <Button
      onPress={openHandler}
      color="primary"
      radius="sm"
      variant={variant}
      type={type}
      {...props}
      className={`text-main-white flex h-10 w-[75%] mx-auto md:h-12 lg:h-13 lg:max-w-40 ${className} hover:scale-button`}
      size={size}
    >
      {children}
    </Button>
  );
};

export default ModalButton;
