import Container from "@/components/base/container/Container";
import { Link } from "@/i18n/routing";
import Heading from "@/components/UI/heading/Heading";
import Image from "next/image";

export default function NotFound() {
  return (
    <section className="not-found relative h-dvh">
      <Image src="/images/not-found.webp" alt="not-found-page" fill />
      <Container>
        <div className="relative flex flex-col justify-center h-dvh gap-4 flex-start max-w-[50%]">
          <Heading level="h1" className="text-7xl">
            404
          </Heading>
          <Heading level="h2">Здається данна сторінка не існує</Heading>
          <Link
            href="/"
            className="text-center text-main-white rounded-main px-4 py-2 bg-primary w-[50%] transition-all duration-300 hover:scale-105"
          >
            На головну
          </Link>
        </div>
      </Container>
    </section>
  );
}
