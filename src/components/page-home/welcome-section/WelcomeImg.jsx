import Image from "next/image";

const WelcomeImg = () => {
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
          <span className="relative text-span before:absolute before:content-[''] before:h-px before:bg-main-white before:w-full before:-top-1 lg:before:-top-2">
            Перемога любить підготовку
          </span>
        </p>
      </div>
    </div>
  );
};

export default WelcomeImg;
