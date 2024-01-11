import AboutDaya from "@/components/about/daya";
import AboutHero from "@/components/about/hero";
import AboutInfo from "@/components/about/info";
import OurClient from "@/components/about/ourClient";
import AboutReason from "@/components/about/reason";
import { IClient, IHero, IInfo, IReason } from "@/interface";

export default function AboutPage() {
  const heroItems: IHero[] = [
    {
      title: "24+ Years",
      subtitle: "Experience",
    },
    {
      title: "50.000+",
      subtitle: "Executive Clients",
    },
    {
      title: "400+",
      subtitle: "Organization Clients",
    },
  ];

  const reasonItems: IReason[] = [
    {
      title: "Ethical",
      description:
        "We maintain the confidentiality of our clients' data. We uphold our integrity by practicing zero-tolerance policy for bribery.",
      icon: "red-learning",
    },
    {
      title: "Reliable",
      description:
        "We strive to provide solutions that are supported by data and technology.",
      icon: "red-skills",
    },
    {
      title: "Agile",
      description:
        "We listen to our clients deliberately and deliver bespoke solutions to achieve excellent outcome.",
      icon: "red-compassion",
    },
  ];

  const clientItems: IClient[] = [
    {
      image: "astra",
      name: "PT. Astra International Tbk.",
    },
    {
      image: "blibli",
      name: "PT. Global Digital Niaga",
    },
    {
      image: "bri",
      name: "PT. Bank Rakyat Indonesia Tbk.",
    },
    {
      image: "ifg",
      name: "PT. IFG",
    },
    {
      image: "kalbe",
      name: "PT. Kalbe Farma Tbk.",
    },
    {
      image: "kemdikbud",
      name: "Kementerian Pendidikan dan Kebudayaan",
    },
    {
      image: "mandiri",
      name: "PT. Bank Mandiri Tbk.",
    },
    {
      image: "mindid",
      name: "PT. Mindreach Consulting",
    },
    {
      image: "pertamina",
      name: "PT. Pertamina",
    },
    {
      image: "pln",
      name: "PT. Perusahaan Listrik Negara",
    },
  ];

  const infoItems: IInfo[] = [
    {
      title: "Family",
      description: "Introducing the DayaLima Family",
      to: "#",
    },
    {
      title: "Board of Management",
      description: "Meet the Board of Management",
      to: "#",
    },
    {
      title: "Partners",
      description: "Meet our Partners",
      to: "#",
    },
  ];
  return (
    <>
      <AboutHero />
      <AboutDaya heroItems={heroItems} />
      <AboutReason reasonItems={reasonItems} />
      <OurClient clientItems={clientItems} />
      <AboutInfo infoItems={infoItems} />
    </>
  );
}
