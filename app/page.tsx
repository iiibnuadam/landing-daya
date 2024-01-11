"use client";

import Image from "next/image";
import NextIcon from "@/public/icons/Next";
import Hero from "@/components/home/hero";
import { IExpertise, IHero, INews, IProgram } from "@/interface";
import Expertise from "@/components/home/expertise";
import Program from "@/components/home/program";
import News from "@/components/home/news";
export default function Home() {
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

  const expertiseItems: IExpertise[] = [
    {
      icon: "learning",
      title: "Applied Science & Imagination Centre",
    },
    {
      icon: "diagnostic",
      title: "Diagnostics and Assessments",
    },
    {
      icon: "transformation",
      title: "Human Resources & Organizational Transformation",
    },
    {
      icon: "klobility",
      title: "Klobility",
    },
    {
      icon: "executive",
      title: "Leadership Development",
    },
    {
      icon: "learning",
      title: "On-Demand Online Learning",
    },
  ];

  const newsItems: INews[] = [
    {
      title: "Zoompathy vs Zoom-fatigue: Managing Virtual Meeting Burnout",
      subtitle: "PUBLIC WORKSHOP",
      date: "25 Feb 2022",
      to: "/#",
    },
    {
      title: "Our New Solution To Hire The Right Person For Your Company",
      subtitle: "BUKA PINTU",
      date: "20 Oct 2021",
      to: "/#",
    },
    {
      title: "DDI : Among Indonesia’s First Signatories of UN WEP",
      subtitle: "LIVE WEBINAR",
      date: "20 Oct 2021",
      to: "/#",
    },
    {
      title: "Our New Solution To Hire The Right Person For Your Company",
      subtitle: "BUKA PINTU",
      date: "20 Oct 2021",
      to: "/#",
    },
  ];

  const programItems: IProgram[] = [
    {
      title:
        "Kolaborasi dalam Program Guru Penggerak sangat meaningful dan impactful untuk perkembangan pendidikan di Indonesia, sehingga perlu untuk dilakukan secara berkelanjutan.",
      subtitle: "Kementerian Pendidikan, Budaya, Riset, dan Teknologi",
      icon: "kemenbudristek",
      image: "kolaborasi",
    },
    {
      title:
        "2 Kolaborasi dalam Program Guru Penggerak sangat meaningful dan impactful untuk perkembangan pendidikan di Indonesia, sehingga perlu untuk dilakukan secara berkelanjutan.",
      subtitle: "Kementerian Pendidikan, Budaya, Riset, dan Teknologi",
      icon: "kemenbudristek",
      image: "kolaborasi",
    },
    {
      title:
        "3 Kolaborasi dalam Program Guru Penggerak sangat meaningful dan impactful untuk perkembangan pendidikan di Indonesia, sehingga perlu untuk dilakukan secara berkelanjutan.",
      subtitle: "Kementerian Pendidikan, Budaya, Riset, dan Teknologi",
      icon: "kemenbudristek",
      image: "kolaborasi",
    },
  ];

  return (
    <>
      <Hero heroItems={heroItems} />
      <Expertise expertiseItems={expertiseItems} />
      <Program programItems={programItems} />
      <News newsItems={newsItems} />
    </>
  );
}
