"use client";

import Image from "next/image";
import { Button } from "@heroui/react";
const WelcomeSection = ({ data }) => {
  return (
    <section className="welcome grid grid-cols-2 container mr-auto ml-auto gap-2 justify-center items-center">
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
        <Button className="w-[75%]">отримати консультацію</Button>
        <Button className="w-[75%]"> Дивитися відео</Button>
      </div>
      <div className="welcome__img">
        <Image
          alt="description"
          width={100}
          height={100}
          src={"@/public/vercel.svg"}
        />
      </div>
    </section>
  );
};

export default WelcomeSection;
