import Image from "next/image";
import { IClient } from "@/interface";

export default function OurClient({ clientItems }: { clientItems: IClient[] }) {
  return (
    <section id="our-client" className="our-client">
      <div className="container">
        <div className="row row-title">
          <div className="col">
            <h2 className="our-client--title">Our Clients</h2>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-6 row-content">
          {clientItems.map((item, index) => (
            <div className="col" key={index}>
              <Image
                src={`/images/clients/${item.image}.png`}
                width={173}
                height={173}
                alt={item.name}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
