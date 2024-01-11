import { IReason } from "@/interface";
import Image from "next/image";

export default function AboutReason({
  reasonItems,
}: {
  reasonItems: IReason[];
}) {
  return (
    <section id="reason" className="reason">
      <div className="container">
        <div className="row row-title-reason">
          <div className="col">
            <h2 className="reason--title">Reasons to Collaborate</h2>
          </div>
        </div>
        <div className="row">
          {reasonItems.map((item, index) => (
            <div className="col-12 col-lg-4" key={index}>
              <div className="reason-item">
                <Image
                  src={`/icons/${item.icon}.svg`}
                  width={64}
                  height={64}
                  alt="1"
                />
                <h3 className="reason-item--title">{item.title}</h3>
                <p className="reason-item--description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
