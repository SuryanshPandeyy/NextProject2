import { Divider } from "@mui/material";
import Image from "next/image";
import React from "react";
import styles from "../styles/Home.module.css";
import Header from "/components/Header";
import Heads from "/components/Heads";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay, Pagination } from "swiper";
SwiperCore.use([Autoplay]);

const About = () => {
  return (
    <>
      <Heads title="Aboout Us  - Mg Technicals" />
      <Header background="#fff" color="#000" />
      <div className="aboutContainer" style={{ paddingTop: 80 }}>
        <div className="aboutBox" id="company">
          <div className="divider">
            <div className="heading"></div>
            <h1>About Us</h1>
          </div>
          <p>
            MG Technicals is a Rajatshan based IT Company, offering 360° IT
            solutions and Working as a Creative agency and doing some different
            type of innovations. Mohit gaur is Founder and CEO of MG Technicals,
            MG Technicals is serving in Whole india with successful customer
            History of Many national corporations since 2017
          </p>

          <div className={styles.projectContainer}>
            <div className={styles.projectBox}>
              <div className={styles.projects}>
                <Image
                  src="/image/about1 (1).jpg"
                  alt="project"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className={styles.projectTitle}>
                <p>Media Creation</p>
                <p>
                  media creation-we create creative media content like
                  voice-over, animation ads, and posters.
                </p>
              </div>
            </div>
            <div className={styles.projectBox}>
              <div className={styles.projects}>
                <Image
                  src="/image/about1 (2).jpg"
                  alt="project"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className={styles.projectTitle}>
                <p>Digital Marketing</p>
                <p>
                  digital marketing- we are creative digital marketing agency
                </p>
              </div>
            </div>
            <div className={styles.projectBox}>
              <div className={styles.projects}>
                <Image
                  src="/image/about1 (3).jpg"
                  alt="project"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className={styles.projectTitle}>
                <p>Software Development</p>
                <p>
                  software development - we provide various type of
                  technological solutions
                </p>
              </div>
            </div>
          </div>

          <p>
            Mg Technicals is not only IT group or service providing brand but
            also Finding new ways to make easy the technology in our life, we
            are also working on some E-products ,Online Tools and some android
            apps.... WE are also working as a Creative agency and Pruduction
            House of Digital Ads, tools ,Motions and more..
          </p>

          <div className={styles.serviceContainer}>
            <div className={styles.divider}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <h2>Our Clients</h2>
                <hr style={{ width: "90%" }} />
              </div>
            </div>

            <Swiper
              autoplay={{
                delay: 1200,
                disableOnInteraction: true,
              }}
              loop={true}
              speed={400}
              modules={[Navigation, Pagination]}
              navigation={false}
              centeredSlides={true}
              spaceBetween={60}
              slidesPerView="auto"
              className={styles.clientSlider}
              pagination={{
                dynamicBullets: true,
                background: "red",
              }}
            >
              <SwiperSlide className="brandsItem">
                <div className={styles.clientItem}>
                  <Image
                    src="/image/client1.png"
                    alt="client"
                    width={150}
                    height={40}
                    objectFit="cover"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="brandsItem">
                <div className={styles.clientItem}>
                  <Image
                    src="/image/client2.png"
                    alt="client"
                    width={150}
                    height={40}
                    objectFit="cover"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="brandsItem">
                <div className={styles.clientItem}>
                  <Image
                    src="/image/client11.png"
                    alt="client"
                    width={70}
                    height={70}
                    objectFit="contain"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="brandsItem">
                <div className={styles.clientItem}>
                  <Image
                    src="/image/client3.png"
                    alt="client"
                    width={250}
                    height={100}
                    objectFit="cover"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="brandsItem">
                <div className={styles.clientItem}>
                  <Image
                    src="/image/client4.png"
                    alt="client"
                    width={150}
                    height={100}
                    objectFit="cover"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="brandsItem">
                <div className={styles.clientItem}>
                  <Image
                    src="/image/client5.jpeg"
                    alt="client"
                    width={100}
                    height={100}
                    objectFit="cover"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="brandsItem">
                <div className={styles.clientItem}>
                  <Image
                    src="/image/client6.jpeg"
                    alt="client"
                    width={100}
                    height={100}
                    objectFit="cover"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="brandsItem">
                <div className={styles.clientItem}>
                  <Image
                    src="/image/client6.png"
                    alt="client"
                    width={210}
                    height={100}
                    objectFit="cover"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="brandsItem">
                <div className={styles.clientItem}>
                  <Image
                    src="/image/client7.jpg"
                    alt="client"
                    width={210}
                    height={100}
                    objectFit="cover"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="brandsItem">
                <div className={styles.clientItem}>
                  <Image
                    src="/image/client8.png"
                    alt="client"
                    width={210}
                    height={100}
                    objectFit="cover"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="brandsItem">
                <div className={styles.clientItem}>
                  <Image
                    src="/image/client9.jpg"
                    alt="client"
                    width={210}
                    height={100}
                    objectFit="contain"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="brandsItem">
                <div className={styles.clientItem}>
                  <Image
                    src="/image/client10.jpg"
                    alt="client"
                    width={210}
                    height={100}
                    objectFit="cover"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>

          <p>
            Reg. No. UDYAM-RJ-25-0026913
            <br />
            Official mail-{" "}
            <a href="mailto: info@mgtechnicals.in">info@mgtechnicals.in</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
