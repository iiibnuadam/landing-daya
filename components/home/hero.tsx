import { IHero } from "@/interface";
import Image from "next/image";
import Button from "@/components/Button";
import NextIcon from "@/public/icons/Next";
import Link from "next/link";

export default function Hero({ heroItems }: { heroItems: IHero[] }) {
  return (
    <section className="hero">
      <div className="container hero--container">
        <div className="row">
          <div className="col-12 col-lg-7 hero--block">
            <h1 className="hero--title">Adopt Globally,</h1>
            <h1 className="hero--title">Lead Locally</h1>
            <p className="hero--subtitle mt-3 mb-5">
              Daya Dimensi Indonesia is a world-class strategic partner for
              individual and organisational transformation through
              humanity-based and technology-supported solutions to help you
              hire, promote, and develop exceptional leaders.
            </p>
            <div>
              <Button className="btn-hero me-5">
                LEARN MORE ABOUT US
                <span className="ms-2">
                  <NextIcon width={20} height={20} color="white" />
                </span>
              </Button>
              <Button className="btn-hero">
                CONTACT US
                <span className="ms-2">
                  <NextIcon width={20} height={20} color="white" />
                </span>
              </Button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="active-client">
              {heroItems.map((item, index) => (
                <div key={index}>
                  <h3 className="active-client--title">{item.title}</h3>
                  <p className="active-client--subtitle">{item.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="d-none d-lg-block col-1"></div>
          <div className="col-12 col-lg d-flex justify-content-center align-items-center gap-5 mb-5 mb-lg-0">
            <Image
              src="/images/unwomen.png"
              width={195}
              height={64}
              layout="responsive"
              alt="unwomen"
            />
            <Image
              src="/images/iso-updated.png"
              width={260}
              height={64}
              layout="responsive"
              alt="iso"
            />
          </div>
        </div>
      </div>
      <div className="bg-hero">
        <div className="bg-hero--box-square"></div>
        <div className="bg-hero--rectangle-line"></div>
      </div>
      <Link href="#expertise">
        <Button className="btn-discover">
          DISCOVER
          <span className="ms-2">
            <NextIcon width={18} height={18} />
          </span>
        </Button>
      </Link>
    </section>
  );
}
