import { getData } from "@/lib/getData";
import { getTranslations } from "next-intl/server";
import HeroSection from "@/components/page-home/hero-section/HeroSection";
import WelcomeSection from "@/components/page-home/welcome-section/WelcomeSection";
import ServicesSection from "@/components/page-home/services-section/ServicesSection";

export default async function Home({ params }) {
  const { locale } = await params;
  const first = await getData("/hero-section", {
    populate: "cover",
  });

  const t = await getTranslations("HomePage");
  return (
    <>
      <main className="">
        <HeroSection data={first.data} />
        <WelcomeSection />
        <ServicesSection />
      </main>
    </>
  );
}
