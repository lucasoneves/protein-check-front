import { Container } from '@/components/Container';
import styles from '@/app/(auth)/Auth.module.scss';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Container>
          <div className={styles['wrapper']}>
            {children}
          </div>
        </Container>
      </body>
    </html>
  );
}
