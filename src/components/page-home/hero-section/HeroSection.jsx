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

      <div className="absolute inset-0 bg-black/50 -z-10" />
      <div className="hero-section__content">
        <h1 className="hero-section__title">{title}</h1>
        <p className="hero-section__description">{description}</p>
      </div>
      <Button className="bg-emerald-900">Hello</Button>
    </section>
  );
};

export default HeroSection;
