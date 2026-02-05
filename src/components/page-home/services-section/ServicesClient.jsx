"use client";

import Button from "@/components/UI/button/Button";
import { useModalStore } from "@/store/useModalStore";

const ServicesClient = ({ children, description }) => {
  const { openModal } = useModalStore();

  const openHandler = () => {
    openModal();
  };

  return (
    <section className="services container m-auto pb-16 pt-16">
      {children}

      <div className="services__request flex flex-col text-center gap-4 items-center justify-center lg:flex-row lg:text-start">
        {description}
        <Button className={`lg:max-w-full`} onPress={openHandler}>
          Текст для кнопки
        </Button>
      </div>
    </section>
  );
};

export default ServicesClient;
