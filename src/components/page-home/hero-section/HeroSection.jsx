"use client";

import Image from "next/image";
import { Button } from "@heroui/react";

const HeroSection = ({ data }) => {
  const { title, description, cover } = data;
  return (
    <section className={`hero-section relative min-w-screen min-h-screen`}>
      {cover.url && (
        <Image
          src={cover.url}
          alt="background"
          fill
          priority
          className="object-cover -z-10"
        />
      )}

      <div className="absolute inset-0 bg-black/70 -z-10" />
      <div className="hero-section__content flex flex-col justify-center items-center h-dvh text-center text-white">
        <div className="hero-section__content--content mb-10">
          <h1 className="hero-section__title">{title}</h1>
          <p className="hero-section__description">{description}</p>
        </div>
        <div className="hero-section__button-group flex flex-col gap-4 w-full items-center">
          <Button className="bg-emerald-900 w-[75%] ">
            Обговорити завдання
          </Button>
          <Button className="bg-primary w-[75%]">Дізнатися більше</Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
