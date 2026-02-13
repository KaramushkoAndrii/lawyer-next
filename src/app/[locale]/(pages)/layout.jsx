import AsideCard from "@/components/base/asideCard/AsideCard";
import Container from "@/components/base/container/Container";
import Image from "next/image";

export default async function InnerLayout({ children, params }) {
  const { locale } = await params;
  return <>{children}</>;
}
