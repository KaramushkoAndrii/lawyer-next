import ServicesList from "./ServicesList";
import ModalButton from "@/components/UI/modalButton/ModalButton";
import Heading from "@/components/UI/heading/Heading";

const ServicesSection = ({ data, list }) => {
  const { title, description } = data || {};

  return (
    <section id="services" className="services container m-auto pt-16">
      <Heading align="start">{title}</Heading>
      <ServicesList data={list} />
      <div className="services__request flex flex-col text-center gap-4 items-center justify-center lg:flex-row lg:text-start">
        <p className="services__text">{description}</p>
        <ModalButton className={`lg:max-w-full`}>Text for button</ModalButton>
      </div>
    </section>
  );
};

export default ServicesSection;
