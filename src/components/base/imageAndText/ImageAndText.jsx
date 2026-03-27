import ImgContainer from "@/components/UI/imgContainer/ImgContainer";

export default function ImageAndText({ description, position, alt, image }) {
  if (!description || !alt || !image) return null;

  return (
    <div className={`image-and-text grid grid-cols-2 gap-4`}>
      <ImgContainer
        className={`lg:w-full ${position === "right" ? "order-1" : "order-0"}`}
        src={image.url}
        alt={alt}
      />
      <p>{description}</p>
    </div>
  );
}
