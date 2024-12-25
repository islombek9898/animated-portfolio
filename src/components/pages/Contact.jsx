import React from "react";
import { Heading } from "../common/Heading";
import { contact } from "../data/dummydata";

export const Contact = () => {
  return (
    <>
      <div className="contact">
        <div className="container">
          <Heading title="Keep In Touch" />
          <div className="content flexsb">
            <div className="rigth">
              <form>
                <div className="flex">
                  <input
                    type="text"
                    placeholder="Name"
                    required
                    data-aos="zoom-in-down"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    data-aos="zoom-in-up"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  required
                  data-aos="zoom-in-up"
                />
                <textarea
                  data-aos="zoom-in-down"
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
                <button data-aos="zoom-in-down">Submit</button>
              </form>
            </div>

            <div className="left">
              {contact.map((item) => (
                <div className="box" data-aos="zoom-in-down">
                  <i>{item.icon}</i>
                  <p>{item.text1}</p>
                  <p>{item.text2}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
