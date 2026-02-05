import AsideCard from "@/components/base/asideCard/AsideCard";
import Image from "next/image";

export default async function InnerLayout({ children, params }) {
  const { locale } = await params;
  return (
    <body>
      <section className="main__section relative w-full h-dvh">
        <Image
          src="/images/main.webp"
          fill
          alt="hero-image"
          className="-z-20 object-cover"
        />
        <div className="absolute top-0 left-0 -z-10 inset-0 content-[''] bg-secondary/50" />
        <h2 className="flex justify-center items-center h-full text-white">
          Работа со строительчтвом
        </h2>
      </section>

      <div className="grid grid-cols-4">
        <AsideCard />
        <main className="col-span-3">{children}</main>
      </div>
    </body>
  );
}
