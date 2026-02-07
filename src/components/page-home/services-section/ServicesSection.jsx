import ServicesClient from "./ServicesClient";

import ServicesList from "./ServicesList";

const ServicesSection = () => {
  const d = [
    { href: "/build", title: "Нерухомість та будівництво" },
    { href: "/", title: "Сімейні справи" },
    { href: "/", title: "Військове право" },
    { href: "/", title: "Послуги адвоката" },
    { href: "/", title: "Повернення боргів" },
    { href: "/", title: "Юридичний захист боржників" },
    { href: "/", title: "Трудове право" },
    { href: "/", title: "Адміністративне право" },
    { href: "/", title: "Справи про адміністративне правопорушення" },
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
