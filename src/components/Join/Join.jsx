// import React , {useEffect,useState} from 'react'
import React from "react";
import "./Join.css";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import gmail from "../../assets/gmail.png";

const Join = () => {
  return (
    <div className="join set_margin" id="join_us">
      <div className="join12 more300">
        <span className="edit_text">Joining</span>
      </div>

      <div className="join12 less300">
        <span className="noedit">Joining</span>
      </div>

      <div className="leftrightjoin more1000">
        <div className="left_join">
          <div className="numlink">
            <span>Contact : +91 9736366056</span>
            <div className="social_links">
              <div className="socialtext">
                <span>Social Links : </span>
              </div>
              <a
                to="route"
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/EXALTGYMS"
              >
                <img className="facebook_icon" src={facebook} alt="" />
              </a>
              <a
                to="route"
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/fitnessexalt/"
              >
                <img src={instagram} alt="" />
              </a>
              <a
                to="route"
                target="_blank"
                rel="noreferrer"
                href="mailto:exaltaesthetics2@gmail.com"
              >
                <img className="gmail" src={gmail} alt="" />
              </a>
            </div>
          </div>
        </div>

        <div className="right_join">
          <div className="flip-card-container_join">
            <div className="flip-card_join">
              <div className="flip-card-back_join">
                <form className="email_contact_join">
                  <div>
                    Name* :&nbsp;{" "}
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      required
                    ></input>
                  </div>

                  <div>
                    Country code* :&nbsp;{" "}
                    <input
                      type="text"
                      name="dialcode"
                      placeholder="Enter your country code"
                      required
                    ></input>
                  </div>
                  <div>
                    Number* :&nbsp;{" "}
                    <input
                      type="number"
                      name="number"
                      placeholder="Enter your mobile number"
                      required
                    ></input>
                  </div>

                  <div className="foremail">
                    Email* :&nbsp;{" "}
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      required
                    ></input>
                  </div>
                  <div>
                    Present living location* :&nbsp;{" "}
                    <input
                      type="text"
                      name="place"
                      placeholder="Enter the name of your city"
                      required
                    ></input>
                  </div>
                  <div>
                    <label htmlFor="plan" required>
                      Choose a plan* : &nbsp;
                    </label>
                    <select name="plan" id="plan" required>
                      <option value="" disabled>
                        Select a plan
                      </option>
                      <option value="Regular Gym membership">
                        Regular gym membership
                      </option>
                      <option value="Three months membership">
                        Three months gym membership
                      </option>
                      <option value="Six months membership">
                        Six months gym membership
                      </option>
                      <option value="Personal training">
                        Offline Personal training
                      </option>
                      <option value="Personal training">
                        Online Personal training - 1 month membership
                      </option>
                      <option value="Personal training">
                        Online Personal training - 2 months membership
                      </option>
                      <option value="Skin Aesthetics">
                        Skin Aesthetics Program
                      </option>
                      <option value="Own fitness goal">
                        Mention your fitness goal below
                      </option>
                    </select>
                  </div>
                  <div>
                    <span className="text_goal">Share your thoughts* :</span>{" "}
                    &nbsp;{" "}
                    <textarea
                      className="fitness_goal"
                      type="text"
                      name="goal"
                      cols="30"
                      rows="10"
                      placeholder="Tell us about your fitness goal or any skin related issue. Do share any previous or present medical conditions."
                      required
                    ></textarea>
                  </div>
                  <div>
                    <button className="btn">Join Now</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="leftrightjoin less1000">
        <div className="right_join">
          <div className="flip-card-container_join">
            <div className="flip-card_join">
              <div className="flip-card-back_join">
                <form className="email_contact_join">
                  <div>
                    Name* :&nbsp;{" "}
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      required
                    ></input>
                  </div>
                  <div>
                    Country Code* :&nbsp;{" "}
                    <input
                      type="text"
                      name="dialcode"
                      placeholder="Enter your country code"
                      required
                    ></input>
                  </div>
                  <div>
                    Number* :&nbsp;{" "}
                    <input
                      type="number"
                      name="number"
                      placeholder="Enter your mobile number"
                      required
                    ></input>
                  </div>

                  <div>
                    Email* :&nbsp;{" "}
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      required
                    ></input>
                  </div>
                  <div>
                    Present living location* :&nbsp;{" "}
                    <input
                      type="text"
                      name="place"
                      placeholder="Enter the name of your city"
                      required
                    ></input>
                  </div>
                  <div>
                    <label htmlFor="planchange" required>
                      Choose a plan* : &nbsp;
                    </label>
                    <select
                      name="plan"
                      id="planchange"
                      className="makeplan"
                      required
                    >
                      <option value="" disabled>
                        Select a plan
                      </option>
                      <option value1="Regular gym membership">
                        Regular gym membership
                      </option>
                      <option value1="Three months membership">
                        Three months gym membership
                      </option>
                      <option value1="Six months membership">
                        Six months gym membership
                      </option>
                      <option value1="Personal training">
                        Offline Personal training
                      </option>
                      <option value1="Personal training">
                        Online Personal training - 1 month membership
                      </option>
                      <option value1="Personal training">
                        Online Personal training - 2 months membership
                      </option>
                      <option value1="Skin Aesthetics">
                        Skin Aesthetics Program
                      </option>
                      <option value1="Own fitness goal">
                        Mention your fitness goal below
                      </option>
                    </select>
                  </div>
                  <div className="writeabout">
                    <span className="text_goal">Share your thoughts* :</span>{" "}
                    &nbsp;{" "}
                    <textarea
                      className="fitness_goal"
                      type="text"
                      name="goal"
                      cols="30"
                      rows="10"
                      placeholder="Tell us about your fitness goal or any skin related issue. Do share any previous or present medical conditions."
                      required
                    ></textarea>
                  </div>
                  <div>
                    <button className="btn btn_join">Join Now</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="left_join">
          <div className="numlink">
            <span>Contact : +91 9736366056</span>
            <div className="social_links">
              <div className="socialtext">
                <span>Social Links : </span>
              </div>
              <a
                to="route"
                target="_blank"
                aria-label="Facebook"
                rel="noreferrer"
                href="https://www.facebook.com/EXALTGYMS"
              >
                <img className="facebook_icon" src={facebook} alt="" />
              </a>
              <a
                to="route"
                target="_blank"
                aria-label="Instagram"
                rel="noreferrer"
                href="https://www.instagram.com/fitnessexalt/"
              >
                <img src={instagram} alt="" />
              </a>
              <a
                to="route"
                target="_blank"
                aria-label="Gmail"
                rel="noreferrer"
                href="mailto:exaltaesthetics1@gmail.com"
              >
                <img className="gmail" src={gmail} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
