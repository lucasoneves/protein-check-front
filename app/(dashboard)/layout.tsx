export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <header>main header</header>
      {children}
      <header>main header</header>
    </main>
  );
}
