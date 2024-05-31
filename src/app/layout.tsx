import { RecaptchaProvider } from '@/providers/recaptcha-context';
import './global.css'
import { Roboto } from "next/font/google";

const roboto = Roboto({ weight: ["300", "400", "700"], subsets: ["latin"] });

export const metadata = {
  metadataBase: 'https://aixb.renci.org',
  title: "AIxB",
  description:
    "AIxB is building a collaborative ecosystem for innovation in Artificial Intelligence and the Biological Science.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <RecaptchaProvider publicKey={process.env.NEXT_PUBLIC_RECAPTCHA_KEY}>
        <body className={roboto.className}>{children}</body>
      </RecaptchaProvider>
    </html>
  );
}
