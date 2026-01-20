"use client";

import { Form, Input } from "@heroui/react";
import Button from "@/components/UI/button/Button";
import Image from "next/image";
import advatageList from "@/data/advantageList";

const FormSection = () => {
  return (
    <section className="form-section relative text-main-white pt-16 pr-8 pb-16 pl-8">
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
        <Form className="gap-4">
          <Input
            type="tel"
            name="number"
            label="here is your phone"
            errorMessage="number is not valid"
          />
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </Form>
        <ul className="advantage-list flex gap-4 justify-between">
          {advatageList.map((item, index) => (
            <li key={index}>{item.text}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FormSection;
