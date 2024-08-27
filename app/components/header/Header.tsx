"use client";
import Image from "next/image";
import styles from "./header.module.css";
import Link from "next/link";
import { useState } from "react";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const documentHeight = () => {
    const doc = document.documentElement;
    doc.style.setProperty("--doc-height", `${window.innerHeight}px`);
  };

  return (
    <header className="header">
      <Image
        src="/assets/images/logo.svg"
        alt="logo"
        width={64.09}
        height={39.9}
      />
      <nav aria-label="primary" className={`${isMenuOpen ? "open" : ""}`}>
        <Image
          src={"/assets/images/icon-menu-close.svg"}
          height={32}
          width={32}
          alt="close"
          onClick={() => setIsMenuOpen(false)}
          className="close-icon"
        />
        <ol>
          <li>
            <Link href="/" className="body">
              Home
            </Link>
          </li>
          <li>
            <Link href="/" className="body">
              New
            </Link>
          </li>
          <li>
            <Link href="/" className="body">
              Popular
            </Link>
          </li>
          <li>
            <Link href="/" className="body">
              Trending
            </Link>
          </li>
          <li>
            <Link href="/" className="body">
              Categories
            </Link>
          </li>
        </ol>
      </nav>
      <Image
        src="/assets/images/icon-menu.svg"
        alt="menu"
        width={24}
        height={24}
        className="mobile-menu-icon"
        onClick={() => setIsMenuOpen(true)}
      />
    </header>
  );
};

export default Header;
