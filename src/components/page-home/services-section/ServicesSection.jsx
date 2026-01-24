"use client";
// import { Button } from "@heroui/react";
import Button from "@/components/UI/button/Button";
import ServicesList from "./ServicesList";

const ServicesSection = () => {
  const d = [
    { href: "/", title: "Заголовок 1" },
    { href: "/", title: "Заголовок 2" },
    { href: "/", title: "Заголовок 3" },
  ];
  return (
    <section className="services container m-auto pb-16 pt-16">
      <h2 className="text-2xl"> Основні сервіси</h2>
      <ServicesList data={d} />
      <div className="services__request flex flex-col text-center gap-4 items-center justify-center">
        <p className="services__text">
          Не знайшли те, що шукали? Всі проблеми в кількох пунктах не описати,
          натисніть нижче та уточнюйте інформацію виключно з Вашого питання.
        </p>
        <Button>Текст для кнопки</Button>
      </div>
    </section>
  );
};

export default ServicesSection;
