"use client";

import { useState } from "react";
import Button from "@/components/UI/button/Button";
import ModalButton from "@/components/UI/modalButton/ModalButton";
import WelcomeImg from "./WelcomeImg";
import WelcomeVideo from "./WelcomeVideo";

const WelcomeClient = ({ children, btnText }) => {
  const [viewVideo, setViewVideo] = useState(false);

  const handleMediaChanger = () => {
    setViewVideo((state) => !state);
  };

  const media = viewVideo ? (
    <WelcomeVideo params="controls=1" />
  ) : (
    <WelcomeImg />
  );

  return (
    <section className="welcome grid mr-auto ml-auto pt-16 pb-16 gap-2 justify-center items-center lg:grid-cols-2 lg:items-stretch">
      <div className="welcome__info flex flex-col gap-8 pb-6 lg:gap-12 xl:gap-4">
        {children}
        <div className="welcome__button-group w-full flex flex-col gap-4 items-center lg:items-start">
          <ModalButton className={`lg:max-w-full`}>{btnText}</ModalButton>
          <Button className={`lg:max-w-full`} onPress={handleMediaChanger}>
            {viewVideo ? "Назад" : "Дивитися відео"}
          </Button>
        </div>
      </div>
      <div className="welcome__slogan relative align-top">{media}</div>
    </section>
  );
};

export default WelcomeClient;
