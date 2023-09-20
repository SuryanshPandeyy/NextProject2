import { Button, Dialog, Divider } from "@mui/material";
import Image from "next/image";
import React from "react";
import styles from "/styles/Home.module.css";
import useSWR from "swr";
import { Fade } from "react-reveal";
import { useRouter } from "next/router";
import Swr from "../components/swr";
import data from "/data/service";
import Header from "/components/Header";
import Heads from "/components/Heads";
import { MdOutlineWeb } from "react-icons/md";
import { BsPhone, BsMicFill } from "react-icons/bs";
import { FaLaptopCode, FaReact } from "react-icons/fa";
import { HiOutlineSpeakerphone } from "react-icons/hi";

const Services = () => {
  const service = Swr("services");
  const serviceData = service && service.service;

  return (
    <>
      <Heads title="Services Mg Technicals" />
      <Header background="#fff" color="#000" />
      <div className={styles.serviceContainer} style={{ paddingTop: 20 }}>
        {/* <Divider className="divider">
          <div className="heading"></div>
          <h1>Our Services</h1>
        </Divider> */}

        <div className={styles.serviceBox}>
          <Fade>
            <div className={styles.service}>
              <div>
                <div>
                  <MdOutlineWeb size={50} />
                  {/* <Image
                    src="/image/1.png"
                    alt="service"
                    width={120}
                    height={80}
                    objectFit="cover"
                  /> */}

                  <h3>Website Development</h3>
                  <p>
                    Right From Designing To development to marketing your online
                    Business we do all the heavy lifting for you. Transform your
                    business with next generation tech solutions that can
                    amplify operational efficiency and deliver an enriched
                    customer experience.
                  </p>
                  <ul>
                    <li>Business Website</li>
                    <li>Eccomerce Website</li>
                    <li>Blog Website</li>
                  </ul>
                </div>
              </div>
              <Button className={styles.serviceMore}>Connect With Us</Button>
            </div>
          </Fade>
          <Fade>
            <div className={styles.service}>
              <div>
                <BsPhone size={50} />
                {/* <Image
                  src="/image/2.png"
                  alt="service"
                  width={120}
                  height={80}
                  objectFit="cover"
                /> */}

                <h3>App Development</h3>
                <p>
                  Mobile app design and development is a crucial aspect of your
                  business, and we want to make sure that you get the best
                  experience possible. Our team has experience in both mobile
                  app development and web application, so we can offer you a
                  wide range of services for all of your needs. We target your
                  audience with mobile app development solutions and web
                  solutions for increased engagement..
                </p>
              </div>
              <Button className={styles.serviceMore}>Connect With Us</Button>
            </div>
          </Fade>
          <Fade>
            <div className={styles.service}>
              <div>
                <BsMicFill size={50} />
                {/* <Image
                  src="/image/4.png"
                  alt="service"
                  width={120}
                  height={80}
                  objectFit="cover"
                /> */}

                <h3>Voice Over and Creative Ads</h3>
                <p>
                  Are you seeking an ideal place to get quality Online Voice
                  Over service? Among various companies, VoiceMonk Studio is one
                  of the most trusted names. We are located in India’s capital
                  Delhi. We specialize in offering high-quality services in
                  Voice Over, Dubbing, Translation, and Transcription. We are a
                  one-stop solution for all your Voice Over and Dubbing needs.
                  Our main aim is to provide solutions at the best rates and
                  lightning-fast speed.
                </p>
              </div>
              <Button className={styles.serviceMore}>Connect With Us</Button>
            </div>
          </Fade>
          <Fade>
            <div className={styles.service}>
              <div>
                <FaLaptopCode size={50} />
                {/* <Image
                  src="/image/5.png"
                  alt="service"
                  width={120}
                  height={80}
                  objectFit="cover"
                /> */}

                <h3>Software Solutions</h3>
                <p>
                  Our expert engineers facilitate selections of service package
                  to fulfill company requirements. Whether you need to set the
                  server from scratch, manage your network infrastructure
                  without external help,manage system framework or secure your
                  server- from little one-time employment to a completely
                  outsourced result.
                </p>
              </div>
              <Button className={styles.serviceMore}>Connect With Us</Button>
            </div>
          </Fade>
          <Fade>
            <div className={styles.service}>
              <div>
                <HiOutlineSpeakerphone size={50} />
                {/* <Image
                  src="/image/3.png"
                  alt="service"
                  width={120}
                  height={80}
                  objectFit="cover"
                /> */}

                <h3>Marketing Services</h3>
                <p>
                  We provide you with high value tactics and online marketing
                  solutions for your business driving high quality traffic and
                  ROI for your product or service. Connect with us for any
                  queries you have.
                </p>
              </div>
              <Button className={styles.serviceMore}>Connect With Us</Button>
            </div>
          </Fade>
          <Fade>
            <div className={styles.service}>
              <div>
                <FaReact size={50} />
                {/* <Image
                  src="/image/6.png"
                  alt="service"
                  width={120}
                  height={80}
                  objectFit="cover"
                /> */}

                <h3>Technology Solutions</h3>
                <p>
                  A technology solution is competitively durable when its
                  adopters continue to use it long after the initial adoption
                  (Tiwana et al., 2010). For example, the majority of apps see
                  intensive usage after their initial adoption but eventually
                  decline in their usage.
                </p>
              </div>
              <Button className={styles.serviceMore}>Connect With Us</Button>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default Services;
