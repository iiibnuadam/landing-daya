"use client";

import { IInfo } from "@/interface";
import NextIcon from "@/public/icons/Next";
import Button from "@/components/Button";
import Link from "next/link";
import { useState } from "react";
import { on } from "events";

export default function AboutInfo({ infoItems }: { infoItems: IInfo[] }) {
  const [onHoverIndex, setOnHoverIndex] = useState<number | null>(null);
  const onMouseEnterInfoItem = (index: number) => () => {
    setOnHoverIndex(index);
  };

  const onMouseLeaveInfoItem = () => {
    setOnHoverIndex(null);
  };

  return (
    <section id="info" className="info">
      <div className="container">
        <div className="row row-cols-1 row-cols-lg-3">
          {infoItems.map((item, index) => (
            <div className="col" key={index}>
              <div
                className="info-item"
                onMouseEnter={onMouseEnterInfoItem(index)}
                onMouseLeave={onMouseLeaveInfoItem}
              >
                <h3 className="info-item--title">{item.title}</h3>
                <div className={onHoverIndex === index ? "d-block" : "d-none"}>
                  <p className="info-item--description">{item.description}</p>
                  <Link href={item.to}>
                    <Button className="info-item--btn">
                      LEARN MORE
                      <span className="ms-2">
                        <NextIcon width={20} height={20} color="white" />
                      </span>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
