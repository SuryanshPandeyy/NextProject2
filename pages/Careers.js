import { Button } from "@mui/material";
import React from "react";

const Input = ({ value, setValue, name, placeholder }) => {
  return (
    <div className="formBox">
      <label htmlFor={name}>{name}</label>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        id={name}
        placeholder={placeholder}
      />
    </div>
  );
};

const Careers = () => {
  return (
    <>
      <div className="careerContainer">
        <div className="careerBox">
          <div className="detailContainer">Let&apos;s Get in touch</div>

          <div className="careerForm">
            <h2>Get in touch</h2>
            <form>
              <Input name="Name" placeholder="Enter Your Name" />
              <Input name="Name" placeholder="Enter Your Name" />
              <Input name="Name" placeholder="Enter Your Name" />
              <Button>Submit</Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Careers;
