import { IHero } from "@/interface";
import NextIcon from "@/public/icons/Next";
import Image from "next/image";
import Button from "@/components/Button";

export default function AboutDaya({ heroItems }: { heroItems: IHero[] }) {
  return (
    <section id="daya" className="daya">
      <div className="container">
        <div className="row">
          <div className="col-1 d-none d-lg-block"></div>
          <div className="col">
            <div className="row">
              <div className="col">
                <h2 className="daya--title">Daya Dimensi In Numbers</h2>
              </div>
            </div>
            <div className="list-number">
              {heroItems.map((item, index) => (
                <div className="number-item" key={index}>
                  <p className="number-item--number">{item.title}</p>
                  <p className="number-item--subtitle">{item.subtitle}</p>
                </div>
              ))}
            </div>
            <div className="row row-daya-content g-5">
              <div className="col-content-1">
                <Image
                  src="/images/leader-img.png"
                  width={500}
                  height={500}
                  alt="leader"
                  className="daya--img"
                />
                <h3 className="row-daya-content--title">
                  Leaders of a New Planet
                </h3>
                <p className="row-daya-content--description">
                  It is our intention is to generate leaders whose mission is to
                  advance humanity through fresh ideas, forefront skills, and
                  compassion for future generations. We call them Leaders of a
                  New Planet.
                </p>
              </div>
              <div className="col-content-2">
                <Image
                  src="/images/continous-img.png"
                  width={500}
                  height={500}
                  alt="leader"
                  className="daya--img"
                />
                <h3 className="row-daya-content--title">
                  Continuous Innovations
                </h3>
                <p className="row-daya-content--description">
                  In working with clients, we curate and provide integrated
                  business and leadership solutions. Therefore, we strive to
                  grow our digital solutions to better cater your needs.
                </p>
                <Button className="row-daya-content--btn">
                  LEARN MORE
                  <span className="ms-2">
                    <NextIcon width={20} height={20} color="red" />
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
