import type { Metadata } from "next";
import "@/styles/main.scss";
import BootstrapClient from "@/components/BootstrapClient";
import Headers from "@/components/Headers";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Daya Dimensi Indonesia",
  description: "Daya Dimensi Indonesia",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Headers />
        <main>{children}</main>
        <Footer />
        <BootstrapClient />
      </body>
    </html>
  );
}
