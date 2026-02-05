"use client";

import Image from "next/image";
import Button from "@/components/UI/button/Button";
import { useState } from "react";
import { YouTubeEmbed } from "@next/third-parties/google";

import { useModalStore } from "@/store/useModalStore";
const WelcomeSection = ({ data }) => {
  const { openModal } = useModalStore();
  const [viewVideo, setViewVideo] = useState(false);

  const openHandler = () => {
    openModal();
  };

  const handleMediaChanger = () => {
    setViewVideo((state) => !state);
  };

  const imgInfo = () => {
    return (
      <div className="welcome__img relative w-full aspect-video rounded-main lg:h-full lg:aspect-square xl:aspect-video">
        <Image
          alt="description"
          fill
          src={"/images/MainFoto.webp"}
          className="object-cover rounded-main"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        <div className="absolute -bottom-15 bg-primary rounded-main w-full lg:w-max lg:-bottom-22 lg:-left-12">
          <p className="flex flex-col text-center p-slogan items-center gap-2 lg:gap-4">
            Amat Victoria Curam
            <span className="relative before:absolute before:content-[''] before:h-px before:bg-main-white before:w-full before:-top-1 lg:before:-top-2">
              Перемога любить підготовку
            </span>
          </p>
        </div>
      </div>
    );
  };

  const videoInfo = () => {
    return (
      <div className="rounded-main overflow-hidden">
        <YouTubeEmbed videoid="SwmRyntv9sM" params="controls=1" />
      </div>
    );
  };

  const media = viewVideo ? videoInfo() : imgInfo();
  return (
    <section className="welcome grid mr-auto ml-auto pt-16 pb-16 gap-2 justify-center items-center lg:grid-cols-2 px-8 lg:items-stretch">
      <div className="welcome__info flex flex-col gap-8 pb-6 lg:gap-12 xl:gap-4">
        <h2 className="welcome__title text-6xl">Рясный Владислав Денисович</h2>
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
        <div className="welcome__button-group w-full flex flex-col gap-4 items-center lg:items-start">
          <Button className={`lg:max-w-full`} onPress={openHandler}>
            отримати консультацію
          </Button>
          <Button className={`lg:max-w-full`} onPress={handleMediaChanger}>
            {viewVideo ? "Назад" : "Дивитися відео"}
          </Button>
        </div>
      </div>
      <div className="welcome__slogan relative align-top">{media}</div>
    </section>
  );
};

export default WelcomeSection;
