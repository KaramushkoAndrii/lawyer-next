import WelcomeClient from "./WelcomeClient";
import DynamicListItems from "@/components/UI/dynamicListItems/DynamicListItems";

const WelcomeSection = ({ data }) => {
  if (!data) return null;

  const { title, description } = data;

  return (
    <WelcomeClient btnText={"консультация"} data={data}>
      <h2 className="welcome__title text-6xl">{title}</h2>
      <DynamicListItems typeItem="p" list={description} />
    </WelcomeClient>
  );
};

export default WelcomeSection;
