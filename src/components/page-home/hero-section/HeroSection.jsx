import Image from "next/image";
import HeroButtonsGroup from "./HeroButtonsGroup";
import Heading from "@/components/UI/heading/Heading";

const HeroSection = ({ data }) => {
  if (!data) return null;

  const { title, description, alt, cover } = data;

  return (
    <section className={`hero-section relative min-w-screen min-h-screen`}>
      <Image
        src={cover.url}
        alt={alt || "main-foto-lawyer-ryasnyi"}
        fill
        priority
        className="object-cover -z-10"
      />

      <div className="absolute inset-0 bg-secondary/70 -z-10" />
      <div className="hero-section__content ml-6 mr-6 flex flex-col justify-evenly items-center h-dvh text-center text-white">
        <div className="hero-section__content--content flex flex-col gap-8 mb-10 px-8">
          <Heading level="h1" align="center" className="text-4xl">
            {title}
          </Heading>

          <Heading level="h2" align="center">
            {description}
          </Heading>
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
