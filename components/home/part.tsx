import Button from "@/components/Button";
import NextIcon from "@/public/icons/Next";

export default function Part() {
  return (
    <section id="part" className="part">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h1 className="part--title">Be a Part of Daya Dimensi Indonesia</h1>
            <p className="part--subtitle">
              Are you the resilient leaders we are searching for? Join Daya
              Dimensi Indonesia to advance your leadership skill and generate
              exceptional leaders across Indonesia at once.
            </p>
            <Button className="text-white">
              LEARN MORE
              <span className="ms-2">
                <NextIcon width={20} height={20} color="white" />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
