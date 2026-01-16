"use client";

import Image from "next/image";
import { Button } from "@heroui/react";
const WelcomeSection = ({ data }) => {
  return (
    <section className="welcome grid container mr-auto ml-auto gap-2 justify-center items-center lg:grid-cols-2">
      <div className="welcome__info flex flex-col gap-8">
        <h2 className="welcome__title">Рясный Владислав</h2>
        <p className="welcome__description">
          Адвокат, який спеціалізується на цивільному, сімейному та
          адміністративному праві.
        </p>
        <p className="welcome__description">
          Мій професійний шлях почався на посаді юриста в юридичній компанії, де
          я вів цивільні, сімейні справи та справи про адміністративні
          правопорушення.
        </p>
        <p className="welcome__description">
          Зараз я представляю інтереси клієнтів у цивільних, сімейних,
          адміністративних справах, справах, що виникають з адміністративних
          правопорушень, та кримінальних справах.
        </p>
        <div className="welcome__button-group w-full flex flex-col gap-4 items-center">
          <Button className="w-[75%]">отримати консультацію</Button>
          <Button className="w-[75%]"> Дивитися відео</Button>
        </div>
      </div>
      <div className="welcome__img relative w-full aspect-video rounded-3xl lg:h-full">
        <Image
          alt="description"
          fill
          src={"/MainFoto.webp"}
          className="object-cover rounded-3xl"
        />
      </div>
    </section>
  );
};

export default WelcomeSection;
