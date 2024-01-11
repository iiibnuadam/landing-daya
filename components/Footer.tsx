"use client";

import NextIcon from "@/public/icons/Next";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

export default function Footer() {
  const socialMedia = [
    {
      icon: "fb",
      title: "Facebook",
      link: "https://www.facebook.com/dayadimensiindonesia",
    },
    {
      icon: "ig",
      title: "Instagram",
      link: "https://www.instagram.com/dayadimensiindonesia/",
    },
    {
      icon: "linkedin",
      title: "Linkedin",
      link: "https://www.linkedin.com/company/dayadimensiindonesia/",
    },
    {
      icon: "yt",
      title: "Youtube",
      link: "https://www.youtube.com/channel/UC4Yb0C7QZ8Q7g9V0Vb7U8Vw",
    },
    {
      icon: "x",
      title: "Twitter",
      link: "https://twitter.com/dayadimensi",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="row g-4">
          <div className="col-12 col-xl-4">
            <div className="footer-content-img gap-3">
              <Image
                src="/images/gptw-certification.png"
                width={35}
                height={60}
                alt="logo"
              />
              <Image
                src="/images/unwomen.png"
                width={152}
                height={50}
                alt="unwomen"
              />
              <Image
                src="/images/iso-updated.png"
                width={206}
                height={50}
                alt="iso"
              />
            </div>
          </div>
          <div className="col-12 col-xl-4">
            <div className="d-flex justify-content-center align-items-center gap-3">
              {socialMedia.map((item, index) => (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={index}
                >
                  <Image
                    src={`/icons/${item.icon}.svg`}
                    width={32}
                    height={32}
                    alt="icon"
                  />
                </a>
              ))}
            </div>
          </div>
          <div className="col-12 col-xl-4 footer--fab-container">
            <h4 className="footer--title">Subscribe. Join the Community.</h4>
            <div className="d-flex">
              <input
                className="footer--input form-control"
                type="text"
                placeholder="Email Address"
              />
              <button className="btn footer--btn">
                <NextIcon width={24} height={24} color="white" />
              </button>
              <Link href="https://wa.me/6281290000000" target="_blank">
                <Image
                  src="/icons/wa.svg"
                  width={72}
                  height={72}
                  alt="wa"
                  className="footer--fab footer--fab--wa"
                />
              </Link>
              <Button
                className="btn footer--fab footer--fab--up"
                onClick={scrollToTop}
              >
                <Image src="/icons/up.svg" width={24} height={24} alt="up" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <hr className="footer--line" />
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <p className="footer--copy">
              Copyright © 2022 Daya Dimensi Indonesia. Website crafted by
              Antikode.
            </p>
          </div>
          <div className="col-12 col-md-6 footer--privacy">
            <div className="d-flex">
              <p className="footer--copy">Privacy Policy</p>
              <p className="footer--copy mx-3">|</p>
              <p className="footer--copy">Terms & Conditions</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
