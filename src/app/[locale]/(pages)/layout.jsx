import AsideCard from "@/components/base/asideCard/AsideCard";
import Container from "@/components/base/container/Container";
import Image from "next/image";

export default async function InnerLayout({ children, params }) {
  const { locale } = await params;
  return (
    <>
      <section className="main__section relative w-full h-dvh">
        <Image
          src="/images/main.webp"
          fill
          alt="hero-image"
          className="-z-20 object-cover"
        />
        <div className="absolute top-0 left-0 -z-10 inset-0 content-[''] bg-secondary/70" />
        <h2 className="flex justify-center items-center h-full text-white">
          Работа со строительчтвом
        </h2>
      </section>

      <Container>
        <div className="grid lg:grid-cols-4 gap-16">
          <AsideCard />
          <main className="lg:col-span-3">{children}</main>
        </div>
      </Container>
    </>
  );
}
