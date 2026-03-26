import { getData } from "@/lib/getData";
import { getTranslations } from "next-intl/server";
import HeroSection from "@/components/page-home/hero-section/HeroSection";
import WelcomeSection from "@/components/page-home/welcome-section/WelcomeSection";
import ServicesSection from "@/components/page-home/services-section/ServicesSection";
import Container from "@/components/base/container/Container";

export const metadata = {
  title: "Юриличний сайт Владислава Рясного",
  description: "Юридична допомога онлайн/офлайн",
};

export default async function Home({ params }) {
  const { locale } = await params;

  const heroSectionData = await getData("/hero-section", {
    populate: "cover",
  });

  const welcomeSectionData = await getData("/welcome-section", {
    populate: ["description", "image"],
  });

  const servicesSectionData = await getData("/service-section");

  const t = await getTranslations("HomePage");
  return (
    <>
      <HeroSection data={heroSectionData.data} />
      <Container>
        <WelcomeSection data={welcomeSectionData.data} />
        <ServicesSection data={servicesSectionData.data} />
      </Container>
    </>
  );
}
