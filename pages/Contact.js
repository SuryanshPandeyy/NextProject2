import { Button, Divider } from "@mui/material";
import React, { useState } from "react";
import Header from "/components/Header";
import Heads from "/components/Heads";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
  };

  const inputStyle = { top: "-1.2rem", fontSize: "1.2rem" };

  const [msg, setMsg] = useState("Submit");
  const msgBox = () => {
    setMsg("Submit");
  };

  const submit = async (e) => {
    e.preventDefault();
    setMsg("Submitting");
    if (email !== "") {
      const formdata = {
        email,
        name,
        phone: contact,
        message,
      };

      await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formdata),
      }).then((res) => {
        if (res.status === 200) {
          setMsg("Submitted");
          setTimeout(msgBox, 2000);
          setName("");
          setEmail("");
          setContact("");
          setMessage("");
        }
      });
    } else {
      setMsg("Please Fill The Form");
      setTimeout(msgBox, 2000);
    }
  };
  return (
    <React.Fragment>
      <Heads title="Contact Us - Contact Us - Mg Technicals" />
      <Header background="#fff" color="#000" />
      <div className="contactContainer" style={{ paddingTop: 80 }}>
        <Divider className="divider">
          <div className="heading"></div>
          <h1>Contact Us</h1>
        </Divider>
        <form
          className="contactForm"
          style={{ flexDirection: "column" }}
          onSubmit={submit}
        >
          <div className="contactInputContainer">
            <label
              style={name !== "" ? inputStyle : { top: "" }}
              htmlFor="name"
            >
              Name
            </label>
            <input
              name="name"
              id="name"
              type="text"
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="contactInputContainer">
            <label
              style={contact !== "" ? inputStyle : { top: "" }}
              htmlFor="contact"
            >
              Mobile
            </label>
            <input
              name="contact"
              id="contact"
              type="text"
              value={contact}
              required
              onChange={(e) => setContact(e.target.value)}
            />
          </div>
          <div className="contactInputContainer">
            <label
              style={email !== "" ? inputStyle : { top: "" }}
              htmlFor="email"
            >
              Email
            </label>
            <input
              name="email"
              id="email"
              type="text"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="contactInputContainer">
            <label
              style={message !== "" ? inputStyle : { top: "" }}
              htmlFor="msg"
            >
              Message
            </label>
            <textarea
              name="msg"
              id="msg"
              rows={10}
              value={message}
              required
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>

          <Button type="submit" className="contactFormBtn">
            {msg}
          </Button>
        </form>

        <ul
          className="contactDetails"
          style={{ background: "#fff", marginTop: 20 }}
        >
          <h2>Contact Details</h2>
          <li>Sales Team No. - 6377036147</li>
          <li>Management Team No. - 9571735742</li>
          <li>Office Mail Id - info@mgtechnicals.com</li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Contact;
