"use client";

import { Form, Input } from "@heroui/react";
import Button from "@/components/UI/button/Button";
import Image from "next/image";
import advatageList from "@/data/advantageList";
import { useForm } from "react-hook-form";

const FormSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data) => console.log(data);
  return (
    <section
      id="connect"
      className="form-section relative text-main-white pt-16 pr-8 pb-16 pl-8"
    >
      <Image
        fill
        src="/images/main.webp"
        alt="background for form"
        className="object-cover -z-2"
      />
      <div className="form-section__background inset-0 bg-black/70 absolute -z-1"></div>
      <div className="form-section__content flex flex-col gap-8">
        <div className="form-section__header relative z-1 text-center">
          <h3>Адвокат</h3>
          <h3>Владислав Рясний</h3>
          <p>Залиште заявку на юридичну допомогу прямо зараз</p>
        </div>
        <Form
          className="gap-4 lg:flex-row lg:justify-center lg:items-center"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            type="tel"
            name="number"
            label="here is your phone"
            className="lg:max-w-[30dvw]"
            classNames={{ input: "text-form" }}
            {...register("tel", {
              pattern: {
                value: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
                message: "Номер не коректный",
              },
            })}
            isInvalid={!!errors.tel}
            errorMessage={errors.tel?.message}
          />
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </Form>
        <ul className="advantage-list flex flex-col gap-4 justify-center lg:flex-row lg:gap-12 xl:gap24">
          {advatageList.map((item, index) => (
            <li key={index} className="flex gap-1 justify-center items-center">
              <i className="text-primary">{item.icon}</i>
              {item.text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FormSection;
