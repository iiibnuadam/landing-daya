import Image from "next/image";
import Button from "@/components/Button";
import NextIcon from "@/public/icons/Next";
import Link from "next/link";
import { INews } from "@/interface";

export default function News({ newsItems }: { newsItems: INews[] }) {
  return (
    <section id="news" className="news">
      <div className="container">
        <div className="d-flex justify-content-between mb-4">
          <h1 className="news--title">Upcoming Activities</h1>
          <Button className="news--btn">
            VIEW ALL
            <span className="ms-2">
              <NextIcon width={24} height={24} color="red" />
            </span>
          </Button>
        </div>
        <div className="row">
          <div className="col-12 col-lg-5">
            <Image
              src="/images/bg-news.png"
              width={581}
              height={581}
              alt="news"
              className="news--img"
            />
          </div>
          <div className="col">
            <hr className="news--line" />
            <ul className="news-list list-group list-group-flush">
              {newsItems.map((item, index) => (
                <li className="list-group-item" key={index}>
                  <div className="row py-4">
                    <div className="col-3">
                      <h4 className="news-list-item--subtitle">
                        {item.subtitle}
                      </h4>
                      <p className="news-list-item--date">{item.date}</p>
                    </div>
                    <div className="col">
                      <h3 className="news-list-item--title">{item.title}</h3>
                    </div>
                    <div className="col-1 d-flex justify-content-end">
                      <Link href={item.to} target="_blank">
                        <Button>
                          <span className="ms-2">
                            <NextIcon width={24} height={24} color="red" />
                          </span>
                        </Button>
                      </Link>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
