"use client";

import Button from "@/components/UI/button/Button";
import { useModalStore } from "@/store/useModalStore";

const HeroButtonsGroup = ({ textModal, textMore }) => {
  const { openModal } = useModalStore();

  const openHandler = () => {
    openModal();
  };
  return (
    <div className="hero-section__button-group flex flex-col gap-4 w-full items-center justify-center lg:flex-row">
      <Button onPress={openHandler}>{textModal}</Button>
      <Button variant="ghost">{textMore}</Button>
    </div>
  );
};

export default HeroButtonsGroup;
