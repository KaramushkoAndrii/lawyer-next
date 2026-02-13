import ServicesList from "./ServicesList";
import ModalButton from "@/components/UI/modalButton/ModalButton";

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

  return (
    <section className="services container m-auto pb-16 pt-16">
      <h2 className="text-2xl"> Основні сервіси</h2>
      <ServicesList data={d} />
      <div className="services__request flex flex-col text-center gap-4 items-center justify-center lg:flex-row lg:text-start">
        <p className="services__text">
          Не знайшли те, що шукали? Всі проблеми в кількох пунктах не описати,
          натисніть нижче та уточнюйте інформацію виключно з Вашого питання.
        </p>
        <ModalButton className={`lg:max-w-full`}>Text for button</ModalButton>
      </div>
    </section>
  );
};

export default ServicesSection;
