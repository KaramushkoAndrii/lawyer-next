import RichText from "../richText/RichText";
import ImgContainer from "@/components/UI/imgContainer/ImgContainer";
import ImageAndText from "../imageAndText/ImageAndText";
import ModalButton from "@/components/UI/modalButton/ModalButton";
import Heading from "@/components/UI/heading/Heading";

export default function DynamicZone({ blocks }) {
  if (!blocks) return null;

  return (
    <>
      {blocks.map((block, index) => {
        const uniqueKey = `${block.__component}-${index}+-${block.id}`;

        switch (block.__component) {
          case "dynamic-items.content-page":
            return <RichText key={uniqueKey} content={block.content} />;
          case "dynamic-items.image":
            return (
              <ImgContainer
                key={uniqueKey}
                src={block.image.url || "/images/main.webp"}
                alt={block.alt}
              />
            );
          case "dynamic-items.image-and-text":
            return (
              <ImageAndText
                key={uniqueKey}
                description={block.description}
                position={block.position}
                alt={block.alt}
                image={block.image}
              />
            );
          case "dynamic-items.modal-button":
            return <ModalButton>{block.text}</ModalButton>;
          case "dynamic-items.section-title":
            return <Heading level="h3">{block.title}</Heading>;
          default:
            return null;
        }
      })}
    </>
  );
}
