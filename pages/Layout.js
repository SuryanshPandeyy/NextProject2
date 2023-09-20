import React, { useEffect, useState } from "react";
import Head from "next/head";
import AdminHeader from "/components/Admin/Header";
import Footer from "/components/Footer";
import { useRouter } from "next/router";
import { BsChevronUp } from "react-icons/bs";
import { useSession } from "next-auth/react";
import Login from "./Admin/Login";
import Header2 from "../components/Admin/Header";

const Layout = ({ children }) => {
  const { asPath, pathname } = useRouter();

  const { data: session, status } = useSession();

  {
    status === "loading" && <></>;
  }
  
  console.log(session);

  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);

    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Mg Technicals</title>
        <link rel="icon" type="image/x-icon" href="/icon/logo1.png" />
      </Head>

      {pathname.includes("/client") ? (
        <main>{children}</main>
      ) : pathname.includes("/Admin") ? (
        <React.Fragment>
          {status === "loading" ? (
            <>Loading</>
          ) : status === "authenticated" ? (
            <>
              <Header2 />
              <main className="main">{children}</main>
            </>
          ) : (
            <Login />
          )}
        </React.Fragment>
      ) : (
        <React.Fragment>
          <main>{children}</main>
          <button
            onClick={scrollToTop}
            className="scrolltotop"
            style={{
              display: visible ? "flex" : "none",
            }}
          >
            <BsChevronUp color="#fff" size="20" />
          </button>
          <Footer />
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Layout;
