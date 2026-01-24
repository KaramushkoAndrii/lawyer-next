"use client";

import Image from "next/image";
import Button from "@/components/UI/button/Button";
const WelcomeSection = ({ data }) => {
  return (
    <section className="welcome grid mr-auto ml-auto pt-16 pb-16 gap-2 justify-center items-center lg:grid-cols-2">
      <div className="welcome__info flex flex-col gap-8 pb-6">
        <h2 className="welcome__title text-5xl">Рясный Владислав</h2>
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
          <Button className={`lg:max-w-full`}>отримати консультацію</Button>
          <Button className={`lg:max-w-full`}>Дивитися відео</Button>
        </div>
      </div>
      <div className="welcome__slogan relative">
        <div className="welcome__img relative w-full aspect-video rounded-main lg:h-full">
          <Image
            alt="description"
            fill
            src={"/images/MainFoto.webp"}
            className="object-cover rounded-main"
          />
        </div>
        <div className="absolute w-full bg-amber-950 grid text-center gap-8 p-[3vw] -bottom-[95px] rounded-main text-main-white">
          <p>Amat Victoria Curam</p>
          <span className=" text-span before:content-[''] before:bg-main-white before:bottom-16 before:h-px before:w-full before:left-0 before:absolute">
            Перемога любить підготовку
          </span>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
