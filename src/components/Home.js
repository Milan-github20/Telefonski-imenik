import React from "react";
import styles from "./Home.module.css";
import { useState } from "react";

const Home = (props) => {
  const [ime, setIme] = useState("");
  const [broj, setBroj] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.dodajUImenik({ ime, broj });
  };

  return (
    <div className={styles.home}>
      <div className={styles.main_div}>
        <div className={styles.unos_kontakta}>
          <form onSubmit={handleSubmit}>
            <input
              placeholder="Ime"
              required
              type="text"
              name="Ime"
              id="Ime"
              value={ime}
              onChange={(e) => setIme(e.target.value)}
            />
            <input
              placeholder="Broj telefona"
              required
              type="text"
              name="Broj"
              id="Broj"
              value={broj}
              onChange={(e) => setBroj(e.target.value)}
            />
            <div>
              <button type="submit">Dodaj</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
