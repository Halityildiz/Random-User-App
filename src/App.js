import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import emailSvg from "../src/assets/email.svg";
import locationSvg from "../src/assets/location.svg";
import phoneSvg from "../src/assets/phone.svg";

function App() {
  const [card, setCard] = useState([]);
  const { email, title, first, last, phone, city, country, date, age, large } =
    card;
  const url = "https://randomuser.me/api/";

  const cardData = async () => {
    const res = await axios.get(url);
    const info = await res.data.results[0];
    const {
      email,
      name: { title, first, last },
      phone,
      location: { city, country },
      dob: { date, age },
      picture: { large },
    } = info;
    setCard({
      email,
      title,
      first,
      last,
      phone,
      city,
      country,
      date: date.substring(0, 10),
      age,
      large,
    });
  };

  useEffect(() => {
    cardData();
  }, []);

  console.log(card);

  const handleClick = () => {
    window.location.reload(true);
  };

  return (
    <div className="container">
      <div className="card">
        <div className="user">
          <img
            style={{
              borderRadius: "50%",
              width: "200px",
              margin: " auto",
            }}
            src={large}
            alt={first}
          ></img>
          <h1>
            {title}. {first} {last}
          </h1>
        </div>
        <div className="mail">
          <img src={emailSvg} style={{}} alt={first}></img>
          <h2>{email}</h2>
        </div>
        <div className="tel">
          <img src={phoneSvg} style={{}} alt={phone}></img>
          <h2>{phone}</h2>
        </div>
        <div className="loc">
          <img src={locationSvg} style={{}} alt={city}></img>
          <h2>
            {city} - {country}
          </h2>
        </div>
        <p className="age">Age: {age}</p>
        <p className="date">Register Date: {date}</p>
      </div>
      <button className="btn" onClick={handleClick}>
        Random User
      </button>
    </div>
  );
}

export default App;
