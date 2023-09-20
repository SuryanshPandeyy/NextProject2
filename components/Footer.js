import React from "react";
import styles from "../styles/Home.module.css";
import {
  BsFacebook,
  BsYoutube,
  BsInstagram,
  BsLinkedin,
  BsPinterest,
  BsTelephone,
} from "react-icons/bs";
import { ImLocation } from "react-icons/im";
import { Fade } from "react-reveal";
import Link from "next/link";
import Image from "next/image";
import { Button, IconButton, Input } from "@mui/material";
import { IoMdSend } from "react-icons/io";

const Footer = () => {
  return (
    <div className={styles.footer}>
      {/* <div className={styles.logo}>Logo</div> */}
      <div className={styles.footerMenu}>
        <div className={styles.footerDetail}>
          <div className={styles.footerLogo}>
            <Image
              src="/icon/logo.png"
              alt="logo"
              width="40"
              height="40"
              objectFit="contain"
              loader={({ src, width }) => `${src}/?${width}`}
            />

            <h2 className={styles.heading}>MG Technicals</h2>
          </div>
          <div>
            MG Technicals is a Rajatshan based IT Company, offering 360° IT
            solutions and Working as a Creative agency and doing some different
            type of innovations. Mohit gaur is Founder and CEO of MG Technicals,
            MG Technicals is serving in Whole india with successful customer
            History of Many national corporations since 2017
          </div>
        </div>

        <div className={styles.footerMenu2}>
          <div className={`${styles.footerGeneral} ${styles.footerList}`}>
            <h2 className={styles.heading}>Quick Link</h2>
            <ul className={styles.list}>
              <li>
                <Fade left>
                  <Link href="/Home">
                    <a>Home</a>
                  </Link>
                </Fade>
              </li>
              <li>
                <Fade left>
                  <Link href="/Contact">
                    <a>Contact</a>
                  </Link>
                </Fade>
              </li>
              <li>
                <Fade left>
                  <Link href="/About">
                    <a>About</a>
                  </Link>
                </Fade>
              </li>
              <li>
                <Fade left>
                  <Link href="/PrivacyPolicy">
                    <a>Privacy Policy</a>
                  </Link>
                </Fade>
              </li>
              <li>
                <Fade left>
                  <Link href="/PrivacyPolicy">
                    <a>Terms Of Services</a>
                  </Link>
                </Fade>
              </li>
            </ul>
          </div>

          <div className={styles.footerList}>
            <ul className={styles.list}>
              <li>
                <ImLocation style={{ marginRight: 10 }} size={20} />
                <a>Location Address</a>
              </li>
              <li>
                <BsTelephone style={{ marginRight: 10 }} size={20} />
                <a>9571725742</a>
              </li>
            </ul>
          </div>
        </div>

        {/* <div className={styles.footerMail}>
          <form>
            <label htmlFor="email">Subscribe to Our Newsletter</label>
            <p
              style={{
                color: "#fff",
                fontSize: "1.3rem",
                marginBottom: 15,
              }}
            >
              Sign up to my newsletter and be the first to know about the latest
              news, special offers, events, and discounts.
            </p>
            <div>
              <input type="email" name="email" id="email" placeholder="Email" />
              <Button>
                <IoMdSend size={20} />
              </Button>
            </div>
          </form>
        </div> */}
      </div>

      <div className={styles.footerCW}>
        <Fade down>
          <ul className={styles.social}>
            <li>
              <Link href="https://www.facebook.com/Mgtechnicalsindia/?ref=pages_you_manage">
                <a>
                  <BsFacebook size={25} />
                </a>
              </Link>
            </li>
            <li>
              <Link href="https://www.instagram.com/mgtechnicals/">
                <a target="_blank">
                  <BsInstagram size={25} />
                </a>
              </Link>
            </li>
            <li>
              <Link href="https://www.linkedin.com/in/mgt-mark%C3%A8ters-091925232/">
                <a target="_blank">
                  <BsLinkedin size={25} />
                </a>
              </Link>
            </li>
            <li>
              <Link href="https://pin.it/1RZiqBS">
                <a target="_blank">
                  <BsPinterest size={25} />
                </a>
              </Link>
            </li>
          </ul>

          <p>
            &copy; 2022 All Rights Reserved mgtechnicals |{" "}
            <Link href="/PrivacyPolicy">
              <a>Privacy Policy</a>
            </Link>
          </p>
        </Fade>
      </div>
    </div>
  );
};

export default Footer;
