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
  // const first = await getData("/hero-section", {
  //   populate: "cover",
  // });

  const t = await getTranslations("HomePage");
  return (
    <>
      <HeroSection />
      <Container>
        <WelcomeSection />
        <ServicesSection />
      </Container>
    </>
  );
}
