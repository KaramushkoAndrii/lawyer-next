import MainSection from "@/components/UI/mainSection/MainSection";
import PageWithAside from "@/components/UI/pageWithAside/PageWithAside";
import { getServicesBySlug } from "@/data/getServicesData";
import Heading from "@/components/UI/heading/Heading";
import { notFound } from "next/navigation";

export default async function BuildServicePage({ params }) {
  const { locale, slug } = await params;

  const services = await getServicesBySlug("build", slug, locale);

  if (!services) return notFound();

  const { title, description } = services;

  return (
    <>
      <MainSection />
      <PageWithAside>
        <Heading>{title || ""}</Heading>
        <p>{description || ""}</p>
        <p>текущая локаль: {locale}</p>
        <p>Текущий слаг: {slug}</p>
      </PageWithAside>
    </>
  );
}
