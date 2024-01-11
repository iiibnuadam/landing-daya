"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { IMenu } from "@/interface";

export default function Headers() {
  const menus: IMenu[] = [
    {
      name: "Home",
      to: "/",
    },
    {
      name: "About",
      to: "/about",
    },
    {
      name: "Expertise",
      to: "/#expertise",
    },
    {
      name: "Program",
      to: "/#program",
    },
    {
      name: "Odyssey",
      to: "/#odyssey",
    },
    {
      name: "News",
      to: "/#news",
    },
    {
      name: "Contact",
      to: "/#contact",
    },
    {
      name: "Career",
      to: "/#career",
    },
  ];
  const pathname = usePathname();
  const [colorChange, setColorChange] = useState(false);

  const [isAbout, setIsAbout] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setColorChange(true);
      setIsAbout(false);
    } else {
      setColorChange(false);
      if (pathname === "/about") {
        setIsAbout(true);
      } else {
        setIsAbout(false);
      }
    }
  };
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", changeBackground);
  }

  return (
    <nav
      className={`navbar navbar-expand-lg ${colorChange ? "black-navbar" : ""}`}
    >
      <div className="container">
        <a className="navbar-brand" href="#">
          <Image src="/images/logo.svg" width={150} height={50} alt="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse navbar-list"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav">
            {menus.map((menu, index) => (
              <li className="nav-item" key={index}>
                <Link
                  href={menu.to}
                  className={`nav-link ${
                    pathname === menu.to ? "active" : ""
                  } ${isAbout ? "is-about" : ""}`}
                >
                  {menu.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
