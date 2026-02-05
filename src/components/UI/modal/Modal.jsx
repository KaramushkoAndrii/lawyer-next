"use client";

import {
  Modal as HeroModal,
  ModalContent,
  ModalBody,
  ModalFooter,
  Input,
  Textarea,
} from "@heroui/react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import Button from "../button/Button";
import ContactsList from "@/data/contacts";
import Link from "next/link";

import { useModalStore } from "@/store/useModalStore";

const Modal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onChange",
  });
  const onSubmit = (data) => console.log(data);
  const { isOpen, onOpenChange } = useModalStore();

  const handlerClose = () => {
    reset();
  };
  return (
    <HeroModal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      backdrop="blur"
      classNames={{
        wrapper: "w-full p-6 overflow-visible",
        closeButton: "z-50 text-white hover:bg-white/20 right-4 top-4",
        backdrop: "bg-primary/30 backdrop-blur-md",
        base: "mx-4 rounded-2xl",
      }}
      size="xl"
      className="hero_modal overflow-visible m-10"
      placement="top-center"
      onClose={handlerClose}
      scrollBehavior="outside"
    >
      <ModalContent className="p-0 overflow-hidden my-0">
        <div className="modal__header relative aspect-2/1 flex flex-col justify-center">
          <Image
            src={"/images/main.webp"}
            alt="modal image"
            fill
            className="object-cover"
          />
          <h2 className="relative z-50 text-main-white text-center">
            З клієнтами на звязку 24/7
          </h2>
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <ModalBody>
          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Textarea
              label="description"
              placeholder="enter your question"
              {...register("message")}
            />
            <span className="flex flex-col gap-4 justify-center items-center lg:flex-row">
              <Input
                label="your phone"
                placeholder="0979863778"
                type="tel"
                {...register("tel", {
                  required: true,
                  pattern: {
                    value:
                      /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
                    message: "Номер не коректный",
                  },
                })}
                isInvalid={!!errors.tel}
                errorMessage={errors.tel?.message}
              />
              <Button type="submit" className="w-full">
                click
              </Button>
            </span>
          </form>
        </ModalBody>
        <ModalFooter className="flex flex-col justify-between lg:flex-row">
          <Link
            href={`mailto:${ContactsList[0].url}`}
            className="flex flex-col"
          >
            <span className="text-primary">{ContactsList[0].name}</span>
            <span>{ContactsList[0].url}</span>
          </Link>
          <Link href={`tel:${ContactsList[1].url}`} className="flex flex-col">
            <span className="text-primary">{ContactsList[1].name}</span>
            <span>{ContactsList[1].url}</span>{" "}
          </Link>
        </ModalFooter>
      </ModalContent>
    </HeroModal>
  );
};

export default Modal;
