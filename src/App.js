import React from "react";
import Home from "./components/Home";
import { useState } from "react";
import Rezultat from "./components/Rezultat";
import styles from "./App.module.css";

const App = () => {
  const [podaci, setPodaci] = useState([]);

  const deleteUser = (id) => {
    setPodaci([
      ...podaci.filter((el) => {
        return el.id !== id;
      }),
    ]);
  };

  const dodajUImenik = (entry) => {
    setPodaci(
      [...podaci, entry].sort((a, b) =>
        a.ime.toLowerCase() > b.ime.toLowerCase() ? 1 : -1
      )
    );
  };
  return (
    <div className={styles.main_main}>
      <div className={styles.naslov}>
        <p>TELEFONSKI IMENIK</p>
      </div>
      <div className={styles.div}>
        <Home dodajUImenik={dodajUImenik} podaci={podaci} />
        <Rezultat
          podaci={podaci}
          setPodaci={setPodaci}
          deleteUser={deleteUser}
        />
      </div>
    </div>
  );
};

export default App;
