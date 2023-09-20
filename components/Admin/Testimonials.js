import { Button } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import useSWR from "swr";
import Banner from "../../components/Admin/Banner";
import Swr from "../swr";
import AdminCss from "/styles/Admin.module.css";

const Testimonials = () => {
  const data = Swr("testimonials");

  const testimonials = data && data.testimonials;

  return (
    <React.Fragment>
      <div className={AdminCss.table}>
        <h2>Testimonials</h2>
        <ul className={`${AdminCss.tableHeader} ${AdminCss.tableBox}`}>
          <li>Photo</li>
          <li>Title</li>
          <li>Description</li>
          <li>Change</li>
        </ul>
        {testimonials &&
          testimonials.map((item, i) => (
            <ul key={i} className={AdminCss.tableBox}>
              <li>
                <div className={AdminCss.photo}></div>
              </li>
              <li>{item.title}</li>
              <li>{item.desc.substr(0, 50)}...</li>
              <li>
                <Link href={`/Admin/Testimonials/${item._id}`} passhref>
                  <Button className={AdminCss.edit}>Edit</Button>
                </Link>
                <Button>Delete</Button>
              </li>
            </ul>
          ))}
        <div className={AdminCss.add}>
          <Link href="/Admin/Testimonials" passHref>
            <Button>Add</Button>
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Testimonials;
