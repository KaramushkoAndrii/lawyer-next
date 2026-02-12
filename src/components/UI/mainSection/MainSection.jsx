import Image from "next/image";

const MainSection = ({
  alt = "картитнка",
  src = "/images/main.webp",
  title = "Заголовок",
}) => {
  return (
    <div className="relative w-full h-dvh">
      <Image alt={alt} src={src} fill className="-z-20 object-cover" />
      <div className="absolute top-0 left-0 -z-10 inset-0 content-[''] bg-secondary/70"></div>
      <h2 className="flex justify-center items-center h-full text-white custom-h1">
        {title}
      </h2>
    </div>
  );
};

export default MainSection;
