"use client";

import {
  Modal as HeroModal,
  ModalContent,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Input,
  Textarea,
} from "@heroui/react";
import Image from "next/image";
import Button from "../button/Button";

import { useModalStore } from "@/store/useModalStore";

const Modal = () => {
  const { isOpen, onOpenChange } = useModalStore();
  return (
    <HeroModal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      backdrop="blur"
      // className="m-0"
      classNames={{
        closeButton: "z-50 text-white hover:bg-white/20 right-4 top-4",
      }}
      className="my-0"
      size="xl"
    >
      <ModalContent className="p-0 overflow-hidden my-0">
        <div className="modal__header relative aspect-2/1 flex flex-col justify-center">
          <Image src={"/images/main.webp"} alt="modal image" fill />
          <h2 className="relative z-50 text-main-white text-center">
            З клієнтами на звязку 24/7
          </h2>
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <ModalBody>
          <Textarea label="description" placeholder="enter your question" />
          <span className="flex flex-row gap-4 justify-center items-center">
            <Input label="your phone" placeholder="0979863778" />
            <Button>click</Button>
          </span>
        </ModalBody>
        <ModalFooter className="flex justify-around">
          <div className="flex flex-col">
            <span>email</span>
            <span>karamushko1997@gmail.com</span>
          </div>
          <div className="flex flex-col">
            <span>number of phone</span>
            <span>0979863778</span>
          </div>
        </ModalFooter>
      </ModalContent>
    </HeroModal>
  );
};

export default Modal;
