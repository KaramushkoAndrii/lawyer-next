export default async function InnerLayout({ children, params }) {
  const { locale } = await params;
  return (
    <div>
      <aside>Hello world</aside>
      <main>{children}</main>
    </div>
  );
}
