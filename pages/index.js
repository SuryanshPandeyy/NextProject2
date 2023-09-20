import { Button, ButtonGroup, Divider } from "@mui/material";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { Fade } from "react-reveal";
import Swr from "../components/swr";
import Header from "/components/Header";
import Heads from "/components/Heads";
import Tilt from "react-parallax-tilt";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay, Pagination } from "swiper";
SwiperCore.use([Autoplay]);

import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { FiUserCheck } from "react-icons/fi";
import { BiHappy } from "react-icons/bi";
import { RiCustomerService2Fill } from "react-icons/ri";
import { useState } from "react";

import { MdOutlineWeb } from "react-icons/md";
import { BsPhone, BsMicFill } from "react-icons/bs";
import { FaLaptopCode, FaReact } from "react-icons/fa";
import { HiOutlineSpeakerphone } from "react-icons/hi";

export default function Home() {
  const [testimonialId, setTestimonialId] = useState(0);
  const banner = Swr("banner");
  const service = Swr("services");
  const testimonials = Swr("testimonials");

  const bannerData = banner && banner.banner[0];

  const testimonialData = [
    {
      id: 0,
      name: "Rohit",
      desc: "The very best. Man, this thing is getting better and better as I learn more about it.",
    },
    {
      id: 1,
      name: "Ankur",
      desc: "I will let my mum know about this, she could really make use of website! I am completely blown away. I was amazed at the quality of website. Website was the best investment I ever made..",
    },
    {
      id: 2,
      name: "Raghav",
      desc: "You've saved our business! Needless to say we are extremely satisfied with the results.",
    },
  ];
  return (
    <>
      <Heads title="Mg Technicals" />
      <Header />
      <div className={styles.container}>
        <div className={styles.bannerContainerBg}>
          <div className={styles.bannerBox}>
            <div className={styles.bannerTitle}>
              <Fade up>
                <p>Yaha milega takneek ka bhandaar...</p>
              </Fade>
            </div>
          </div>
          <div className={styles.bannerBtnContainer}>
            <Fade up>
              <Link href="https://wa.me/+919571735742" passHref>
                <Button>Whatsapp</Button>
              </Link>
            </Fade>

            <Fade up>
              <Link href="tel: +919571735742" passHref>
                <Button
                //  className={styles.call}
                >
                  Call Us
                </Button>
              </Link>
            </Fade>
          </div>
          <div className={styles.bannerVideo}>
            <video muted controls={false} autoPlay loop>
              <source src="/video/Untitled design.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <div className={styles.serviceContainer}>
          <Tilt className={styles.serviceBox2}>
            <Fade>
              <div
                style={{ background: "transparent" }}
                className={styles.service2}
              >
                <MdOutlineWeb size={50} />

                <div>Website development</div>
              </div>
            </Fade>
            <Fade>
              <div
                style={{ background: "transparent" }}
                className={styles.service2}
              >
                <BsPhone size={50} />

                <div>App development</div>
              </div>
            </Fade>
            <Fade>
              <div
                style={{ background: "transparent" }}
                className={styles.service2}
              >
                <BsMicFill size={50} />

                <div>
                  Voice Over & <br /> Creative Ads
                </div>
              </div>
            </Fade>
            <Fade>
              <div
                style={{ background: "transparent" }}
                className={styles.service2}
              >
                <FaLaptopCode size={50} />

                <div>Software Solutions</div>
              </div>
            </Fade>
            <Fade>
              <div
                style={{ background: "transparent" }}
                className={styles.service2}
              >
                <HiOutlineSpeakerphone size={50} />

                <div>Marketing Services</div>
              </div>
            </Fade>
            <Fade>
              <div
                style={{ background: "transparent" }}
                className={styles.service2}
              >
                <FaReact size={50} />

                <div>Technology Solutions</div>
              </div>
            </Fade>
          </Tilt>

          <Link href="/Services" passHref>
            <Button className={styles.serviceBtn}>View More</Button>
          </Link>
        </div>

        <div className={styles.aboutContainer}>
          <div className={styles.aboutDetails}>
            <Fade>
              <div className={styles.aboutDetailBox}>
                Get your business online with my technicals
              </div>
            </Fade>
            <Fade>
              <div className={styles.aboutDesc}>
                Take your business online today by becoming your business
                website and bring your services and products to customers all
                over the world.
                <br />
                Get your business marketed today to grow your business
              </div>
            </Fade>

            <Link href="https://wa.me/+919571735742" passHref>
              <Button
                style={{
                  margin: "2rem 0 0 0",
                  border: ".1rem solid grey",
                  borderRadius: 0,
                  padding: "1rem 3rem",
                  color: "#000",
                  fontSize: "1.2rem",
                  letterSpacing: 1.1,
                }}
              >
                Whatsapp Us
              </Button>
            </Link>
          </div>
          <div className={styles.about2ImgContainer}>
            <div className={styles.aboutImage21}>
              <Tilt>
                <Image
                  src="/image/banner3.gif"
                  alt="service"
                  width={900}
                  height={600}
                  // objectFit="contain"
                  priority="eager"
                />
              </Tilt>
            </div>
            <div className={styles.aboutImage22}>
              <Fade>
                <Image
                  src="/image/banner12.jpg"
                  alt="service"
                  layout="fill"
                  objectFit="cover"
                  priority="eager"
                />
              </Fade>
            </div>
          </div>
        </div>

        <div className={styles.project}>
          <Tilt>
            <div className={styles.projectItem}>
              <AiOutlineFundProjectionScreen className={styles.icons} />
              <div className={styles.projectNo}>60+</div>
              <div className={styles.projectDesc}>Successful Projects</div>
            </div>
          </Tilt>
          <Tilt>
            <div className={styles.projectItem}>
              <FiUserCheck className={styles.icons} />
              <div className={styles.projectNo}>5</div>
              <div className={styles.projectDesc}>Years of Experience</div>
            </div>
          </Tilt>
          <Tilt>
            <div className={styles.projectItem}>
              <BiHappy className={styles.icons} />
              <div className={styles.projectNo}>100%</div>

              <div className={styles.projectDesc}>Motivated Staff</div>
            </div>
          </Tilt>
          <Tilt>
            <div className={styles.projectItem}>
              <RiCustomerService2Fill className={styles.icons} />
              <div className={styles.projectNo}>24*7</div>

              <div className={styles.projectDesc}>Customer Support</div>
            </div>
          </Tilt>
        </div>

        <div className={styles.boxContainer}>
          <div className={styles.boxItem}>
            We do provide a variety of Content
            <Link href="https://wa.me/+919571735742" passHref>
              <Button>
                <div>Whatsapp Us</div>
              </Button>
            </Link>
          </div>
        </div>

        <div className={styles.aboutContainer}>
          <div className={styles.about2ImgContainer}>
            <div className={styles.aboutImage21}>
              <Tilt>
                <Image
                  src="/image/banner33.jpg"
                  alt="service"
                  width={900}
                  height={600}
                  priority="eager"
                />
              </Tilt>
            </div>
            <div className={styles.aboutImage22}>
              <Fade>
                <Image
                  src="/image/banner22.jpg"
                  alt="service"
                  layout="fill"
                  objectFit="cover"
                  priority="eager"
                />
              </Fade>
            </div>
          </div>

          <div className={styles.aboutDetails2}>
            <div className={styles.aboutDetailBox}>
              Fast and Furious Technology Solutions
              {/* Get your business marketed today to grow your business */}
            </div>
            <div className={styles.aboutDesc}>
              Get all type of technologycl solution for your business with mg
              technicals. Like website development, app development, digital
              marketing, voice over, crative ads and many more
            </div>
            <Link href="https://wa.me/+919571735742" passHref>
              <Button
                style={{
                  margin: "2rem 0 0 0",
                  border: ".1rem solid grey",
                  borderRadius: 0,
                  padding: "1rem 3rem",
                  color: "#000",
                  fontSize: "1.2rem",
                  letterSpacing: 1.1,
                }}
              >
                Whatsapp Us
              </Button>
            </Link>
          </div>
        </div>

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
        <div className={styles.serviceContainer} style={{display: 'none'}}>
          <div className={styles.divider}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <h2>People About Us</h2>
              <hr style={{ width: "92%" }} />
            </div>
          </div>
          <div className={styles.worksBox}>
            <Swiper
              initialSlide={1}
              loop={false}
              modules={[Navigation]}
              navigation={true}
              centeredSlides={true}
              spaceBetween={0}
              slidesPerView="auto"
              className={styles.workSlider}
              onSlideChange={(e) => setTestimonialId(e.realIndex)}
            >
              {[0, 1, 2].map((item, i) => (
                <SwiperSlide key={i} className="brandsItem2">
                  <div className={styles.work}>
                    <div
                      className={styles.workimg}
                      style={
                        testimonialId === i ? { transform: "scale(1.4)" } : {}
                      }
                    >
                      <Image
                        src="/image/banner3.gif"
                        alt="testimonials"
                        layout="fill"
                        style={{ borderRadius: "50%" }}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className={styles.testimonialContent}>
              {testimonialData &&
                testimonialData
                  .filter((item) => item.id === testimonialId)
                  .map((item, i) => (
                    <Fade key={i}>
                      <div className={styles.testimonialBox}>
                        <div className={styles.testimonialName}>
                          {item.name}
                        </div>
                        <svg
                          className={styles.quoteLightMark}
                          x="0px"
                          y="0px"
                          width="35px"
                          height="25px"
                          viewBox="0 0 35 25"
                        >
                          <path d="M27.461,10.206h7.5v15h-15v-15L25,0.127h7.5L27.461,10.206z M7.539,10.206h7.5v15h-15v-15L4.961,0.127h7.5                L7.539,10.206z"></path>
                        </svg>
                        <div className={styles.testimonialDesc}>
                          {item.desc}
                        </div>
                      </div>
                    </Fade>
                  ))}
            </div>
          </div>
        </div>
        <div className={styles.boxContainer}>
          <div className={styles.boxItem}>
            Get a Service
            <Link href="/Contact" passHref>
              <Button>
                <div>Contact Us</div>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
