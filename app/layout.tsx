import { Container } from '@/components/Container';
// import styles from '@/app/(auth)/Auth.module.scss';

export default function AuthRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Container>
          {children}
        </Container>
      </body>
    </html>
  );
}
