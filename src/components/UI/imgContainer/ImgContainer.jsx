import Image from "next/image";

const ImgContainer = ({ src, alt, width, className = "" }) => {
  return (
    <div
      className={`img-container relative ${width ? width : "w-[75%]"} aspect-video rounded-main overflow-hidden ${className} mx-auto`}
    >
      <Image src={src} alt={alt} fill className="object-cover" />
    </div>
  );
};

export default ImgContainer;
