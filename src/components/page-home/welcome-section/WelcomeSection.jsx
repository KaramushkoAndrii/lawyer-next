import WelcomeClient from "./WelcomeClient";

const WelcomeSection = ({ data }) => {
  return (
    <WelcomeClient btnText={"консультация"}>
      <h2 className="welcome__title text-6xl">Рясный Владислав Денисович</h2>
      <p className="welcome__description">
        Адвокат, який спеціалізується на цивільному, сімейному та
        адміністративному праві.
      </p>
      <p className="welcome__description">
        Мій професійний шлях почався на посаді юриста в юридичній компанії, де я
        вів цивільні, сімейні справи та справи про адміністративні
        правопорушення.
      </p>
      <p className="welcome__description">
        Зараз я представляю інтереси клієнтів у цивільних, сімейних,
        адміністративних справах, справах, що виникають з адміністративних
        правопорушень, та кримінальних справах.
      </p>
    </WelcomeClient>
  );
};

export default WelcomeSection;
