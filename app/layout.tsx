import { Container } from "@/components/Container";
// import styles from '@/app/(auth)/Auth.module.scss';
import { Providers } from "./store/provider";

export default function AuthRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Container containerClasses="flex items-center justify-center flex-column ">
            {children}
          </Container>
        </Providers>
      </body>
    </html>
  );
}
