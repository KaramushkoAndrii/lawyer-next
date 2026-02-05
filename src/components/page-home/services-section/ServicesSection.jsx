import ServicesClient from "./ServicesClient";

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

  const servicesText = (
    <p className="services__text">
      Не знайшли те, що шукали? Всі проблеми в кількох пунктах не описати,
      натисніть нижче та уточнюйте інформацію виключно з Вашого питання.
    </p>
  );

  return (
    <ServicesClient description={servicesText}>
      <h2 className="text-2xl"> Основні сервіси</h2>
      <ServicesList data={d} />
    </ServicesClient>
  );
};

export default ServicesSection;
