import { RecaptchaProvider } from '@/providers/recaptcha-context';
import './global.css'
import { Roboto } from "next/font/google";

const roboto = Roboto({ weight: ["300", "400", "700"], subsets: ["latin"] });

export const metadata = {
  title: "ROBOKOP",
  description:
    "ROBOKOP is an open-source biomedical knowledge graph that integrates and semantically harmonizes important knowledge sources.",
  openGraph: {
    images: '/opengraph-image.png'
  }
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
