"use client";
import Modal from "@/components/UI/modal/Modal";

import { HeroUIProvider } from "@heroui/react";

export function Providers({ children }) {
  return (
    <HeroUIProvider>
      {children}
      <Modal />
    </HeroUIProvider>
  );
}
