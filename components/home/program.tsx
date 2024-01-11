"use client";

import { IProgram } from "@/interface";
import { useState } from "react";
import Image from "next/image";
import Button from "../Button";

export default function Program({
  programItems,
}: {
  programItems: IProgram[];
}) {
  const [activeProgram, setActiveProgram] = useState(0);

  const onNextClick = () => {
    if (activeProgram < programItems.length - 1) {
      setActiveProgram(activeProgram + 1);
    } else {
      setActiveProgram(0);
    }
  };

  const onPrevClick = () => {
    if (activeProgram > 0) {
      setActiveProgram(activeProgram - 1);
    } else {
      setActiveProgram(programItems.length - 1);
    }
  };
  return (
    <section id="program" className="program">
      <div className="bg-program"></div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <Image
              src={`/images/${programItems[activeProgram].image}.png`}
              width={584}
              height={438}
              alt="program"
              className="program--img"
            />
          </div>
          <div className="col-12 col-lg-6 program--content">
            <div>
              <Image
                src={`/images/${programItems[activeProgram].icon}.png`}
                width={98}
                height={72}
                alt="program"
                className="program--icon"
              />
              <h1 className="program--title">
                {programItems[activeProgram].title}
              </h1>
              <p className="program--subtitle">
                {programItems[activeProgram].subtitle}
              </p>
            </div>
            <div className="stepper">
              <div className="stepper-line">
                <div
                  className="stepper-line--progress"
                  style={{
                    width: `${
                      (activeProgram / (programItems.length - 1)) * 100
                    }%`,
                  }}
                ></div>
              </div>
              <div className="stepper-button">
                <Button className="btn-stepper me-3" onClick={onPrevClick}>
                  <Image
                    src="/icons/arrow-prev.svg"
                    width={56}
                    height={56}
                    alt="prev"
                  />
                </Button>
                <Button className="btn-stepper" onClick={onNextClick}>
                  <Image
                    src="/icons/arrow-next.svg"
                    width={56}
                    height={56}
                    alt="next"
                  />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
