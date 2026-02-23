import MainSection from "@/components/UI/mainSection/MainSection";
import PageWithAside from "@/components/UI/pageWithAside/PageWithAside";
import ImgContainer from "@/components/UI/imgContainer/ImgContainer";
import ServicesList from "@/components/UI/servicesList/ServicesList";
// import ServicesData from "@/data/servicesData";
import Heading from "@/components/UI/heading/Heading";
import { FamilyServicesData } from "@/data/servicesData";

export default function Lawyer() {
  return (
    <>
      <MainSection />
      <PageWithAside>
        <Heading>Послуги адвоката</Heading>
        <p>
          Адвокатська консультація та правовий захист у суді – одна з
          найчастіших причин звернення людей до юристів. Професійна допомога
          адвоката може бути необхідною як у цивільних, так і в кримінальних
          справах. Фахівець в галузі права здатен не лише правильно підготувати
          процесуальні документи, але й забезпечити ухвалення судового рішення
          на користь клієнта відповідно до закону.
        </p>
        <p>
          Більш того, без адвоката не обходиться як відповідач, так і позивач
        </p>
        <p>Головне завдання адвоката – відстояти права та інтереси клієнта.</p>
        <ImgContainer src="/images/main.webp" alt="lawyer" />
        <Heading level="h3" align="start">
          На підставі чого співпрацювати з адвокатом?
        </Heading>
        <p>
          Адвокат Рясний Владислав Денисович, здійснює співпрацю з клієнтами на
          підставі договору про надання правової (правничої) допомоги. Такий
          документ передбачає умови співпраці з клієнтом, взаємні права та
          обов`язки (включаючи обов`язки адвоката перед клієнтом).
        </p>
        <Heading level="h3" align="start">
          Чи можна співпрацювати з адвокатом дистанційно?
        </Heading>
        <p>
          За допомогою сучасних технологій (телефонного звязку, мессенджерів,
          онлайн-програм, електронної пошти, тощо) адвокат має можливість
          представляти інтереси клієнта по всій території України.
        </p>
        <p>
          Більше того, суди рекомендують використовувати відеоконференцзвязок у
          судовому процесі.
        </p>
        <p>
          Крім цього, документообіг здійснюється як за допомогою електронної
          пошти так і за допомогою будь-якого зручного мессенджеру, з метою
          оперативності надання юридичних послуг.
        </p>
        <p>
          Крім цього, поставити питання адвокату можна в чаті, також можна
          записатись на безкоштовну юридичну консультацію за допомогою форми
          зворотного зв’язку на сайті.
        </p>
        <Heading>Адвокат надає наступні послуги</Heading>
        <ImgContainer src="/images/main.webp" alt="services" />
        <ServicesList
          title="Категорія сімейних справ:"
          listData={FamilyServicesData}
          keyGroup="FamilyList"
          routePath="/family"
        />
        <ImgContainer src="/images/main.webp" alt="services" />
        {/* <ServicesList
          title="Категорія справ які пов`язані із борговими зобов'язаннями:"
          listData={ServicesData}
        /> */}
        <ImgContainer src="/images/main.webp" alt="services" />
        {/* <ServicesList
          title="Категорія адміністративних справ:"
          listData={ServicesData}
          footer="Вказаний вище перелік послуг не є вичерпним"
        /> */}
      </PageWithAside>
    </>
  );
}
