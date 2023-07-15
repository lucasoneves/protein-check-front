import '../assets/globals.css';

export default function AuthRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h2 className="logo">protein check</h2>
      {children}
    </>
  );
}
