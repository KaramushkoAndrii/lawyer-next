import Button from "@/components/UI/button/Button";
import ServicesList from "./ServicesList";

const ServicesSection = () => {
  const d = [
    { href: "/", title: "Заголовок 1" },
    { href: "/", title: "Заголовок 2" },
    { href: "/", title: "Заголовок 3" },
    { href: "/", title: "Заголовок 4" },
    { href: "/", title: "Заголовок 5" },
    { href: "/", title: "Заголовок 6" },
    { href: "/", title: "Заголовок 7" },
  ];
  return (
    <section className="services container m-auto pb-16 pt-16">
      <h2 className="text-2xl"> Основні сервіси</h2>
      <ServicesList data={d} />
      <div className="services__request flex flex-col text-center gap-4 items-center justify-center lg:flex-row lg:text-start">
        <p className="services__text">
          Не знайшли те, що шукали? Всі проблеми в кількох пунктах не описати,
          натисніть нижче та уточнюйте інформацію виключно з Вашого питання.
        </p>
        <Button className={`lg:max-w-full`}>Текст для кнопки</Button>
      </div>
    </section>
  );
};

export default ServicesSection;
