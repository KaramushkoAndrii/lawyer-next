export default async function InnerLayout({ children, params }) {
  const { locale } = await params;
  return <>{children}</>;
}
