import Image from "next/image";
import Link from "next/link";

export default function AboutHero() {
  return (
    <section className="hero-about">
      <div className="bg-hero-about"></div>
      <div className="bg-pentagon-1"></div>
      <div className="bg-pentagon-2"></div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-4">
            <h3 className="hero-about--breadcrumbs">
              <Link href={"/"}>Home</Link> / <span>About</span>
            </h3>
          </div>
        </div>
        <div className="row row-content">
          <div className="col-12 col-lg-4">
            <h1 className="hero-about--title">Force of Progress</h1>
            <p className="hero-about--description">
              Daya Dimensi Indonesia is a leadership consultant that supports
              organisations develop and deliver strategic programmes such as
              assessment centre, selection, learning, and personal &
              organisational transformation.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-lg-4">
            <Link href="#daya">
              <Image src="/icons/down.svg" width={24} height={24} alt="down" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
