import ServicesClient from "./ServicesClient";

import ServicesList from "./ServicesList";

const ServicesSection = () => {
  const d = [
    { href: "/build", title: "Нерухомість та будівництво" },
    { href: "/family", title: "Сімейні справи" },
    { href: "/military", title: "Військове право" },
    { href: "/lawyer", title: "Послуги адвоката" },
    { href: "/duty", title: "Повернення боргів" },
    { href: "/protection", title: "Юридичний захист боржників" },
    { href: "/worker", title: "Трудове право" },
    { href: "/law", title: "Адміністративне право" },
    { href: "/violation", title: "Справи про адміністративне правопорушення" },
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
