import { getData } from "@/lib/getData";
import { getTranslations } from "next-intl/server";
import HeroSection from "@/components/page-home/hero-section/HeroSection";

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
      </main>
    </>
  );
}
