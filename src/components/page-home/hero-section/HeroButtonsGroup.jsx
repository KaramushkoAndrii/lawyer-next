import Button from "@/components/UI/button/Button";
import ModalButton from "@/components/UI/modalButton/ModalButton";

const HeroButtonsGroup = ({ textModal, textMore }) => {
  return (
    <div className="hero-section__button-group flex flex-col gap-4 w-full items-center justify-center lg:flex-row">
      <ModalButton>{textModal}</ModalButton>
      <Button variant="ghost">{textMore}</Button>
    </div>
  );
};

export default HeroButtonsGroup;
