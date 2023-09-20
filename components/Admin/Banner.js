import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import useSWR, { mutate } from "swr";
import AdminCss from "/styles/Admin.module.css";
import { useRouter } from "next/router";
import Image from "next/image";

const Banner = () => {
  const [file, setFile] = useState();
  const [dataImage, setDataImage] = useState();
  const [bg, setBg] = useState(false);

  const [title, setTitle] = useState("");
  const [id, setId] = useState(null);

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR("/api/banner", fetcher);

  useEffect(() => {
    if (error) return console.log(error);
    if (!data) return console.log("loading");

    const bannerData = data.banner[0];

    if (bannerData) {
      setFile(bannerData.file);
      setDataImage(bannerData.file);
      setTitle(bannerData.title);
      setId(bannerData._id);
      setBg(bannerData.background);
    }
  }, [data, error]);

  const inputStyle = { top: "-1.2rem", fontSize: "1.2rem" };

  const uploadImage = async (e) => {
    e.preventDefault();

    if (file !== null) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "mgtechnicals");
      formData.append("api_key", "529915714396354");
      formData.append("resource_type", "auto");

      const data = await fetch(
        "https://api.cloudinary.com/v1_1/mgtechnicals/auto/upload",
        {
          method: "POST",
          body: formData,
        }
      )
        .then((res) => res.json())
        .catch((error) => error);

      const url = data.secure_url;
      return url;
    }
  };

  console.log(id);

  const submitForm = async (e) => {
    e.preventDefault();

    const imgUrl = await uploadImage(e);

    if (file !== "" && title !== "") {
      console.log(imgUrl);
      const formData = {
        file: imgUrl,
        title,
        background: bg
      };

      const formData2 = {
        _id: id,
        file: imgUrl,
        title,
        background: bg,
      };

      await fetch("/api/banner", {
        method: id === null ? "POST" : "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(id === null ? formData : formData2),
      }).then((res) => {
        if (res.status === 200) {
          setFile("");
          mutate("/api/banner");
          alert("Submitted");
        }
      });
    }
  };

  return (
    <>{bg? "true" : "false"}
      <form
        encType="multipart/form-data"
        onSubmit={submitForm}
        className={`contactForm ${AdminCss.table}`}
      >
        <h2>Banner</h2>
        {dataImage && (
          <div className="contactInputContainer">
            <Image src={dataImage} alt="file" width="100%" height={100} />
          </div>
        )}
        <div className="contactInputContainer">
          <label htmlFor="file" style={file !== "" ? inputStyle : { top: "" }}>
            Icon Name
          </label>
          <input
            name="file"
            id="file"
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
        <div className="contactInputContainer">
          <label htmlFor="file" style={file !== "" ? inputStyle : { top: "" }}>
            Use deafult background color
          </label>
          <input
            name="file"
            id="file"
            type="checkbox"
            checked={bg}
            onChange={(e) => setBg(e.target.checked)}
          />
        </div>
        <div className="contactInputContainer">
          <label
            style={title !== "" ? inputStyle : { top: "" }}
            htmlFor="title"
          >
            Title
          </label>
          <input
            name="title"
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <Button style={{ width: "15rem" }} type="submit" className="send">
          Submit
        </Button>
      </form>
    </>
  );
};

export default Banner;
