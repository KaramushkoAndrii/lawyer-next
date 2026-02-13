import Image from "next/image";
import HeroButtonsGroup from "./HeroButtonsGroup";

const HeroSection = ({ data }) => {
  return (
    <section className={`hero-section relative min-w-screen min-h-screen`}>
      <Image
        src={"/images/main.webp"}
        alt="background"
        fill
        priority
        className="object-cover -z-10"
      />

      <div className="absolute inset-0 bg-secondary/70 -z-10" />
      <div className="hero-section__content ml-6 mr-6 flex flex-col justify-evenly items-center h-dvh text-center text-white">
        <div className="hero-section__content--content flex flex-col gap-8 mb-10 px-8">
          <h1 className="hero-section__title text-5xl custom-h1">
            Владислав Рясний
          </h1>

          <p className="hero-section__description text-2xl custom-h1">
            адвокат у сфері цивільного, військового, кримінального,
            адміністративного та сімейного права
          </p>
        </div>
        <HeroButtonsGroup
          textModal={"Открыть модалку"}
          textMore={"Узнать больше"}
        />
      </div>
    </section>
  );
};

export default HeroSection;
