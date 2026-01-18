import AsideCard from "@/components/base/asideCard/AsideCard";

export default async function InnerLayout({ children, params }) {
  const { locale } = await params;
  return (
    <div className="grid grid-cols-4">
      <AsideCard />
      <main className="col-span-3">{children}</main>
    </div>
  );
}
