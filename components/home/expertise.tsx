import Image from "next/image";
import NextIcon from "@/public/icons/Next";
import { IExpertise } from "@/interface";

export default function Expertise({
  expertiseItems,
}: {
  expertiseItems: IExpertise[];
}) {
  return (
    <section id="expertise" className="expertise">
      <div className="container">
        <h1 className="expertise--title">Expertise</h1>
        <p className="expertise--subtitle">
          &quot;Organisations who will succeed in the long-run are those who are
          open to new ideas, embrace innovations, instill compassion in every
          act and decision, and consistent in advancing humanity through
          sustainability.&quot; - Excerpts from &apos;Leaders of a New
          Planet&apos; book.
        </p>
        <div className="expeertise-content mt-5">
          <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4">
            {expertiseItems.map((item, index) => (
              <div className="col" key={index}>
                <div className="expertise-item">
                  <div>
                    <div className="expertise-item--icon mb-3">
                      <Image
                        src={`/icons/${item.icon}.svg`}
                        width={56}
                        height={56}
                        alt="icon"
                      />
                    </div>
                    <h3 className="expertise-item--title">{item.title}</h3>
                  </div>
                  <div className="expertise-item--btn">
                    <button className="btn btn-expertise shadow-none border-0">
                      <NextIcon width={40} height={40} color="white" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
