import { getData } from "@/lib/getData";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import HeroSection from "@/components/page-home/hero-section/HeroSection";
import Header from "@/components/base/header/Header";

export default async function Home({ params }) {
  const { locale } = await params;
  const first = await getData("/hero-section", {
    populate: "cover",
  });

  const t = await getTranslations("HomePage");
  return (
    <>
      <Header />
      <main className="">
        <HeroSection data={first.data} />
      </main>
    </>
  );
}
