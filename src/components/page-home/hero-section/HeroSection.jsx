"use client";

import Image from "next/image";
import Button from "@/components/UI/button/Button";
import { useModalStore } from "@/store/useModalStore";

const HeroSection = ({ data }) => {
  // const { title, description, cover } = data;

  const { openModal } = useModalStore();
  return (
    <section className={`hero-section relative min-w-screen min-h-screen`}>
      <Image
        src={"/images/main.webp"}
        alt="background"
        fill
        priority
        className="object-cover -z-10"
      />

      <div className="absolute inset-0 bg-black/70 -z-10" />
      <div className="hero-section__content ml-6 mr-6 flex flex-col justify-evenly items-center h-dvh text-center text-white">
        <div className="hero-section__content--content mb-10">
          <h1 className="hero-section__title text-5xl">Владислав Рясний</h1>

          <p className="hero-section__description text-2xl">
            адвокат у сфері цивільного, військового, кримінального,
            адміністративного та сімейного права
          </p>
        </div>
        <div className="hero-section__button-group flex flex-col gap-4 w-full items-center justify-center lg:flex-row">
          <Button>Обговорити завдання</Button>
          <Button>Дізнатись більше</Button>
          <Button onPress={openModal}>mODAL</Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
