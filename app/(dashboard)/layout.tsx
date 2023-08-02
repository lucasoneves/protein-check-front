import "../assets/reset.css";
import "../assets/globals.css";
import "../assets/pallete.css";

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
